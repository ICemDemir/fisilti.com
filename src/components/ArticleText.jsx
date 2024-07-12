import styled from "styled-components";

import Related from "./Related";
import Title from "./Title";

const StyledImg = styled.img`
  @media (max-width: 900px) {
    overflow: hidden;
  }
`;

const StyledH2 = styled.h1`
  &:hover {
    cursor: pointer;
    color: var(--color-grey-500);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    width: 70%;
    padding-right: 2rem;

    @media (max-width: 900px) {
      font-size: 1.4rem;
      padding: 1.2rem;
    }
  }

  .right {
    width: 30%;

    & div {
      font-size: 1rem;
      color: var(--color-blue-700);
      font-weight: 600;

      &:hover {
        cursor: pointer;
        color: var(--color-grey-500);
      }
    }
  }
`;

const StyledSignature = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-blue-700) !important;
`;

function ArticleText({ article, related }) {
  return (
    <>
      <StyledImg alt={article.product} src={article.image} />
      <StyledH2>
        <Title article={article} />
      </StyledH2>
      <Container>
        <div className="left">
          <StyledSignature>by {article.writer}</StyledSignature>
          <p>{article.explanation}</p>
        </div>
        {related && <Related className="right" />}
      </Container>
    </>
  );
}

export default ArticleText;
