import Image from 'next/image';
import { Container, Content, ErrorMessage, FormContainer } from '../../styles/auth/auth.styles';

import logo from "../../assets/logo.png";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/src/services/api';
import useLogin from '@/src/hooks/useLogin';
import { toast } from 'react-toastify';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmePassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const buttonLabel = isLoading ? "Carregando..." : "Cadastrar";
    const router = useRouter();
    const { login } = useLogin();

    const verifyEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const signup = async () => {
        const passwordIsValid = (password != '') && (password === confirmePassword);
        try {
            setIsLoading(true);
            setHasError(false);
            setUsernameErrorMessage('');
            setPasswordErrorMessage('');
            setEmailErrorMessage('');
            if (!username) {
                setUsernameErrorMessage("Nome de usuário inválido");
                setHasError(true);
                throw Error();
            }
            if (!verifyEmail(email)) {
                setEmailErrorMessage("E-mail inválido");
                setHasError(true);
                throw Error();
            }
            if (!passwordIsValid) {
                setPasswordErrorMessage("As senhas não conferem");
                setHasError(true);
                throw Error();
            }
            await api.post('/user', {
                username,
                email,
                password
            })
            await login({ username, password });
            router.push('/signin');
        } catch (err: any) {
            const userAlreadyExists = err.response?.status === 500;
            const hasEmptyInput = err.response?.status === 400;
            if (userAlreadyExists) {
                setUsernameErrorMessage("Nome de usuário/email já existente");
                setHasError(true);
            }
            if (hasEmptyInput) {
                setUsernameErrorMessage("Nome de usuário é obrigatório");
                setHasError(true);
            }
            toast.error("Não foi possível cadastrar o usuário!");
        } finally {
            setIsLoading(false);
        }
    }

    const inputProps = [
        { type: "text", placeholder: "Nome de usuário", setState: setUsername, errorMessage: usernameErrorMessage },
        { type: "email", placeholder: "E-mail", setState: setEmail, errorMessage: emailErrorMessage },
        { type: "password", placeholder: "Senha", setState: setPassword, errorMessage: '' },
        { type: "password", placeholder: "Confirme a Senha", setState: setConfirmPassword, errorMessage: passwordErrorMessage }
    ]

    return (
        <Container>
            <Content>
                <Image src={logo} alt="GoFinance" width={150}></Image>
                <FormContainer>
                    {inputProps.map((prop) =>
                        <>
                            <input
                                key={prop.placeholder}
                                type={prop.type}
                                placeholder={prop.placeholder}
                                onChange={(evt) => prop.setState(evt.target.value)}
                                required
                            />
                            <ErrorMessage>{hasError ? prop.errorMessage : ''}</ErrorMessage>
                        </>
                    )}

                    <button onClick={signup}>{buttonLabel}</button>
                    <p>Já possui uma conta, <Link href="/signin">voltar</Link></p>
                </FormContainer>
            </Content>
        </Container>
    )
}
export default Signin;
