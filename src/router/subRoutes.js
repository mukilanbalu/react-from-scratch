import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import SubRoute from "../components/SubRoute/SubRoute.js";
import isAuthenticated  from "../utils/auth";

function PrivateRoute({component : Component , ...rest}){
return (
    <Route 
    {...rest} 
    render = { (props)=> (isAuthenticated() === true ? <Component {...props} /> : <Redirect to="/signin" />) }
    />
)
}
function PublicRoute({component : Component,authSuccessUrl, ...rest}){
    return (
        <Route 
        exact
        {...rest} 
        render = { (props)=> (isAuthenticated() === true ? <Redirect {...rest}  to={authSuccessUrl} /> : <Component {...props}  /> ) }
        />
    )
    }
const SRoutes = () =>(
    <Switch>
        <PrivateRoute path="/sub" component={(props)=><SubRoute {...props} />}/> 
    </Switch>
)

export default SRoutes;