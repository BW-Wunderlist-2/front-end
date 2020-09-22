import React, { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from './schema'
import axios from 'axios'


const StyledLogin = styled.div`
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
    .pw{
        margin-bottom: 5%;
    }
    h2{
        margin: 5% 0;
        margin-bottom: 5%;
        justify-self: center;
    }

    button{
        width: 10%;
        margin: 0 auto;
        text-align: center;
        padding: 1%;
        margin-bottom: 2%;
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
`

const Login = (props) => {
    
    const {
        inputChange, 
        onSubmit, 
        fomrValue, 
        setFormValue,
        errors,
        setErrors,
        validate
    } = props;



    return (
        <StyledLogin>

            <h2>Sign In</h2>
            <form onSubmit={onSubmit}>

                <label> Name
                    <input 
                    type='text'
                    placeholder="Your Name"
                    name="name"

                    />
                </label>


                <label className="pw"> Password
                    <input 
                    type='password'
                    placeholder="Your Password"
                    name="password"
                    
                    />
                </label>

                <button>Login</button>
                <a href="/">Not registered? Click here to Sign up!</a>

            </form>
        </StyledLogin>
    )
}

export default Login