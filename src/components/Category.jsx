import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 50%;
  }
`;

function Category({ category }) {
  const navigate = useNavigate();

  function handleSetState(e) {
    window.scrollTo(0, 0);
    navigate(`/makaleler?sortBy=${e.id}`);
  }

  return (
    <StyledImg
      src={category.image}
      alt={category.category}
      onClick={() => handleSetState(category)}
    />
  );
}

export default Category;
