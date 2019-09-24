import React,{useState} from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "./signin.scss"
const  Signin =(props)=> {
  const submit = (e) =>{
  e.preventDefault();
  if(userName === "admin" && password === "admin"){
    localStorage.setItem("auth", true);
    props.history.push("/home")
  }
 else{
   alert("invalid login")
 }
}
  const [userName, setuserName] = useState(''); 
  const [password, setPassword] = useState('');

  const handleChange = (e)=>{
    if(e.target.name === "userName"){
      setuserName(e.target.value)
    }
    if(e.target.name === "password"){
      setPassword(e.target.value)
    }
  }
  return (
    <Container fluid className="h-full">
      <Row className="h-100 justify-content-center">
        <Col xs="5" className="align-self-center" >
          <Card className="signin-card" >
            <Card.Body>
              <Card.Title>Sign In</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" name="userName"  onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange}  />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={submit}>
                    Submit
                  </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Signin;