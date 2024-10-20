import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)({
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const StyledImage = styled.img({
  height: "120px",
  width: "120px",
});

export const StyledRow = styled(Row)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  
});
