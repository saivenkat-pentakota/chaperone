
import { Col, Row } from "react-bootstrap";
import { StyledCol, StyledColCenter, StyledContainer, StyledRow } from "./Promotion.style";

export default function Promotion() {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledColCenter xs={10}>Free Shipping on orders above 999/-</StyledColCenter>
        <StyledCol xs={2}>Call us on: +91 98768 05120</StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}
