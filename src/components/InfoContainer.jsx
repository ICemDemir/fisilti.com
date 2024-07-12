import styled from "styled-components";

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 7rem;
`;

const InfoBox = styled.div`
  width: 40%;
  * {
    padding-bottom: 3rem;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 750px) {
    width: 750%;
  }
`;
function InfoContainer({ children }) {
  return (
    <StyledInfoContainer>
      <InfoBox>{children}</InfoBox>
    </StyledInfoContainer>
  );
}

export default InfoContainer;
