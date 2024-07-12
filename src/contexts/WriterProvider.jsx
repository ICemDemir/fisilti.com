import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

import { getWriter } from "../services/apiWriters";

import Spinner from "../components/Spinner";

const WriterContext = createContext();

function WriterProvider({ children }) {
  const { data: writers, isLoading } = useQuery({
    queryKey: ["writers"],
    queryFn: getWriter,
  });

  if (isLoading) return <Spinner />;

  return (
    <WriterContext.Provider value={{ writers }}>
      {children}
    </WriterContext.Provider>
  );
}

function useWriter() {
  const context = useContext(WriterContext);

  return context;
}

export { WriterProvider, useWriter };
