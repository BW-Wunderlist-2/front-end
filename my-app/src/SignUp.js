import React, { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from './schema'
import axios from 'axios'
import Login from './Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StyledSignUp = styled.div`
    form{
        width: 60%;
        display: flex;
        margin: 0 auto;
        flex-flow: column;
    }
    input{
        width: 30%;
        display: flex;
        margin: 2% auto;
        text-align: center;
    }
    h2{
        margin: 5% 0;
        justify-self: center;
        margin-bottom: 0;
    }

    button{
        width: 10%;
        margin: 0 auto;
        text-align: center;
        padding: 1%;
        margin-bottom: 2%
    }
    .checkbox{
        margin: 5% auto;
        font-size: 0.8rem;
    }
    h3{
        font-size: 1rem;
        color: red;
    }
    a{
        font-size: 0.8rem;
        text-align: center;
        text-decoration: none;
    }
    a:visited{
        text-decoration: none;
    }
    .container{
        display:flex;
        flex-flow:column;
    }
`

const SignUp = (props) => {

    
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        cbx: false

    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        cbx: ""

    })

    

    const validate = (event) => {
        yup
        .reach(schema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [event.target.name] : ""
               
            })
        })
        .catch(err => {
            setErrors({
                ...errors,
                [event.target.name] : err.errors[0]
               
            })
        })
    }
   
    


    const onSubmit = (event) => {
        event.preventDefault()
        setFormValue({name: "", email: "", password: "", cbx: false})
        
    }


    const inputChange = (event) => {
        event.persist()
        validate(event)
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormValue({...formValue, [event.target.name] : value})
    }

  
    

    


    return (
        <StyledSignUp>
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <h3>{errors.name}</h3>
                <h3>{errors.email}</h3>
                <h3>{errors.password}</h3>
                <h3>{errors.cbx}</h3>

                <label> Name
                    <input 
                    type='text'
                    placeholder="Your Name"
                    name="name"
                    value={formValue.name}
                    onChange={inputChange}
                    
                    
                    />
                </label>

                <label> E-mail
                    <input 
                    type='email'
                    placeholder="Your E-Mail"
                    name="email"
                    value={formValue.email}
                    onChange={inputChange}
                    
                    />
                </label>

                <label> Password
                    <input 
                    type='password'
                    placeholder="Your Password"
                    name="password"
                    value={formValue.password}
                    onChange={inputChange}
                    
                    />
                </label>

                <label className="checkbox"> I accept the Terms and Conditions
                    <input 
                    type='checkbox'
                    name="cbx"
                    checked={formValue.cbx}
                    onChange={inputChange}
                    value={formValue.cbx}

                    
                    />
                    
                </label>

                <button onSubmit={onSubmit}>Submit</button>
                <a href="/Login">Already registered? Click here to Sign in!</a>
            </form>
        </div>
        </StyledSignUp>
    )
}

export default SignUp