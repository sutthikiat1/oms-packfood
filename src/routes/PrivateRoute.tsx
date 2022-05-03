import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const useAuth = () => {
    return true;
  };

  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
