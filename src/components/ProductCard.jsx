import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useDeals } from "../features/useDeals";

const StyledProductCard = styled.div`
  width: 20rem;

  @media (max-width: 1010px) {
    width: 60vw;
    margin: auto;
  }

  & h2 {
    border-top: 1px solid;
    color: #000;

    &:hover {
      cursor: pointer;
    }
  }

  .upper {
    @media (max-width: 1010px) {
      text-align: center;
    }
  }

  .explanation {
    color: var(--color-grey-400);
    font-size: 1.2rem;
  }

  .deal_box {
    border-bottom: 1px solid var(--color-grey-400);
    margin-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      margin: 1rem 0;
    }

    & h4 {
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--color-grey-400);
      }
    }

    & img {
      height: 10rem;
    }

    & span {
      font-size: 1.4rem;
      color: var(--color-grey-500);
      margin-bottom: 1.4rem;
    }

    .green {
      color: #00aa2d;
    }
  }
`;

const Card = styled.div``;

function ProductCard() {
  const { Last3items } = useDeals();

  return (
    <StyledProductCard>
      <div className="upper">
        <h2>Günlük Fırsatlar</h2>
        <p className="explanation">
          Hepimizin sevdiği ürünlerde günlük indirimler
        </p>
      </div>
      <Card>
        {Last3items &&
          Last3items.map((item) => (
            <div className="deal_box" key={item.id}>
              <img src={item.image} />
              <NavLink to={item.link} target="_blank">
                <h4>{item.product} </h4>
              </NavLink>
              <div>
                <span className="green">-{item.discount}% </span>
                <span>{item.explanation}</span>
              </div>
            </div>
          ))}
      </Card>
    </StyledProductCard>
  );
}

export default ProductCard;
