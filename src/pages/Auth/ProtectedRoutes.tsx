import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return <>{token ? <Outlet /> : <Navigate to="/main" replace />}</>;
};

export default ProtectedRoutes;
