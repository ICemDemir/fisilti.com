import styled, { css } from "styled-components";

const ItemWindow = styled.div`
  ${(props) =>
    props.type === "40"
      ? css`
          width: 40%;
        `
      : css`
          width: 70%;
          padding: 5rem;

          .icon {
            align-self: flex-end;
            cursor: pointer;
            color: var(--color-grey-500);
          }

          & form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          & input,
          textarea {
            border: none;
            background-color: var(--color-grey-200);
            margin-bottom: 2rem;
            padding: 2rem 4rem 2rem 2rem;
            border-radius: 5px;
            font-size: 1.4rem;
            outline: none;
            resize: none;
          }
          .message {
            width: 100%;
          }
        `}
  display: flex;
  flex-direction: column;
  height: 70%;
  background-color: #fff;
  color: #000;
  box-shadow: 1px 1px 1px 1px var(--color-grey-200);
  border-radius: 2px;

  width: 70vw;
`;

export default ItemWindow;
