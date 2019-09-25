import React, {useState} from "react"
import { Container, Row, Col, Button } from "react-bootstrap";
import DisplayCount from "../../displayCount/display";
import SRoute from "../../../router/subRoutes";


const Home = (props) => {
    const[count,setCount] = useState(0)
   
    const logout =()=>{
        localStorage.removeItem("auth");
        props.history.push("/");
    }
    const subroute = ()=>{
        props.history.push("/sub")
    }
   
    const addCount = () =>{
        setCount(parseInt(count)+1)  //updating the count on button click
    }
        return (
            <Container>
                <Row className="mt-3">
                    <Col xs={10}>
                        <h4>Home Page</h4>
                        {/* <h2>{count}</h2> */}
                        <Col className="text-center">
                         <DisplayCount count={count} ></DisplayCount> {/*passing the count as props to DisplayCount */}
                        <Button variant ="primary" onClick={addCount} className="mt-5" >Counter +</Button>
                        </Col>
                    </Col>
                    <Col xs={2}>
                    <Button variant="danger" onClick={logout}>Log out</Button>
                    <Button variant="primary" onClick={subroute}>open sub</Button>
                    </Col>
                    <SRoute />
                </Row>
            </Container>
        
        )
    }
export default Home;
