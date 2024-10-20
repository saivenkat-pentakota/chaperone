import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled('button')({
    background: '#165315',
    width: '100%',
    color: 'white',
    height: '40px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '500',
});

export const StyledImage  = styled('img')({
    height: '243px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledRow  = styled(Row)({
    display: 'flex',
    justifyContent: 'center',
});

export const StyledWishlistRow  = styled(Row)({
    display: 'flex',
    justifyContent: 'end',
});

export const StyledContainer  = styled(Container)({
    border: '1px solid lightgray',    
});

export const StyledProductContainer  = styled(Container)({
    marginTop: '45px',
    gap: '45px',
    display: 'flex',
    flexDirection: 'column',
});

export const StyledAddToCartButton = styled('button')({
    width: '100%',
    height: '37px',
    background: '#165315',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '0 5px',
    border: 'none',
    marginRight: '5px',
});

export const StyledIncrementDecrementButton = styled('button')({
    background: 'none', 
    border: 'none', 
    color: 'white', 
    fontSize: '16px',
    fontWeight: '500', 
    cursor: 'pointer', 
    padding: '0 5px', 
});

export const StyledBuyOnRentButton = styled('button')({
    width: '100%',
    height: '37px',
    color: '#144D14',
    fontSize: '16px',
    fontWeight: '500',
    background: 'transparent',
    border: '1px solid #144D14',
    borderRadius: '10px',
});

export const StyledStar = styled('p')({
    fontSize: '25px',
    color: '#FAD728',
    position: 'relative',
    top: '-8px',
});

export const StyledUnStar = styled('p')({
    fontSize: '25px',
    position: 'relative',
    top: '-8px',
});
