import styled from "styled-components";

import { useCategories } from "../contexts/CategoryProvider";

import Category from "./Category";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  margin: 5rem 0;
  grid-row-start: 2;
  grid-column-start: 2;
  border-top: 2px solid #000;
  padding: 5rem 0;
`;

const CategoriesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

function Categories() {
  const { categories } = useCategories();

  return (
    <CategoriesContainer>
      <CategoriesBox>
        {categories.map((cat) => (
          <Category category={cat} key={cat.id} />
        ))}
      </CategoriesBox>
    </CategoriesContainer>
  );
}

export default Categories;
