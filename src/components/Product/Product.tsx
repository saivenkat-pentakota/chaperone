import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import wishlistIcon from "../../images/wishlist.png";
import wishlistedIcon from "../../images/wishlisted.png";

import { ProductProps } from "./Product.props";
import {
  StyledAddToCartButton,
  StyledButton,
  StyledBuyOnRentButton,
  StyledContainer,
  StyledImage,
  StyledProductContainer,
  StyledRow,
  StyledWishlistRow,
} from "./Product.style";

export default function Product(props: ProductProps) {
  const navigate = useNavigate(); 

  const handleViewProduct = () => {
    navigate('/thankyou');
  };

  return (
    <>
      <Row>
        {props?.products?.map((productDetails) => (
          <Col xs={4} key={productDetails.productId}>
            <StyledProductContainer>
              <StyledContainer>
                <StyledWishlistRow>
                  <span>
                    {productDetails.isWhishListed ? (
                      <img src={wishlistedIcon} alt="Wishlisted" />
                    ) : (
                      <img src={wishlistIcon} alt="Wishlist" />
                    )}
                  </span>
                </StyledWishlistRow>
                <StyledRow>
                  <StyledImage src={productDetails.ImageUrl} alt={productDetails.productName} />
                </StyledRow>
                <Row>
                  <StyledButton onClick={handleViewProduct}>View Product</StyledButton>
                </Row>
              </StyledContainer>
              <Container>
                <Row>
                  <h3>{productDetails.productName}</h3>
                </Row>
                <Row>
                  <p>{productDetails.description}</p>
                </Row>
                <Row>{productDetails.ratings}</Row>
                <Row>
                  <Col xs={2}>
                    <p>{productDetails.actualCost}</p>
                  </Col>
                  <Col xs={2}>
                    <h4>{productDetails.currentCost}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <StyledAddToCartButton>
                      <Row><button>-</button>Add to Cart<button>+</button></Row>
                    </StyledAddToCartButton>
                  </Col>
                  <Col>
                    <StyledBuyOnRentButton>Buy on Rent</StyledBuyOnRentButton>
                  </Col>
                </Row>
              </Container>
            </StyledProductContainer>
          </Col>
        ))}
      </Row>
    </>
  );
}
