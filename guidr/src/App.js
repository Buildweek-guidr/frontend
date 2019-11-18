import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <main>
      <Switch>
        {/* <SignUp /> */}
        <Route exact path = "/" component={SignUp} />
        <Route path = "/login" component={LogIn} />
      </Switch>
    </main>
  );
}

export default App;
