import { Container } from '@/src/styles/table-container/table-container.styles';
import { ReactNode } from 'react';
import TableNavbar from '../TableNavbar';

interface TableContainerProps {
    children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
    return <Container>
        <TableNavbar />
        {children}
    </Container>;
}

export default TableContainer;
