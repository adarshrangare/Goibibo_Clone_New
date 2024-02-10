import React from 'react'
import {useAuth} from '../context/AuthProvider'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state.user);

    const {isLoggedIn} = useAuth();

    let location = useLocation();
    console.log({location});

    if(!isLoggedIn) {
        return <Navigate to="/login-signup" state={{ previousPath: location}} replace />
    }
 return children

};

export default ProtectedRoute;