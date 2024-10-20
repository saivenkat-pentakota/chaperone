import { Col, Row } from "react-bootstrap";
import image1 from "../../images/products/product1.png";
import image2 from "../../images/products/product2.png";
import image3 from "../../images/products/product3.png";
import { StyledPlantsButton } from "../DescriptionCard/Descriptioncard.style";
import FilterComponent from "../Filter/Filter";
import Product from "../Product/Product";
import { ProductDetails } from "../Product/Product.props";
import { StyledProductContainer } from "./Products.style";
import { useState } from "react";

export default function Products() {
  const defaultproducts: ProductDetails[] = [
    {
      productId: "p01",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image1,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p02",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image2,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p03",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image3,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p04",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image1,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p05",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image2,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p06",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image3,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p07",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image1,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p08",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image2,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
    {
      productId: "p09",
      description: "Indore Palnt, Low Maintainance",
      ImageUrl: image3,
      productName: "Monsterra",
      actualCost: 350,
      currentCost: 299,
      isWhishListed: false,
      noOfItemsAddedToCart: 0,
      ratings: 4.9,
      rentOnAdded: false,
    },
  ];

  const [products, setProducts] = useState<ProductDetails[]>(defaultproducts);

  const incrementQuantity = (productId: string, quantity: number) => {
    const index = products?.findIndex(product => product.productId === productId);
    const newProducts = [...products];
    if(index >= 0){
      products[index].noOfItemsAddedToCart = quantity;
    }
    setProducts(newProducts);
  };

  const decrementQuantity = (productId: string, quantity: number) => {
    if(quantity < 0 ){
      return;
    }
    const index = products?.findIndex(product => product.productId === productId);
    const newProducts = [...products];
    if(index >= 0){
      newProducts[index].noOfItemsAddedToCart = quantity;
    }
    setProducts(newProducts);
  };

  const rentOnAdded = (productId: string, rentOnAdded: boolean) => {
    const index = products?.findIndex(product => product.productId === productId);
    const newProducts = [...products];
    if(index >= 0){
      newProducts[index].rentOnAdded = rentOnAdded;
    }
    setProducts(newProducts);
  };

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
            <Product 
              products={products} 
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              rentOnAdded={rentOnAdded}
            />
          </Row>
        </Col>
      </Row>
    </StyledProductContainer>
  );
}
