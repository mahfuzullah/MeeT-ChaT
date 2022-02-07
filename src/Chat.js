import React, {Fragment} from 'react';
import  { ChatEngine } from 'react-chat-engine';
//reactIs_development,
import LoginForm from './LoginForm'
import Regi from './Register';
import Logface from './LogFace';
import {Container} from 'react-bootstrap';







function Chat() {
  if (!localStorage.getItem('username')) return (
<Fragment>
<Container fluid style={{ margin: "20px 0" }}>

  <LoginForm />



  <Regi />


  {<Logface />}
</Container>
</Fragment>  
    );

  return (

      <ChatEngine
        height='100vh'
        projectID='c7f4bb62-273f-4eb3-8435-41eb7e4fb016'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
      />
  );
}

export default Chat;

