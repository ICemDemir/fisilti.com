import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utilities/constants";
import { getArticlesForPagination } from "../services/apiUserArticles";

export function useArticles() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: articles, count } = {},
    error,
  } = useQuery({
    queryKey: ["user_articles", page],
    queryFn: () => getArticlesForPagination({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["user_articles", page + 1],
      queryFn: () => getArticlesForPagination({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["user_articles", page - 1],
      queryFn: () => getArticlesForPagination({ page: page - 1 }),
    });
  }

  return { isLoading, error, articles, count };
}
