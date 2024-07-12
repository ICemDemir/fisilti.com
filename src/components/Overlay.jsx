import styled, { css } from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.type === "latest"
      ? css`
          background-color: rgba(254, 215, 102, 0.4);
        `
      : css`
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: 8px;
        `} /* Semi-transparent background color */
  z-index: 1; /* Ensure the overlay is above the image */
`;

function Overlay({ type }) {
  return <StyledOverlay type={type} />;
}

export default Overlay;
