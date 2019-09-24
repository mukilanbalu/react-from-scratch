import React from "react";
import Routes from "../router/mainRouter"

const  App= (props)=>{           
     return(
              <Routes history={props.history}/>
            );
}

export default App;

