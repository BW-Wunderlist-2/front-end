import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  
  

  return (
    <div className="App">
      
      <SignUp />
      {/* <Login /> */}
    </div>
  );
}

export default App;
