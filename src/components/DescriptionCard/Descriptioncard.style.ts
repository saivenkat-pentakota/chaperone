import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledDescriptionContainer = styled(Container)({
    maxWidth: '1400px',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    gap: '24px',
});

export const StyledButtonsContainer = styled(Row)({
    display:'flex',
    gap: '10px',  
    height: '37px',  
    fontSize: '20px',
    fontWeight: '500',
});

export const StyledPlantsButton = styled(Col)({
    backgroundColor: '#165315',
    border: '2px solid #165315',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
});

export const StyledPotsButton = styled(Col)({
    border:'2px solid #ccc',
    color:'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
