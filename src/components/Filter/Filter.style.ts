import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";


export const StyledFilterContainer = styled(Col)({
    maxWidth:'300px',
    backgroundColor: '#f0fae3',
    padding: '20px',
    borderRadius: '8px',
    fontSize:'16px',
    color:'grey',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

export const StyledFilterHeader = styled(Row)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottom: "1px solid #ccc"
});


export const StyledFilterTitle = styled(Col)({
    '@media (max-width: 768px)': {
        fontSize: '14px',
    }
});


export const StyledClearButton = styled(Col)({
    background: 'none',
    border: 'none',
    display:'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        fontSize: '11px',
    }
});

export const StyledFilterList = styled(Row)({
    display: 'flex',
    flexDirection: 'column',
});


export const StyledFilterItem = styled(Col)({
    marginBottom: '10px',
});


export const StyledFilterTitleItem = styled(Row)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
    '@media (max-width: 768px)': {
        fontSize: '13px',
    }
});


export const StyledFilterContent = styled(Col)({
    padding: '10px',
    backgroundColor: '#fff',
    marginTop: '5px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const StyledToggleIcon = styled(Col)({
    display: 'flex',
    justifyContent: 'flex-end',
});
