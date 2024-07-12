import { useQuery } from "@tanstack/react-query";

import { getJobs } from "../services/apiJobsListed";

export function useJobs() {
  const { data } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  const jobsSorted = data.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return { data, jobsSorted };
}
