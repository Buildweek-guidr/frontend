import React from 'react';
import { Route, Switch } from "react-router-dom";

//Functionality 
import PrivateRoute from '../src/components/PrivateRoute'

//Components
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import List from '../src/components/List';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <main>
      <Switch>
        {/* <SignUp /> */}
        <PrivateRoute exact path='/List' component={List} />
        <Route exact path = "/" component={SignUp} />
        <Route path = "/login" component={LogIn} />
      </Switch>
    </main>
  );
}

export default App;
