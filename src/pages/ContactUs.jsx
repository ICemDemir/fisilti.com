import styled from "styled-components";

import ApplyButton from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-grey-100);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 5px;
    background-color: var(--color-grey-100);
    transition: border-color 0.3s;

    &:focus {
      border-color: var(--color-brand-500);
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 10rem;
  }
`;

function ContactUs() {
  return (
    <>
      <Header />

      <Container>
        <Form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="E-mail address" />
          <textarea placeholder="Your message" className="message" />
          <ApplyButton
            style={{ alignSelf: "flex-end", padding: "0.8rem 1.6rem" }}
          >
            Send
          </ApplyButton>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default ContactUs;
