import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Userlist from './Userlist'

function App() {
    

    const [addUser, setAddUser] = useState([{
      name: "Paul",
      password: "paul123",
      email: "paul@paul.com"
    }])
    
    function userFunc(){ 
      setAddUser([...addUser, formValue])
    }

    const [formValue, setFormValue] = useState({
      name: "",
      password: "",
      email: "",
      cbx: false

  })

  const [errors, setErrors] = useState({
      name: "",
      password: "",
      email: "",
      cbx: ""

  })


  return (
    <div className="App">
    
      <Route exact path="/">
        <SignUp 
          formValue={formValue}
          setFormValue={setFormValue}
          errors={errors} 
          setErrors={setErrors}
          userFunc={userFunc}
        />
      </Route>

      <Route path="/Login">
        <Login 
          formValue={formValue}
          setFormValue={setFormValue}
          errors={errors} 
          setErrors={setErrors}
        />
      </Route>

      <Route path="/Userlist">
        {
          addUser.map(user => {
            return <Userlist user={user}/>
          })
        }
      </Route>
    
    </div>
  );
}

export default App;
