import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { getUsers } from "../../services/apiUsers";

export function useUser() {
  const { isLoading: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  //////////////////////////////////////////////////////////////////
  // Match the user that is logged in with the user with the same id
  // to be able to extract the specified role of 'viewer', 'writer' or 'admin'
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  let activeUser = null;
  if (users && user) {
    activeUser = users.find((u) => u.id === user.id);
  }
  //////////////////////////////////////////////////////////////////

  return {
    activeUser,
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
