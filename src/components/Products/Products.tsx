import { Col, Row, Dropdown } from "react-bootstrap";
import { StyledPlantsButton } from "../DescriptionCard/Descriptioncard.style";
import FilterComponent from "../Filter/Filter";
import Product from "../Product/Product";
import { ProductDetails } from "../Product/Product.props";
import { StyledCol, StyledProductContainer, StyledViewMoreButton, StyledViewMoreRow } from "./Products.style";
import { useState } from "react";
import { defaultproducts } from "./DefaultProducts";

export default function Products() {
  const [products, setProducts] = useState<ProductDetails[]>(defaultproducts.slice(0, 9));

  function viewMoreProducts() {
    setProducts(defaultproducts.slice(0, products.length + 6));
  }

  const incrementQuantity = (productId: string, quantity: number) => {
    const index = products?.findIndex(
      (product) => product.productId === productId
    );
    const newProducts = [...products];
    if (index >= 0) {
      newProducts[index].noOfItemsAddedToCart = quantity;
    }
    setProducts(newProducts);
  };

  const decrementQuantity = (productId: string, quantity: number) => {
    if (quantity < 0) {
      return;
    }
    const index = products?.findIndex(
      (product) => product.productId === productId
    );
    const newProducts = [...products];
    if (index >= 0) {
      newProducts[index].noOfItemsAddedToCart = quantity;
    }
    setProducts(newProducts);
  };

  const rentOnAdded = (productId: string, rentOnAdded: boolean) => {
    const index = products?.findIndex(
      (product) => product.productId === productId
    );
    const newProducts = [...products];
    if (index >= 0) {
      newProducts[index].rentOnAdded = rentOnAdded;
    }
    setProducts(newProducts);
  };

  const wishListProduct = (productId: string, isWhishListed: boolean) => {
    const index = products?.findIndex(
      (product) => product.productId === productId
    );
    const newProducts = [...products];
    if (index >= 0) {
      newProducts[index].isWhishListed = isWhishListed;
    }
    setProducts(newProducts);
  };

  const isAllProductsViewed = defaultproducts.length === products.length;

  return (
    <StyledProductContainer>
      <Row>
        <Col xs={3}>
          <FilterComponent />
        </Col>
        <Col xs={9}>
          <Row>
            <StyledCol xs={3}>
            <p> {defaultproducts.length} products</p>
              <Dropdown>
                <Dropdown.Toggle 
                  as={StyledPlantsButton} 
                  id="dropdown-basic"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    padding: '5px',
                    width: '120px',
                    top: '-5px',
                  }}
                > 
                SORT BY                
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Price: Low to High</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Price: High to Low</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Name: A to Z</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Name: Z to A</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledCol>
          </Row>
          <Row>
            <Product
              products={products}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              rentOnAdded={rentOnAdded}
              wishListProduct={wishListProduct}
            />
          </Row>
          <StyledViewMoreRow>
            <StyledViewMoreButton 
              className={isAllProductsViewed ? 'disabledButton' : ''}  
              disabled={isAllProductsViewed} 
              onClick={viewMoreProducts}>
              View More
            </StyledViewMoreButton>
          </StyledViewMoreRow>
        </Col>
      </Row>
    </StyledProductContainer>
  );
}
