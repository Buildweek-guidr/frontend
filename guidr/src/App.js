import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

//Functionality 
import PrivateRoute from '../src/components/PrivateRoute'
import { GuidrContext } from './contexts/GuidrContext'
//Components
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import List from '../src/components/List';
import Home from './components/Home';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import EditTrip from '../src/components/EditTrip'

//styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')? true: false);
      const [trips, setTrips] = useState([]);  // useState changed from {} to []
      const [guides, setGuides] = useState([])
      const [user, setUser] = useState([])
      useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
  return (
    <main>
      <GuidrContext.Provider value={{trips, setTrips, isLoggedIn, setIsLoggedIn, guides, setGuides, user, setUser}}>
      <Switch>
        <PrivateRoute path='/list' component={List} />
        <Route exact path = "/" component={SignUp} />
        <Route path = "/login" component={LogIn} />
        <Route path = "/home" component={Home} />
        <Route path = "/profile" component={Profile} />
        <Route path = "/editprofile" component={EditProfile} />
        <Route path = '/EditTrip/:id' component={EditTrip} />
      </Switch>
      </GuidrContext.Provider>
    </main>
  );
}

export default App;
