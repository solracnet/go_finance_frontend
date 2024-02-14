import { Container } from '@/src/styles/table-row/table-row.styles';
import Image from 'next/image';

import deleteIcon from '../../assets/delete.png';

interface TableRowProps {
    title: string,
    description: string
}

const TableRow = ({ title, description }: TableRowProps) => {
    return <Container>
        <span>{title}</span>
        <span>{description}</span>
        <Image src={deleteIcon} alt="" width={20} />
    </Container>;
}

export default TableRow;
