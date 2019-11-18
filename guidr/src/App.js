import React from 'react';
import { Route, Switch } from "react-router-dom";

//Functionality 
import PrivateRoute from '../src/components/PrivateRoute'

//Components
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import List from '../src/components/List';
import Home from './components/Home';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <main>
      <Switch>
        <PrivateRoute  path='/list' component={List} />
        <Route exact path = "/" component={SignUp} />
        <Route path = "/login" component={LogIn} />
        <Route path = "/home" component={Home} />
        <Route path = "/profile" component={Profile} />
        <Route path = "/editprofile" component={EditProfile} />
      </Switch>
    </main>
  );
}

export default App;
