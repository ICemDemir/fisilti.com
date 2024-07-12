import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useWriter } from "../contexts/WriterProvider";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    padding: 5rem 0;
    width: 40rem;
  }

  & p {
    padding-bottom: 5rem;
  }
`;

function Author() {
  const { id } = useParams();
  const { writers } = useWriter();

  const the_author = writers?.find((a) => a.id === parseInt(id));

  return (
    <div>
      <Header />
      <Container>
        <InfoBox>
          <img src={the_author.image} alt="author" />
          <p>asdasd{the_author.bio}</p>
        </InfoBox>
      </Container>
      <Footer />
    </div>
  );
}

export default Author;
