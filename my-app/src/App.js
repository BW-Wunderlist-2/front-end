import React, {useState}from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {PrivateRoute, SignUp, Login} from './components'
import LandingPage from './components/LandingPage'
import EditTask from './components/EditTask'


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
      <Route path='/signup' component={() => <SignUp formValue={formValue} setFormValue={setFormValue} errors={errors} setErrors={setErrors} />} />
      <Route path='/login' component={() =><Login formValue={formValue} setFormValue={setFormValue} errors={errors} setErrors={setErrors} />} />
      <PrivateRoute path='/home' component={LandingPage} />
      <PrivateRoute path='/edit' component={EditTask} />
    </div>
  );
}

export default App;
