import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../features/authentication/useUser";

import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // No authenticated user, redirect to the login page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // While loading, show a spinner
  if (isLoading) return <Spinner />;

  // If authenticated user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
