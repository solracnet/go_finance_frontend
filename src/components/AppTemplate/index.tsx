import { ReactNode } from 'react';
import { Container, Content } from './styles';
import SideMenu from '../SideMenu';
import { useRouter } from 'next/router';

interface AppTemplateProps {
    children: ReactNode;
}
// no javascript quando usa && é como um if sem o else
const AppTemplate = ({ children }: AppTemplateProps) => {
    const { pathname } = useRouter();
    const isAuthPages = pathname === '/signin' || pathname === '/signup';
    return (
        <Container>
            {!isAuthPages && <SideMenu></SideMenu>}
            <Content>
                {children}
            </Content>
        </Container>
    )
}
export default AppTemplate;
