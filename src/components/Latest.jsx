import styled from "styled-components";

import { useArticle } from "../contexts/ArticleProvider";

import LatestArticle from "./LatestArticle";
import Overlay from "./Overlay";

const StyledLatest = styled.div`
  position: relative sticky; /* Add position relative to make position absolute work */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: 100vh;

  @media (max-width: 900px) {
    margin: auto;
    width: 60vw;
    height: 40vw;
  }

  @media (max-width: 800px) {
    margin-bottom: 20rem;
  }
`;

const Container = styled.div`
  position: relative; /* Add position relative to create a stacking context */
  width: 100%;
  height: 20vh;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    width: 40%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const StyledLink = styled.div`
  @media (max-width: 900px) {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
  }

  & p {
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    color: var(--color-grey-700);
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }

    &:hover {
      cursor: pointer;
      color: var(--color-grey-500);
    }
  }

  & div {
    font-size: 1.3rem;
    color: var(--color-grey-500);
    margin-bottom: 1rem;
  }
`;

const H2 = styled.h2`
  width: 100%;
  border-top: 1px solid;
  margin-bottom: 2rem;
  font-weight: 100;
  font-size: 2.4rem;
  text-align: center;
`;

function Latest() {
  const { latest } = useArticle();

  return (
    <StyledLatest>
      <Container>
        <Overlay type="latest" />
        <Image src="../public/images/ashni-Wh9ZC4727e4-unsplash.jpg" />
      </Container>
      <H2>The Latest</H2>
      <StyledLink>
        {latest.map((lat) => (
          <LatestArticle latestArticle={lat} key={lat.id} />
        ))}
      </StyledLink>
    </StyledLatest>
  );
}

export default Latest;
