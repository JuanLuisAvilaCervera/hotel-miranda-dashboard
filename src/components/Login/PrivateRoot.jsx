import { Navigate } from "react-router-dom";

const PrivateRoute = ({Component}) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(true); //CAMBIAR A FALSE

 // Your authentication logic goes here...
 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;