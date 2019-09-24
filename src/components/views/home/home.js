import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = (props) => {
    const logout =()=>{
        localStorage.removeItem("auth");
        props.history.push("/");
    }
        return (
            <Container>
                <Row>
                    <Col>
                        <h4>Home Page</h4>
                        <Button variant="danger" onClick={logout}>Log out</Button>
                    </Col>
                </Row>
            </Container>
        
        )
        

    }
export default Home;
