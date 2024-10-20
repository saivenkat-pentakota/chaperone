import { Container } from "react-bootstrap";
import styled from "styled-components";
import bg1 from '../../images/bg1.png'
import bg2 from '../../images/bg2.png';

export const StyledThankyoupageContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width:'100%',
    height:'100vh',
    color: '#165315',

  
});

export const StyledContainer = styled('div')({
    position: 'relative',
    height:'650px',
    width: '450px', 
    padding: '20px',
    display: 'flex',
    gap:'40px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: '2px solid #ccc',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    p: {
        fontSize: '20px',
        fontWeight: '500',
    },
    h3: {
        fontSize: '24px',
        fontWeight: '700',
    },
    img: {
        width: '97px',
        height: '97px',
    },
    hr: {
        width: '100%',
    },

    backgroundImage:`url(${bg1}),url(${bg2})`,
    backgroundPosition:'bottom left,top right',
    backgroundRepeat:'no-repeat,no-repeat',
    backgroundSize: '250px 250px, 150px 550px',
});


export const StyledCloseButton = styled('button')({
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#165315',
});

export const StyledButton = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    height: '50px',
    backgroundColor: '#165315',
    color: '#FFFFFF',
});
