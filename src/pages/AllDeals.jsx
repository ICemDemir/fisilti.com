import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useDeals } from "../features/useDeals";

import Header from "../components/Header";
import Footer from "../components/Footer";

const DealContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: var(--color-grey-200);
  padding: 5rem 0;
`;

const DealBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    margin: auto;
  }

  & img {
    height: 15rem;
    margin: 0 3rem;

    @media (max-width: 900px) {
      margin: 1rem 1rem 1rem 0;
      height: 10rem;
    }

    @media (max-width: 900px) {
      width: 30%;
      align-self: center;
    }
  }

  .green {
    color: #00aa2d;
  }
`;

const Deal = styled.div`
  display: flex;
  width: 50vw;
  padding: 5rem;
  margin: 5rem 0 0 10rem;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px var(--color-grey-400);

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    margin: 5rem;
    padding: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    margin: 3rem;
    padding: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
    margin: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin: 2rem 0;
    flex-direction: column;
    width: 60vw;
  }

  .link {
    margin-top: 2rem;
    color: var(--color-brand-900);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RightBox = styled.div`
  margin: 5rem;
  padding: 5rem 10rem;
  height: fit-content;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px var(--color-grey-400);
  position: sticky;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    padding: 5rem;
  }

  @media (max-width: 900px) {
    display: none;
  }

  & h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    border-bottom: 1px solid var(--color-grey-400);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
`;

function AllDeals() {
  const { data } = useDeals();

  return (
    <>
      <Header />
      <DealContainer>
        <DealBox>
          {data?.map((deal) => (
            <div key={deal.id}>
              <Deal>
                <img src={deal.image} />
                <div>
                  <h2>{deal.product}</h2>
                  <div>
                    <span className="green">{deal.discount}% </span>
                    <span>{deal.explanation} </span>
                  </div>
                  <div className="link">
                    <NavLink to={deal.link} target="_blank">
                      {deal.link}
                    </NavLink>
                  </div>
                </div>
              </Deal>
            </div>
          ))}
        </DealBox>
        <RightBox>
          <h3>A box just to fill in the emptiness</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            excepturi sint sed a, laboriosam illum. Vero quisquam quidem amet
            laboriosam maxime sapiente cupiditate repellendus fugiat aliquid? Ab
            dolorum aliquam aut iure dolore, totam sapiente neque vero quae non
            ipsum itaque quisquam? Nulla et nisi error labore, animi
            consequuntur quibusdam quod officia autem atque voluptates deleniti
            recusandae quas vero inventore amet adipisci voluptatibus accusamus
            dignissimos! Veritatis minus incidunt, nulla, quisquam aspernatur
            alias tempore doloribus blanditiis laudantium perferendis iusto
            aliquid ducimus autem! Eum ad est nihil ipsam pariatur aspernatur
            natus non labore illum veniam, ab dolorem deleniti voluptate
            quisquam alias sequi? Modi?
          </p>
        </RightBox>
      </DealContainer>
      <Footer />
    </>
  );
}

export default AllDeals;
