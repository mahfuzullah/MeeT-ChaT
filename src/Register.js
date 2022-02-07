import React, { useState } from 'react';
import axios from 'axios';
import { Card, FormGroup, Form, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

const pvKey = '9c2550ed-bad6-4af5-b216-f6748930bfc8';

const Regi = () => {
  const [usernamex, setUsernamex] = useState('');
  const [passwordx, setPasswordx] = useState('');
  const [passwordy, setPasswordy] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordx !== passwordy) {setError('Oops,passwords dont match.');}
    //const authObject = { 'PRIVATE-KEY': pvKey, 'username': usernamex, 'secret': passwordy };

    try {
      //await axios.post('https://api.chatengine.io/users', { headers: authObject });
      await axios
      .post(  
        'https://api.chatengine.io/projects/people/',  
        { username: usernamex, secret: passwordy },  
        { headers: { 'Private-Key': pvKey } },  
      );
      localStorage.setItem('username', usernamex);
      localStorage.setItem('password', passwordy);

      window.location.reload();
      setError('');
    } catch (err) {
      localStorage.setItem('error', err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <Card >
    <Card.Body>
      <Card.Title>Register</Card.Title>
      <Form onSubmit={handleSubmit}>
      <FormGroup
        label="username"
        name="demo1.username"
        required
        controlId="demo1.usernameController">
        <Form.Control type="text" value={usernamex} onChange={(e) => setUsernamex(e.target.value)} className="input" placeholder="Username" required />
      </FormGroup>
      <FormGroup
        label="Password"
        name="demo1.password"
        required
        controlId="demo1.formBasicPassword">
        <Form.Control type="password" value={passwordx} onChange={(e) => setPasswordx(e.target.value)} className="input" placeholder="Password" required />
      </FormGroup>
      <FormGroup
        label="Password"
        name="demo1.password"
        required
        controlId="demo1.formBasicPassword">
        <Form.Control type="password" value={passwordy} onChange={(e) => setPasswordy(e.target.value)} className="input" placeholder="Password Re Enter" required />
      </FormGroup>
      <Button className="btn btn-primary btn-large centerButton" 
type="submit">Register Now</Button>
      </Form>

      <pre>{error}</pre>
    </Card.Body>
  </Card>
  );
};

export default Regi;