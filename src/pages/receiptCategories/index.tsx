'use client';
import TableContainer from '@/src/components/TableContainer';
import TableDetails from '@/src/components/TableDetails';
import TableNavbar from '@/src/components/TableNavbar';
import TableRow from '@/src/components/TableRow';
import api from '@/src/services/api';
import { Container } from '@/src/styles/global';
import { ReceiptCategoryType } from '@/src/types/categories';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ReceiptCategories = () => {
    const [user_id, setUserId] = useState<string | null>('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState<ReceiptCategoryType[]>([])

    const listReceiptCategories = useCallback(
        async (id: string | null | undefined) => {
            try {
                setLoading(true);
                const responseData = await api.get(`/category?user_id=${id}&type=receipt`)
                setCategories(responseData.data)
            } catch (err) {
                toast.error("Erro ao listar as categorias!" + err)
            } finally {
                setLoading(false);
            }
        }, []
    )

    useEffect(() => {
        const userId = localStorage.getItem("@gofinance:user_id")
        setUserId(userId)
        listReceiptCategories(userId)
    }, [user_id, listReceiptCategories]);

    const createCategoryHandle = useCallback(
        async () => {
            try {
                await api.post('/category', {
                    user_id: Number(user_id),
                    title,
                    type: 'receipt',
                    description
                })
                listReceiptCategories(user_id)
                toast.success("Categoria de receita criada com sucesso!")
            } catch (err) {
                toast.error("Erro ao salvar a categoria!" + err)
            }
        }, [user_id, title, description, listReceiptCategories]
    )

    if (loading) {
        return <div>Carregando</div>
    }
    return (
        <Container>
            <TableContainer>
                <TableNavbar
                    title="Nova categoria de receita"
                    buttonTitle="Salvar"
                    setTitle={setTitle}
                    setDescription={setDescription}
                    createCategoryHandle={createCategoryHandle}
                />
                <TableDetails>
                    {categories.map((category) => (
                        <TableRow key={category.id} title={category.title} description={category.description} />
                    ))}
                </TableDetails>
            </TableContainer>
        </Container>
    );
}

export default ReceiptCategories;
