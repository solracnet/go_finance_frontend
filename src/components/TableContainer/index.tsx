import { Container } from '@/src/styles/table-container/table-container.styles';
import { ReactNode } from 'react';

interface TableContainerProps {
    children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
    return <Container>
        {children}
    </Container>;
}

export default TableContainer;
