import { useQuery } from "@tanstack/react-query";

import { getDeals } from "../services/apiDailyDeals";

export function useDeals() {
  const { data } = useQuery({
    queryKey: ["daily_deals"],
    queryFn: getDeals,
  });

  const Last3items = data?.slice(data.length - 4, data.length - 1);

  return { data, Last3items };
}
