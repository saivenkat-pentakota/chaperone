import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import {
  StyledContainer,
  StyledImage,
  StyledRow,
  ButtonContainer,
} from "./Nursery.style";
import image1 from "../../images/nurseryimages/Ellipse 62.png";
import image2 from "../../images/nurseryimages/Ellipse 63.png";
import image3 from "../../images/nurseryimages/Ellipse 64.png";
import image4 from "../../images/nurseryimages/Ellipse 65.png";
import image5 from "../../images/nurseryimages/Ellipse 66.png";
import image6 from "../../images/nurseryimages/Ellipse 67.png";
import image7 from "../../images/nurseryimages/Ellipse 68.png";
import image8 from "../../images/nurseryimages/Ellipse 69.png";
import image9 from "../../images/nurseryimages/Ellipse 70.png";
import image10 from "../../images/nurseryimages/Ellipse 71.png";

export default function Nursery() {
  const images = [
    { url: image1, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image2, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image3, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image4, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image5, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image6, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image7, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image8, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image9, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
    { url: image10, description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum" },
  ];

  const itemsPerPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <StyledContainer>
      <Row>
        <h3>Nursery</h3>
      </Row>
      <StyledRow>
        <Col md="auto">
          <ButtonContainer>
            <Button onClick={handlePrev} disabled={currentIndex === 0}>
              &lt; 
            </Button>
          </ButtonContainer>
        </Col>
        <Col>
          <Row>
            {visibleImages.map((image, index) => (
              <Col key={index}>
                <StyledImage src={image.url} alt={image.description} />
                <p>{image.description}</p>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md="auto">
          <ButtonContainer>
            <Button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= images.length}
            >
              &gt; 
            </Button>
          </ButtonContainer>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
}
