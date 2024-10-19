import styled from "styled-components";

export const StyledContainer = styled.div`
margin:10px;
`;

export const StyledNav = styled.nav`
display:flex;
justify-content:center;
margin-top:10px;

ul{
display:flex;
list-style-type:none;
padding:0;
}

li{
margin:0 5px;
}

a{
text-decoration:none;
color:black;
font-weight:500;
padding:5px 10px;
&:hover{
color:#F3A939}}
`;


export const StyledIcons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

img{
width:25px;
}
`;




