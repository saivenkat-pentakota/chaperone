import { Col, Row } from "react-bootstrap";
import cart from "../../images/shopping-cart.png";
import logo from "../../images/logo.png";
import profile from "../../images/user.png";
import { StyledContainer, StyledIcons, StyledRow } from "./Navbar.style";
import Promotion from "../Promotion/Promotion";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <div>
      <Promotion />
      <StyledContainer>
        <Row>
          <Col xs={3}>
            <img src={logo} alt="Company Logo" />
          </Col>
          <Col xs={8}>
            <StyledRow>
              <Col>Home</Col>
              <Col xs={2}>Plants & Pots</Col>
              <Col>Tools</Col>
              <Col xs={2}>Our Services</Col>
              <Col>Blog</Col>
              <Col>Our Story</Col>
              <Col>FAQs</Col>
            </StyledRow>
          </Col>
          <Col xs={1}>
            <Row>
              <StyledIcons>
                <img src={profile} alt="User Profile" />
                My Profile
              </StyledIcons>
              <StyledIcons>
                <img src={cart} alt="Shopping Cart" />
                Cart
              </StyledIcons>
            </Row>
          </Col>
        </Row>
      </StyledContainer>
      <Searchbar />
    </div>
  );
}
