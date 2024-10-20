import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";

export const StyledContainer = styled(Container)({
    backgroundColor: '#165315',
    fontSize: '14px',
    color: 'white',
    maxWidth: '100%',
    height: '33px',
});

export const StyledRow = styled(Row)({
    height: '100%',
});

export const StyledCol = styled(Col)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledColCenter = styled(StyledCol)({
    paddingLeft: '16.7%',
});