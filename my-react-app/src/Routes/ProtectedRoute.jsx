import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
ProtectedRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};
export default ProtectedRoute;