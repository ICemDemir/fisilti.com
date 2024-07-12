import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getJobs } from "../services/apiJobsListed";
import Spinner from "../components/Spinner";

const JobContext = createContext();

function JobProvider({ children }) {
  // Fetch api for the jobs data
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  if (isLoading) {
    return <Spinner />;
  }

  const jobsSorted = data.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <JobContext.Provider value={{ jobsSorted }}>{children}</JobContext.Provider>
  );
}

const useJobs = () => {
  const context = useContext(JobContext);

  return context;
};

export { JobProvider, useJobs };
