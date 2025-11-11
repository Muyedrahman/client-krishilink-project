import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if(!user){
        return <Navigate to="/login" />;
    }

    return children ;
};

export default PrivateRoute;