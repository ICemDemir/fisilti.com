import styled from "styled-components";

import { useCategories } from "../contexts/CategoryProvider";

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  max-width: 25rem;
  margin: 2rem auto;
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-900);
  background-color: var(--color-grey-100);
  border: 2px solid var(--color-grey-300);
  border-radius: 5px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: var(--color-grey-200);
  }

  @media (max-width: 900px) {
    max-width: 20rem;
  }
`;

const StyledOption = styled.option`
  font-size: 1.4rem;
  color: var(--color-grey-900);
`;

function Sort({ onChange, value }) {
  const { categories } = useCategories();

  return (
    <StyledSelect value={value} onChange={onChange}>
      <StyledOption value="">All</StyledOption>
      {categories.map((cat) => (
        <StyledOption value={cat.id} key={cat.id}>
          {cat.category}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export default Sort;
