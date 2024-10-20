import { Col, Row } from "react-bootstrap";
import {
  StyledPlantsButton,
  StyledDescriptionContainer,
  StyledPotsButton,
  StyledButtonsContainer,
} from "./Descriptioncard.style";

export default function Descriptioncard() {
  return (
    <StyledDescriptionContainer>
      <StyledButtonsContainer>
        <StyledPlantsButton xs={1}>Plants</StyledPlantsButton>
        <StyledPotsButton xs={1}>Pots</StyledPotsButton>
      </StyledButtonsContainer>

      <Row>
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur
      </Row>
    </StyledDescriptionContainer>
  );
}
