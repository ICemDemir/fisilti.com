import styled, { css } from "styled-components";

const AuthorBox = styled.div`
  display: flex;

  ${(props) =>
    props.type === "tag"
      ? css`
          justify-content: flex-start;

          & img {
            width: 8rem !important;
            max-height: 8rem !important;
            border-radius: 100%;
          }

          & div {
            align-self: center;
          }
        `
      : css`
          justify-content: center;
        `}
  margin: 2rem 0;

  img {
    width: 10rem;
    max-height: 10rem;
    margin: 0 1rem 0 0 !important;
    cursor: pointer;
  }

  div {
    font-size: 1.6rem;
    width: 60%;
    justify-content: center;
  }

  .name {
    font-weight: 700;
    color: var(--color-blue-700);
    cursor: pointer;
  }
`;

export default AuthorBox;
