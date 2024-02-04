import Card from '../components/Card';
import Chart from '../components/Chart';
import { Container, RightSide } from './styles';

const cardData = [
    {
        title: 'Saldo a pagar',
        value: 'R$ 120,55'
    },
    {
        title: 'Saldo a receber',
        value: 'R$ 125,55'
    },
    {
        title: 'Saldo total',
        value: 'R$ 5,00'
    }
]

const Home = () => (
    <Container>
        <Chart />
        <RightSide>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} value={card.value} />
            ))}
            <button>Download</button>
        </RightSide>
    </Container>
);

export default Home;
