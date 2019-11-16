import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { Route } from 'react-router=dom';

function App() {
  return (
    <main>
      <Route exact path = "/signup" component = {SignUp} />
      <Route exact path = "/login" component = {LogIn} />
    </main>
  );
}

export default App;
