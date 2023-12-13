import { Navigate } from "react-router-dom";

// Redirect users to home page when not found
const NotFound = () => {
  return <Navigate replace to="/" />;
};

export default NotFound;
