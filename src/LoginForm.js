import React, { useState } from 'react';
import axios from 'axios';
import { Card, FormGroup, Form, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

const projectID = 'c7f4bb62-273f-4eb3-8435-41eb7e4fb016';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <Card >
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleSubmit}>
        <FormGroup
          label="username"
          name="demo1.username"
          required
          controlId="demo1.usernameController">
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        </FormGroup>
        <FormGroup
          label="Password"
          name="demo1.password"
          required
          controlId="demo1.formBasicPassword">
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
        </FormGroup>
        <Button className="btn btn-primary btn-large centerButton" 
  type="submit">Login Now</Button>
        </Form>

        <pre>{error}</pre>
      </Card.Body>
    </Card>

  );
};

export default Modal;