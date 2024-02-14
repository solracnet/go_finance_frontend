import Card from '../components/Card';
import Chart from '../components/Chart';
import DateInput from '../components/DateInput';
import SearchBar from '../components/SearchBar';
import TableContainer from '../components/TableContainer';
import TableDetails from '../components/TableDetails';
import TableNavbar from '../components/TableNavbar';
import TableRow from '../components/TableRow';
import { Container, RightSide } from '../styles/home/home.styles';

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

const tableRows = [
    {
        title: 'Título',
        description: 'Descrição'
    },
    {
        title: 'Título2',
        description: 'Descrição2'
    },
    {
        title: 'Título3',
        description: 'Descrição3'
    }
]

const Home = () => (
    <Container>
        <TableContainer>
            <TableDetails>
                {tableRows.map((row, index) => (
                    <TableRow key={index} title={row.title} description={row.description} />
                ))}
            </TableDetails>
        </TableContainer>
        {/* <Chart />
        <RightSide>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} value={card.value} />
            ))}
            <button>Download</button>
        </RightSide> */}
    </Container>
);

export default Home;
