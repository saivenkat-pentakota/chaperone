import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledFooterContainer = styled('div')({
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    width: '100%',
    backgroundColor: '#F0FFE5',
});

export const StyledRegistrationContainer = styled('div')({
    display:'flex',
    width: '100%',
    backgroundColor: '#F0FFE5',
});

export const StyledContainer = styled(Container)({
    maxWidth: '1400px',
    fontSize:'16px',
    color:'#838383',
    margin:'64px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    
    h3:{
        color:'black',
    },
    a:{
        color:'#838383',
    },
    input:{
        height:'35px',
        padding:'10px',

    },
    button:{
        backgroundColor:'#247822',
        width:'130px',
        height:'35px',
        marginTop:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'25px',
        

    }
});

export const StyledCol = styled(Col)({
display:'flex',
flexDirection:'column',
gap:'10px',
padding: '0 24px',

});

export const StyledIconsCol = styled(Col)({
    display:'flex',
    flexDirection:'row',
    gap:'10px'
});


export const StyledRow = styled(Row)({
    display:'flex',
    flexDirection:'column',
    gap:'10px'
})
