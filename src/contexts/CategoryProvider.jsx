import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getCategories } from "../services/apiCategories";
import Spinner from "../components/Spinner";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoryContext);

  return context;
}

export { CategoryProvider, useCategories };
