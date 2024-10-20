import styled from "styled-components";

export const StyledSearchContainer = styled.div({
  display:'flex',
  justifyContent:'center'
})
export const StyledSearchbar = styled.div({
  display:'flex',
  alignItems:'center',
  width:'370px',
  height:'26px',
  borderBottom:'2px solid #ccc',

  img:{
    width:'20px',
    marginRight: '0.5rem',
  },
  input:{
    flex:'1',
    border:'none',
    outline:'none',
    paddingLeft:'0.5rem',
  }
});


