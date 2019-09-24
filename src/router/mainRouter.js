import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Signin from "../components/views/signIn/signIn";
import Home from "../components/views/home/home"
import isAuthenticated  from "../utils/auth";

function PrivateRoute({component : Component , ...rest}){
return (
    <Route 
    {...rest} 
    render = { ()=> (isAuthenticated() === true ? <Component {...props} /> : <Redirect to="/signin" />) }
    />
)
}
function PublicRoute({component : Component,authSuccessUrl, ...rest}){
    return (
        <Route 
        exact
        {...rest} 
        render = { ()=> (isAuthenticated() === true ? <Redirect {...rest}  to={authSuccessUrl} /> : <Component {...props} /> ) }
        />
    )
    }
const Routes = ()=>(
    <Switch>
        <PublicRoute exact path="/" component={()=><Signin/>} />
        <PublicRoute exact path="/signin" component={()=><Signin/>}/>
        <PrivateRoute exact path="/home" component={()=><Home/>}/> 
    </Switch>
)

export default Routes;