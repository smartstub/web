import { Navigate } from "react-router-dom";
const LoginProtected = ({ isLoggedIn, Children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Children/>;
};
export default LoginProtected;