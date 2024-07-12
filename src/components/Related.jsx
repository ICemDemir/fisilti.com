import styled from "styled-components";
import { useArticle } from "../contexts/ArticleProvider";

import Title from "./Title";

const RelatedTitle = styled.h2`
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

function Related({ className }) {
  const { related } = useArticle();

  return (
    <div className={className}>
      <RelatedTitle>Related</RelatedTitle>
      <Title article={related} />
    </div>
  );
}

export default Related;
