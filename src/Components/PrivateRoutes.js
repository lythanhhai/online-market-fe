import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
