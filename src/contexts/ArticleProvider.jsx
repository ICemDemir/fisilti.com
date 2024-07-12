import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/apiUserArticles";
import { createContext, useContext } from "react";
import Spinner from "../components/Spinner";

const ArticleContext = createContext();

function ArticleProvider({ children }) {
  /////////////////////////////
  // Fetch API for the information of articles
  const { data, isLoading } = useQuery({
    queryKey: ["user_articles"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return <Spinner />;
  }

  // Order the articles from the latest to the oldest to show on Makale page
  const dataSortedByDate = data.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const lastArticle = dataSortedByDate[0];

  // Select other articles with the same category to show the last item in Related
  const sameCategory = data.filter(
    (item) => item.category === lastArticle.category
  );

  // Select the last item of the products with the same category as the latest article
  const last_item_on_same_category = sameCategory[sameCategory.length - 2];

  // Choose the last 3 articles to show on Latest card on the left
  const LATEST_ARTICLES_NUMBER = 4;

  const latest = data.slice(
    data.length - LATEST_ARTICLES_NUMBER,
    data.length - 1
  );

  const ArticleCategory = [
    ...new Set(dataSortedByDate.map((item) => item.category)),
  ];

  return (
    <ArticleContext.Provider
      value={{
        related: last_item_on_same_category,
        lastArticle,
        dataSortedByDate,
        latest,
        data,
        ArticleCategory,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

function useArticle() {
  const context = useContext(ArticleContext);

  if (context === undefined) {
    throw new Error("RelatedContext was used outside the RelatedProvider");
  }

  return context;
}

export { ArticleProvider, useArticle };
