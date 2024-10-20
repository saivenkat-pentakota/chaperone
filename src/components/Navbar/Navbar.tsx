import { useState } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import cart from "../../images/shopping-cart.png";
import logo from "../../images/logo.png";
import profile from "../../images/user.png";
import { StyledCol, StyledContainer, StyledIcons, StyledRow } from "./Navbar.style";
import Promotion from "../Promotion/Promotion";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  function CustomDropDown({label}:{label:any}){
    return (
      <Dropdown.Toggle
      variant="link"
      id="dropdown-basic"
      style={{
        color: "black",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      {label}
      </Dropdown.Toggle>
    );
  }

  return (
    <div>
      <Promotion />
      <StyledContainer>
        <Row>
          <Col xs={3}>
            <img src={logo} alt="Company Logo" />
          </Col>
          <Col xs={7}>
            <StyledRow>
              <StyledCol>Home</StyledCol>
              <StyledCol xs={2} style={{ color: "#F3A939" }}>Plants & Pots</StyledCol>
              <StyledCol>
                <Dropdown
                  show={toolsDropdownOpen}
                  onMouseEnter={() => setToolsDropdownOpen(true)}
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                >
                  <CustomDropDown label='Tools' />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Gardening Tools
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Pest Control
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Fertilizers</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      Watering Cans
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      Garden Accessories
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </StyledCol>
              <StyledCol
                xs={2}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Dropdown show={servicesDropdownOpen}>
                <CustomDropDown label='Our Services' />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Book a Maali
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Plant Day Care
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rent Plants</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </StyledCol>
              <StyledCol>Blog</StyledCol>
              <StyledCol>Our Story</StyledCol>
              <StyledCol>FAQs</StyledCol>
            </StyledRow>
          </Col>
          <Col xs={2}>
            <StyledRow>
              <Dropdown
                onMouseEnter={() => setProfileDropdownOpen(true)}
                onMouseLeave={() => setProfileDropdownOpen(false)}
                show={profileDropdownOpen}
              >
                <StyledIcons>
                  <Dropdown.Toggle
                    variant="link"
                    id="profile-dropdown"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    <img src={profile} alt="User Profile" /> <br/>My Profile
                  </Dropdown.Toggle>
                </StyledIcons>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Hello Priyanka!
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">9856784012</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <hr />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">My Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Orders & Refund
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gift Cards</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Service Membership
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Refer to Friend
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Help & Support
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <StyledIcons>
                <img src={cart} alt="Shopping Cart" /> Cart
              </StyledIcons>
            </StyledRow>
          </Col>
        </Row>
      </StyledContainer>
      <Searchbar />
    </div>
  );
}
