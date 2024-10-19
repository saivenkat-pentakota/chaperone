import styled from "styled-components";

export const StyledSearchContainer = styled.div`
display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  margin: 2rem 0;

`;

export const StyledSearchbar = styled.div`
display: flex;
  align-items: center;
  width: 370px;
  height:26px; 
  border-bottom: 2px solid #ccc;
img{
width: 20px;
  margin-right: 0.5rem; 
  }
input{
flex: 1;
  border: none;
  outline: none;
  padding-left: 0.5rem; }
`;
