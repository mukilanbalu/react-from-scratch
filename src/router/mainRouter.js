import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Signin from "../components/views/signIn/signIn";
import Home from "../components/views/home/home"
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
const Routes = ()=>(
    <Switch>
        <PublicRoute exact path="/" component={(props)=><Signin {...props} />} authSuccessUrl="/signin" />
        <PublicRoute exact path="/signin" component={(props)=><Signin {...props }/>} authSuccessUrl="/signin"/>
        <PrivateRoute exact path="/home" component={(props)=><Home {...props} />}/> 
    </Switch>
)

export default Routes;