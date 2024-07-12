import { createContext, useContext } from "react";
import { getDeals } from "../services/apiDailyDeals";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";

const DealsContext = createContext();

function DealsProvider({ children }) {
  const { data, isLoading } = useQuery({
    queryKey: ["daily_deals"],
    queryFn: getDeals,
  });

  if (isLoading) return <Spinner />;

  const Last3items = data.slice(data.length - 4, data.length - 1);

  return (
    <DealsContext.Provider value={{ data, Last3items }}>
      {children}
    </DealsContext.Provider>
  );
}

function useDeals() {
  const context = useContext(DealsContext);

  if (context === undefined) {
    throw new Error("DealsContext was used outside the RelatedProvider");
  }

  return context;
}

export { DealsProvider, useDeals };
