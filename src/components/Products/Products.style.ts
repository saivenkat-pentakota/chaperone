import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledProductContainer = styled(Container)({
    maxWidth: '1400px',
    '.disabledButton': {
        opacity: '.5',
      }
});

export const StyledViewMoreButton = styled('button')({
    background :'#144D14',
    color: 'white',
    width: '200px',
    height: '50px',
    border: 'none',
    borderRadius: '40px',
    fontSize: '18px',
});

export const StyledViewMoreRow = styled(Row)({
    marginTop: '45px',
    display: 'flex',
    justifyContent: 'center',
});

export const StyledCol = styled(Col)({
    display: 'flex',
    gap: '24px',
});

