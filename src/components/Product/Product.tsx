import { useState } from "react"; // Import useState
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import wishlistIcon from "../../images/wishlist.png";
import wishlistedIcon from "../../images/wishlisted.png";

import { ProductProps } from "./Product.props";
import {
    StyledAddToCartButton,
    StyledButton,
    StyledBuyOnRentButton,
    StyledContainer,
    StyledImage,
    StyledIncrementDecrementButton,
    StyledProductContainer,
    StyledRow,
    StyledWishlistRow,
} from "./Product.style";

export default function Product({
  products,
  decrementQuantity,
  incrementQuantity,
  rentOnAdded,
}: ProductProps) {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate("/thankyou");
  };

  return (
    <>
      <Row>
        {products?.map((productDetails) => (
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
                  <StyledImage
                    src={productDetails.ImageUrl}
                    alt={productDetails.productName}
                  />
                </StyledRow>
                <Row>
                  <StyledButton onClick={handleViewProduct}>
                    View Product
                  </StyledButton>
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
                  <Row>
                    <StyledAddToCartButton>
                      <StyledIncrementDecrementButton
                        disabled = {productDetails.noOfItemsAddedToCart < 0}
                        onClick={() =>
                          decrementQuantity(
                            productDetails.productId,
                            productDetails.noOfItemsAddedToCart - 1
                          )
                        }
                      >
                        -
                      </StyledIncrementDecrementButton>
                      <span style={{ margin: "0 10px", width:'90px'  }}>
                        {productDetails.noOfItemsAddedToCart > 0
                          ? productDetails.noOfItemsAddedToCart
                          : "Add to Cart"}
                      </span>
                      <StyledIncrementDecrementButton
                        onClick={() =>
                          incrementQuantity(
                            productDetails.productId,
                            productDetails.noOfItemsAddedToCart + 1
                          )
                        }
                      >
                        +
                      </StyledIncrementDecrementButton>
                    </StyledAddToCartButton>
                  </Row>
                  <Col>
                    <StyledBuyOnRentButton
                      onClick={() =>
                        rentOnAdded(
                          productDetails.productId,
                          !productDetails.rentOnAdded
                        )}
                      style={
                        productDetails.rentOnAdded
                          ? { backgroundColor: "#f0f0f0", color: "#165315" }
                          : {}
                      }
                    >
                      {productDetails.rentOnAdded ? "Rent Added" : "Buy on Rent"}
                    </StyledBuyOnRentButton>
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
