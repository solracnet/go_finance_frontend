import Image from 'next/image';
import { Container } from './styles';

import searchIcon from '../../assets/search.png';

const SearchBar = () => (
    <Container>
        <input type="search" placeholder="Pesquisar" />
        <Image src={searchIcon} alt="/" width={40} />
    </Container>
)

export default SearchBar;
