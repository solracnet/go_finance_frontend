import DateInput from '../DateInput';
import SearchBar from '../SearchBar';
import { Container, LeftSide } from './styles';

const TableNavbar = () => (
    <Container>
        <LeftSide>
            <DateInput title="Data inicial" />
            <DateInput title="Data final" />
            <SearchBar />
            <select>
                <option value="1">Todas as contas</option>
                <option value="2">Conta 1</option>
                <option value="3">Conta 2</option>
                <option value="4">Conta 3</option>
            </select>
        </LeftSide>
        <button>Adicionar</button>
    </Container>
)

export default TableNavbar;
