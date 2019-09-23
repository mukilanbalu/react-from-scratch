import React from "react";
import {Route, Switch} from "react-router-dom";
import Signin from "../components/views/signIn/signIn";
import Home from "../components/views/home/home"


const Routes = ()=>{
    <Switch>
        <Route exact path="/" component={()=><Signin/>} />
        <Route exact path="/signin" component={()=><Signin/>}/>
        <Route exact path="/home" component={()=><Home/>}/> 
    </Switch>
}

export default Routes;