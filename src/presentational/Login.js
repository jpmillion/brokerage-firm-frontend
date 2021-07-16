import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

function Login() {
    return (
        <React.Fragment>
            <h1 className="text-center">Log In</h1>
            <div className="center d-flex align-items-center justify-content-center">
                <Form >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Login
