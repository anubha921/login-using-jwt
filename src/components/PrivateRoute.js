import React from 'react'
import AuthUser from './AuthUser';
import SignIn from './SignIn';

function PrivateRoute({children}) {
    const {getToken} = AuthUser();
    //if tried to access before login or after removing token
    return getToken() ? <>{children}</> :  <SignIn to="/"/> 
}

export default PrivateRoute
