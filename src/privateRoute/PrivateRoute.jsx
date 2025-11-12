import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //   const location  = useLocation();
  //   console.log(location);

  // loading
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center ">
        <ClipLoader color="#10B981" />
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;