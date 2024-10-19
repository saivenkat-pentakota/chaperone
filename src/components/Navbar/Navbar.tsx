import { StyledContainer, StyledIcons, StyledNav } from "./Navbar.style";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import cart from "../../images/cart.png";
import { Col, Row } from "react-bootstrap";

export default function Navbar() {
  return (
    <StyledContainer>
      <Row>
        <Col xs={2}>
          <img src={logo} alt="Company Logo" />
        </Col>
        <Col xs={8}>
          <StyledNav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Plants & Pots</a>
              </li>
              <li>
                <a href="#">Tools</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </StyledNav>
        </Col>
        <Row xs={2}>
          <StyledIcons>
            <img src={profile} alt="User Profile" />
            My Profile
          </StyledIcons>
          <StyledIcons>
            <img src={cart} alt="Shopping Cart" />
            Cart
          </StyledIcons>
        </Row>
      </Row>
    </StyledContainer>
  );
}
