import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roleRequired }) => {
  const role = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
