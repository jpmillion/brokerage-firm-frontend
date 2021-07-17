import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncLogIn } from './userSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App.css';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(asyncLogIn({email, password}));
    setEmail('');
    setPassword('');
  }
    return (
        <React.Fragment>
            <h1 className="text-center">Log In</h1>
            <div className="center d-flex align-items-center justify-content-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={e => setPassword(e.target.value)} type="password" value={password} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
        </React.Fragment>
    )
}

export default Login
