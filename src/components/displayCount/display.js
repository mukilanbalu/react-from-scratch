import React, {useState, useEffect} from "react";

 function DisplayCount (props){
    const [count,setCount] = useState(props.count); //Creating state variable for count
     
    useEffect(()=>{ 
        setCount(props.count) ;
        console.log("Effect called")},
        [props.count]) //component Did mount or componentwillReceiveProps is called 
                       // only when the mentioned [props.count] is changed and 
                       //the value is stored in state using setCount method
    return(
        <h2>count is {count}</h2>  //rendering the count from the state
    )
 }

 export default DisplayCount