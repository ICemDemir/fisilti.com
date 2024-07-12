import styled from "styled-components";

import Title from "./Title";
import Button from "./Button";
import { useUser } from "../features/authentication/useUser";

const StyledReview = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.4rem;
  padding: 2.4rem;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 2px 2px 2px var(--color-grey-200);
  }

  @media (max-width: 600px) {
    padding: 1.2rem;
    font-size: 1rem;
  }

  & time {
    color: var(--color-blue-700);
  }

  & img {
    max-height: 15rem;
    cursor: pointer;
  }

  .box {
    width: 60%;
    margin: 0 1rem;
  }

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

function Review({ article, onClick }) {
  const { activeUser } = useUser();

  return (
    <StyledReview>
      <img alt={article.product} src={article.image} />
      <div className="box">
        <Title article={article} />
        <time>{new Date(article.created_at).toLocaleDateString()}</time>
        <p>{article.explanation}</p>
      </div>
      {activeUser?.role === "admin" && (
        <Button type="delete" onClick={onClick}>
          Delete
        </Button>
      )}
    </StyledReview>
  );
}

export default Review;
