import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

import { Card, FormGroup, Form, Button } from 'react-bootstrap'

const Call = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <div>
      <h2> Meet Application</h2>
      {call ? (<Jutsu
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <Card >
    <Card.Body>
      <Card.Title>Register</Card.Title>
      <Form onSubmit={handleClick}>
        <FormGroup>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            </FormGroup>
        <FormGroup>
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
        <FormGroup>
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>

      <Button className="btn btn-primary btn-large centerButton" 
type="submit">Start / Join</Button>
      </Form>


    </Card.Body>
  </Card>
        )}
        </div>
  )
}

export default Call;
