import { Body, Container, Header } from '@/src/styles/table-details/table-details.styles';
import TableRow from '../TableRow';
import Image from 'next/image';

interface TableDetailsProps {
    children: React.ReactNode;
}

const TableDetails = ({ children }: TableDetailsProps) => {
    return <Container>
        <Header>
            <h1>Título</h1>
            <h1>Descrição</h1>
            <h1></h1>
        </Header>
        <Body>
            {children}
        </Body>
    </Container>;
}

export default TableDetails;
