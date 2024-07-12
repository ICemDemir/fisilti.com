import styled from "styled-components";

const StyledButton = styled.button`
  width: 20rem;
  padding: 0.8rem 1.2rem;
  border: 2px solid var(--color-brand-900);
  border-radius: 5px;
  background-color: #fff;
  color: var(--color-brand-900);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-brand-900);
    color: #fff;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    width: 16rem;
  }

  @media (max-width: 900px) {
    width: 12rem;
  }

  @media (max-width: 700px) {
    width: 8rem;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

function PaginationButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default PaginationButton;
