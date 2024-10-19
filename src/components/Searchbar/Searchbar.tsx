import searchImg from '../../images/search.png';
import plantImg from '../../images/search-plant.png';
import { StyledSearchbar, StyledSearchContainer } from './Searchbar.style';
export default function Searchbar(){
    return(
        <StyledSearchContainer>
        <StyledSearchbar>
          <img src={searchImg} alt="search"/>
          <input type="text" placeholder="Search Product..." />
          <img src={plantImg} alt="search-plant" />
        </StyledSearchbar>
      </StyledSearchContainer>
    );
}