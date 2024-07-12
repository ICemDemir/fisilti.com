import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.p`
  font-weight: 700;
  cursor: pointer;
  53 @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

function Title({ article }) {
  const navigate = useNavigate();

  function handleNavigate(id) {
    window.scrollTo(0, 0);
    navigate(`../makale/${id}`);
  }

  return (
    <StyledTitle onClick={() => handleNavigate(article.id)}>
      {article.title}
    </StyledTitle>
  );
}

export default Title;
