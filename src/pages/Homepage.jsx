import styled from "styled-components";

import Latest from "../components/Latest";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Main from "../components/Main";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const StyledBody = styled.div`
  background-color: var(--color-grey-100);
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHomepage = styled.div`
  display: flex;
  gap: 8rem;
  padding: 2rem 0;

  @media (max-width: 1050px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

function Homepage() {
  return (
    <StyledBody>
      <Header />
      <StyledMain>
        <StyledHomepage>
          <Latest />
          <Main />
          <ProductCard />
        </StyledHomepage>
        <Categories />
      </StyledMain>
      <Footer />
    </StyledBody>
  );
}

export default Homepage;
