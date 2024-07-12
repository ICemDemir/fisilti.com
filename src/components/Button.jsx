import styled, { css } from "styled-components";

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-brand-900);
  color: #fff;
  transition: all 0.3s ease;
  outline: none;

  ${(props) =>
    props.type === "delete" &&
    css`
      background-color: var(--color-grey-400);
      color: #000;
    `}

  ${(props) =>
    props.type === "sign-in" &&
    css`
      background-color: var(--color-green-700);

      &:hover {
        background-color: #03c139;
      }
    `}

  &:hover,
  &:focus {
    background-color: var(--color-grey-300);
    color: #000;
    border: none;
    outline: none;
  }
`;

export default Button;
