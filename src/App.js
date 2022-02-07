
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chat from './Chat';
import Call from './Call';
//import Regi from './Register';
import Nov from './Nav';
//import LF from './logfacex';
import Logface from './LogFace';



export default function App() {
  return (
    <Router >
      <Nov />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/lf">
            <Logface />
          </Route>
          <Route path="/call">
            <Call />
          </Route>
          {/*<Route path="/logface">
          <Logface />
          </Route>*/}
          <Route path="/">
            <Chat />
          </Route>

        </Switch>

    </Router>
  );
}