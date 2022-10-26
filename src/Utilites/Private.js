import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './UserContext';


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation();



    if (user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;