import { Col, Row } from "react-bootstrap";
import image1 from "../../images/products/product1.png";
import image2 from "../../images/products/product2.png";
import image3 from "../../images/products/product3.png";
import { StyledPlantsButton } from "../DescriptionCard/Descriptioncard.style";
import FilterComponent from "../Filter/Filter";
import Product from "../Product/Product";
import { ProductDetails } from "../Product/Product.props";
import { StyledProductContainer } from "./Products.style";

export default function Products() {

    const products: ProductDetails[] = [
        {
            productId:'p01',
            description: 'Indore Palnt, Low Maintainance',
            ImageUrl: image1,
            productName: 'Monsterra',
            actualCost: 350,
            currentCost: 299,
            isWhishListed: false,
            noOfItemsAddedToCart: 0,
            ratings: 4.9,
        },
        {
            productId:'p02',
            description: 'Indore Palnt, Low Maintainance',
            ImageUrl: image2,
            productName: 'Monsterra',
            actualCost: 350,
            currentCost: 299,
            isWhishListed: false,
            noOfItemsAddedToCart: 0,
            ratings: 4.9,
        },
        {
            productId:'p03',
            description: 'Indore Palnt, Low Maintainance',
            ImageUrl: image3,
            productName: 'Monsterra',
            actualCost: 350,
            currentCost: 299,
            isWhishListed: false,
            noOfItemsAddedToCart: 0,
            ratings: 4.9,
        },
        {
            productId:'p04',
            description: 'Indore Palnt, Low Maintainance',
            ImageUrl: image1,
            productName: 'Monsterra',
            actualCost: 350,
            currentCost: 299,
            isWhishListed: false,
            noOfItemsAddedToCart: 0,
            ratings: 4.9,
        },
        {
          productId:'p05',
          description: 'Indore Palnt, Low Maintainance',
          ImageUrl: image2,
          productName: 'Monsterra',
          actualCost: 350,
          currentCost: 299,
          isWhishListed: false,
          noOfItemsAddedToCart: 0,
          ratings: 4.9,
      },
      {
          productId:'p06',
          description: 'Indore Palnt, Low Maintainance',
          ImageUrl: image3,
          productName: 'Monsterra',
          actualCost: 350,
          currentCost: 299,
          isWhishListed: false,
          noOfItemsAddedToCart: 0,
          ratings: 4.9,
      },
       {
            productId:'p07',
            description: 'Indore Palnt, Low Maintainance',
            ImageUrl: image1,
            productName: 'Monsterra',
            actualCost: 350,
            currentCost: 299,
            isWhishListed: false,
            noOfItemsAddedToCart: 0,
            ratings: 4.9,
        },
        {
          productId:'p08',
          description: 'Indore Palnt, Low Maintainance',
          ImageUrl: image2,
          productName: 'Monsterra',
          actualCost: 350,
          currentCost: 299,
          isWhishListed: false,
          noOfItemsAddedToCart: 0,
          ratings: 4.9,
      },
      {
          productId:'p09',
          description: 'Indore Palnt, Low Maintainance',
          ImageUrl: image3,
          productName: 'Monsterra',
          actualCost: 350,
          currentCost: 299,
          isWhishListed: false,
          noOfItemsAddedToCart: 0,
          ratings: 4.9,
      },
    ];
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
            <Product products={products}/>
          </Row>
        </Col>
      </Row>
    </StyledProductContainer>
  );
}
