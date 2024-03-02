import Image from 'next/image';
import { Container, Content, ErrorMessage, FormContainer } from '../../styles/auth/auth.styles';

import logo from "../../assets/logo.png";
import Link from 'next/link';
import { useState } from 'react';
import useLogin from '@/src/hooks/useLogin';
import { toast } from 'react-toastify';

const Signin = () => {
    const { login } = useLogin();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async () => {
        try {
            await login({ username, password });
        } catch (err: any) {
            const userNotFount = err.response?.status === 400 || err.response?.status === 404;
            if (userNotFount) {
                setErrorMessage('Usuário ou senha inválidos');
            }
            toast.error("Usuário ou senha inválidos!");
        }
    }
    return (
        <Container>
            <Content>
                <Image src={logo} alt="GoFinance" width={150}></Image>
                <FormContainer>
                    <input type="text" placeholder="Usuário" onChange={(evt) => setUsername(evt.target.value)} />
                    <input type="password" placeholder="Senha" onChange={(evt) => setPassword(evt.target.value)} />
                    <button onClick={signIn}>Entrar</button>
                    <p>Ainda não possui uma conta, <Link href="/signup">cadastre-se</Link></p>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </FormContainer>
            </Content>
        </Container>
    )
}
export default Signin;
