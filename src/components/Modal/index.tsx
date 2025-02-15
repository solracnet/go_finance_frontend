import { useRef, useState } from 'react';
import { Container, OutsideContainer } from './styles';
import { ModalProps } from '../TableNavbar';

const Modal = ({ title, buttonTitle, setTitle, setDescription, createCategoryHandle }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const outSideContainerRef = useRef(null)
    const openModal = () => setIsOpen(true)
    const closeModal = (evt: React.MouseEvent<HTMLElement>) => {
        if (evt.target === outSideContainerRef.current) {
            setIsOpen(false)
        }
    }

    const submit = async () => {
        await createCategoryHandle()
        setIsOpen(false)
    }

    return (
        <>
            <button onClick={openModal}>Adicionar</button>
            {
                isOpen && (
                    <OutsideContainer onClick={closeModal} ref={outSideContainerRef}>
                        <Container>
                            <h2>{title}</h2>
                            <input type="text" placeholder="Título" onChange={(evt) => setTitle(evt.target.value)} />
                            <input type="text" placeholder="Descrição" onChange={(evt) => setDescription(evt.target.value)} />

                            <button onClick={submit}>{buttonTitle}</button>
                        </Container>
                    </OutsideContainer>
                )
            }
        </>
    )
}

export default Modal;
