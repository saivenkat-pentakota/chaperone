import Descriptioncard from "../DescriptionCard/Descriptioncard";
import Footer from "../Footer/Footer";
import Registered from "../Footer/Registered/Registered";
import Navbar from "../Navbar/Navbar";
import Nursery from "../Nursery/Nursery";
import Products from "../Products/Products";

import { StyledContainer } from "./Home.style";

export default function Home() {
  return (
    <StyledContainer>
      <Navbar />
      <Descriptioncard />
      <Nursery />
      <Products />
      <div>
        <Footer />
        <Registered />
      </div>
    </StyledContainer>
  );
}
