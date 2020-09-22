import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {PrivateRoute, SignUp, Login, LandingPage} from './components'


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/home' component={<LandingPage />} />
    </div>
  );
}

export default App;
