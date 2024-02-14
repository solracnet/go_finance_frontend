import Image from 'next/image';
import { Container, Content } from '../../styles/auth/auth.styles';

import logo from "../../assets/logo.png";
import Link from 'next/link';

const Signin = () => (
    <Container>
        <Content>
            <Image src={logo} alt="GoFinance" width={150}></Image>
            <input type="text" placeholder="Nome de usuário" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a Senha" />
            <button>Cadastrar</button>
            <p>Já possui uma conta, <Link href="/signin">voltar</Link></p>
        </Content>
    </Container>
)
export default Signin;
