import styled from "styled-components";
import { useState } from "react";

import Header from "../components/Header";
import ApplyButton from "../components/Button";
import Overlay from "../components/Overlay";
import Payment from "../components/Payment";
import Footer from "../components/Footer";

const SubscriptionContainer = styled.div`
  margin: 4rem;
  padding: 5rem;
  display: flex;
  justify-content: space-between;

  & img {
    width: 40vw;

    @media (max-width: 900px) {
      width: 25vw;
    }
  }

  & h1 {
    padding-bottom: 6rem;

    @media (max-width: 900px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 900px) {
    margin: auto;
  }
`;

const BulletPoints = styled.div`
  padding: 2rem 0;

  & p {
    padding-bottom: 3rem;
    font-size: 2rem;

    @media (max-width: 900px) {
      font-size: 1.4rem;
    }
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & p {
    font-weight: 700;
  }
`;

function Subscription() {
  const [paymentWindow, setPaymentWindow] = useState(false);

  function HandlePaymentWindow() {
    setPaymentWindow(!paymentWindow);
  }
  return (
    <>
      <Header />
      <SubscriptionContainer>
        {paymentWindow && <Overlay />}
        <div>
          <h1>Learn everything you need about a product</h1>
          <BulletPoints>
            <p>
              <span>&#10003;</span> Access over 1000 up-to-date reviews
            </p>
            <p>
              <span>&#10003;</span> Find the best value with daily deals curated
              by experts Cancel anytime
            </p>
            <p>
              <span>&#10003;</span> Cancel anytime
            </p>
          </BulletPoints>
          <ButtonSection>
            <div>
              <p>$5 / 4 weeks</p>
              <ApplyButton onClick={HandlePaymentWindow}>
                Get Monthly
              </ApplyButton>
            </div>
            <div>
              <p>$40 / year</p>
              <ApplyButton onClick={HandlePaymentWindow}>
                Get Monthly
              </ApplyButton>
            </div>
          </ButtonSection>
        </div>
        <div>
          <img
            src="..\public\images\subcription-image.png"
            alt="online shopping"
          />
        </div>
      </SubscriptionContainer>
      {paymentWindow && <Payment onClick={HandlePaymentWindow} />}
      <Footer />
    </>
  );
}

export default Subscription;
