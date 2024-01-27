import Image from 'next/image';
import { Container, ValueLabel } from './styles';

import valueIcon from "../../assets/value-icon.png";

interface CardProps {
    title: string;
    value: string;
}

const Card = ({ title, value }: CardProps) => {
    return (
        <Container>
            <h1>{title}</h1>
            <ValueLabel>
                <Image src={valueIcon} alt="arrowDown" width={20} height={20}></Image>
                <p>{value}</p>
            </ValueLabel>
        </Container>
    );
}

export default Card;
