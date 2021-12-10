import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth, ...restOfProps }) => {
    return (
        <Route
            {...restOfProps}
            render={() => (isAuth ? children : <Redirect to="/" />)}
        />
    );
};

export default ProtectedRoute;
