import styled from "styled-components";

import { useWriter } from "../contexts/WriterProvider";

import AuthorTag from "../components/AuthorTag";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthorBox = styled.div`
  padding: 5rem;
`;

function Authors() {
  const { writers } = useWriter();
  return (
    <>
      <Header />
      <AuthorContainer>
        <AuthorBox>
          {writers?.map((writer) => (
            <AuthorTag author={writer} key={writer.id} />
          ))}
        </AuthorBox>
      </AuthorContainer>
      <Footer />
    </>
  );
}

export default Authors;
