import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { PAGE_SIZE } from "../utilities/constants";

import PaginationButton from "./PaginationButton";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 1.4rem;
    color: var(--color-grey-700);

    span {
      font-weight: bold;
      color: var(--color-primary);
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .nav-buttons {
    display: flex;
    align-items: center;

    .button-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: var(--color-primary-dark);
      }

      &:not(:last-child) {
        margin-right: 1.4rem;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      color: var(--color-brand-900);
      transition: color 0.3s;

      &:hover {
        color: var(--color-brand-700);
      }
    }
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        out of <span>{count}</span> results
      </p>

      <div className="nav-buttons">
        <span className="button-wrapper" onClick={previousPage}>
          <HiChevronLeft />
          <PaginationButton>Previous</PaginationButton>
        </span>
        <span className="button-wrapper" onClick={nextPage}>
          <PaginationButton>Next</PaginationButton>
          <HiChevronRight />
        </span>
      </div>
    </StyledPagination>
  );
}

export default Pagination;
