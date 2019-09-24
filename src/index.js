import React from "react";
import ReactDom from "react-dom";
import App from "./components/app"
import {BrowserRouter} from "react-router-dom";
import history from "./utils/history"
ReactDom.render((
    <BrowserRouter> 
        <App history={history}/>
    </BrowserRouter>
)
    
, document.getElementById("app"))