import styled from "styled-components";

import { useArticle } from "../contexts/ArticleProvider";

import ArticleText from "./ArticleText";

const StyledArticleText = styled.div`
  width: 50rem;
  border-right: 1px solid var(--color-grey-100);
  padding-right: 2rem;
  border-left: 1px solid var(--color-grey-100);
  padding-left: 2rem;
  box-shadow: 1px 2px 2px 2px var(--color-grey-200);
  padding: 5rem;
  background-color: #fff;

  @media (max-width: 900px) {
    order: -1;
    width: 80vw;
    padding: 3rem;
  }

  & h2 {
    margin-bottom: 2rem;
    border-bottom: 1px solid;
  }

  & p {
    color: var(--color-grey-900);
    margin: 1.2rem 0;
  }

  & a {
    color: var(--color-indigo-700);
    cursor: pointer;
  }
`;

function Main() {
  const { lastArticle, related } = useArticle();

  return (
    <StyledArticleText>
      <ArticleText
        article={lastArticle}
        key={lastArticle.id}
        related={related}
      />
    </StyledArticleText>
  );
}

export default Main;
