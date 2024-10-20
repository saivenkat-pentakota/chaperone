import { Button, Col, Row } from "react-bootstrap";
import facebook from "../../images/socialmedia/facebook.png";
import instagram from "../../images/socialmedia/instagram.png";
import linkedin from "../../images/socialmedia/linkedin.png";
import twitter from "../../images/socialmedia/twitter.png";
import youtube from "../../images/socialmedia/youtube.png";

import {
  StyledCol,
  StyledContainer,
  StyledFooterContainer,
  StyledIconsCol,
  StyledRow,
} from "./Footer.style";

export default function Footer() {
  return (
    <>
      <StyledFooterContainer>
        <StyledContainer>
          <Row>
            <StyledCol xs={3}>
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necesbus enim
              </p>
              <input placeholder="Enter Your Email Address" />
              <Button>SUBSCRIBE</Button>
            </StyledCol>

            <StyledCol xs={2}>
              <h3>ABOUT US</h3>
              <a href="#">Our Story</a>
              <a href="#">Blogs</a>
              <a href="#">Careers</a>
              <a href="#">Contact Us</a>
              <a href="#">Help & Support</a>
            </StyledCol>

            <StyledCol xs={2}>
              <h3>Our Services</h3>
              <a href="#">Book Mail</a>
              <a href="#">Plant Day Care</a>
              <a href="#">Rent Plants</a>
              <a href="#">Plants & Pots</a>
              <a href="#">Gardening Tools</a>
            </StyledCol>

            <StyledCol xs={2}>
              <h3>Our Services</h3>
              <a href="#">My Account</a>
              <a href="#">Orders & Returns</a>
              <a href="#">Track Order</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Return,Refund & Replacement Policy</a>
            </StyledCol>

            <StyledCol xs={3}>
              <h3>GET IN TOUCH</h3>
              <a href="#">
                Address:F-62,First Floor,Sushant Lok
                Phase-111,Sector-57,Gurgaon,Haryana,India 122003
              </a>
              <a href="#">
                Call:
                <br />
                +919958287272
              </a>
              <a href="#">
                Email:
                <br />
                care@chaperoneplants.com
              </a>
            </StyledCol>
          </Row>
          <StyledRow>
            <StyledCol>
              <h3>CHAPERONE</h3>
              <p>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necessitatibus enim ut internos accusantium a numquam autem
                ab rerum omnis. Non molestiae ratione et laborum doloribus aut
                molestiae voluptates ut porro excepturi sit molestiae obcaecati
                qui quis beatae est voluptatem eius. Et architecto nihil id
                labore omnis hic iste deleniti et porro aspernatur.
              </p>
            </StyledCol>
            <StyledCol>
              <StyledRow>
                <Col>
                  <h3>Follow Us On</h3>
                </Col>
                <StyledIconsCol>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="#">
                    <img src={facebook} alt="instagram" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="instagram" />
                  </a>
                  <a href="#">
                    <img src={youtube} alt="instagram" />
                  </a>
                  <a href="#">
                    <img src={linkedin} alt="instagram" />
                  </a>
                </StyledIconsCol>
              </StyledRow>
            </StyledCol>
          </StyledRow>
        </StyledContainer>
      </StyledFooterContainer>
    </>
  );
}
