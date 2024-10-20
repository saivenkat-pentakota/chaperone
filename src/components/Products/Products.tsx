import { Col, Row } from "react-bootstrap";
import FilterComponent from "../Filter/Filter";
import { StyledProductContainer } from "./Products.style";
import { StyledPlantsButton } from "../DescriptionCard/Descriptioncard.style";
import image1 from "../../images/products/product1.png";
import image2 from "../../images/products/product2.png";
import image3 from "../../images/products/product3.png";
import wishlistIcon from "../../images/wishlist.png";
import Product from "../Product/Product";

export default function Products() {
  return (
    <StyledProductContainer>
      <Row>
        <Col xs={3}>
          <FilterComponent />
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={2}>300 Products</Col>
            <Col>
              <StyledPlantsButton xs={2}>Sort By</StyledPlantsButton>
            </Col>
          </Row>
          <Row>
            <Product />
          </Row>
        </Col>
      </Row>
    </StyledProductContainer>
  );
}
