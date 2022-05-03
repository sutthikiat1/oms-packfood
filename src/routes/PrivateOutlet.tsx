import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
  const useAuth = () => {
    console.log("useAuth");
    return true;
  };

  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
