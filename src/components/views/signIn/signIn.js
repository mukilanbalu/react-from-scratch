import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "./signin.scss"
function Signin() {
  return (
    <Container fluid className="h-full">
      <Row className="h-100 justify-content-center">
        <Col xs="5" className="align-self-center" >
          <Card className="signin-card" >
            <Card.Body>
              <Card.Title>Sign In</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;