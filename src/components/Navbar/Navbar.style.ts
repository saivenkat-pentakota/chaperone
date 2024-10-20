import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)({
    height: '97px',
    maxWidth: '1400px',
    alignContent: 'center',
    fontSize:'15px',
    fontWeight:'500',
});

export const StyledRow = styled(Row)({
    height: '100%',
    alignItems: 'center',
});


export const StyledIcons = styled.div({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    img:{
        width:'18px',
    },
});





