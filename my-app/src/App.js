import React, {useState}from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {PrivateRoute, SignUp, Login, LandingPage} from './components'


function App() {

  const [formValue, setFormValue] = useState({
    name: "",
    password: "",
    email: "",
    cbx: false

})

const [errors, setErrors] = useState({
    name: "",
    password: "",
    email: ""

})

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Route path='/signup' component={() => <SignUp formValue={formValue} setFormValue={setFormValue} errors={errors} setErrors={setErrors} />} />
      <Route path='/login' component={() =><Login formValue={formValue} setFormValue={setFormValue} errors={errors} setErrors={setErrors} />} />
      <PrivateRoute path='/home' component={LandingPage} />
    </div>
  );
}

export default App;
