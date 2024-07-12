import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useArticle } from "../contexts/ArticleProvider";
import { useArticles } from "../features/useArticles";
import { deleteArticle } from "../services/apiUserArticles";
import { useCategories } from "../contexts/CategoryProvider";

import Review from "./Review";
import Sort from "./Sort";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

const AllReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-100);
`;

const AllReviewsBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 60%;
  font-size: 8rem;
  margin-top: 2rem;
  border-bottom: 2px solid;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

function AllReviews() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      toast.success("Article successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["user_articles"],
      });
    },
  });

  const { categories } = useCategories();
  const { dataSortedByDate } = useArticle();
  const { articles, isLoading, count } = useArticles();

  const articlesSorted = articles?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  if (isLoading) return <Spinner />;
  if (isDeleting) return <Spinner />;

  const sortBy = searchParams.get("sortBy") || "";

  function handleOnChange(e) {
    if (searchParams.has("page")) {
      searchParams.delete("page");
    }
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const sorted =
    sortBy && categories.find((item) => item.id === parseInt(sortBy));

  return (
    <AllReviewsContainer>
      <AllReviewsBox>
        <StyledHeading>Tüm Makaleler</StyledHeading>
        <Sort onChange={handleOnChange} value={sortBy} />
        {sorted
          ? dataSortedByDate
              .filter((i) => i.category === sorted.category)
              .map((i) => (
                <Review
                  article={i}
                  key={i.id}
                  onClick={() => mutate(i.id)}
                  disabled={isDeleting}
                />
              ))
          : articlesSorted.map((item) => (
              <Review
                article={item}
                key={item.id}
                onClick={() => mutate(item.id)}
                disabled={isDeleting}
              />
            ))}
        {!sorted && <Pagination count={count} />}
      </AllReviewsBox>
    </AllReviewsContainer>
  );
}

export default AllReviews;
