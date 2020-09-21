import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSignUp = styled.div`
    form{
        width: 60%;
        display: flex;
        margin: 0 auto;
        flex-flow: column;
    }
    input{
        width: 50%;
        display: flex;
        margin: 2% auto;
        text-align: center;
    }
    h2{
        margin: 5% 0;
        margin-bottom: 15%;
        justify-self: center;
    }

    button{
        width: 50%;
        margin: 0 auto;
        text-align: center;
        padding: 1%;
    }
    .checkbox{
        margin: 5% auto;
    }
`

const SignUp = () => {

    const onSubmit = () => {
        preventDefault()
    }

    const [formValue, setFormValue] = useState('')



    return (
        <StyledSignUp>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label> First Name
                    <input 
                    type='text'
                    placeholder="Your First Name"
                    name="firstname"
                    onChange={}
                    />
                </label>

                <label> Last Name
                    <input 
                    type='text'
                    placeholder="Your Last Name"
                    name="lastname"
                    onChange={}
                    />
                </label>

                <label> E-Mail
                    <input 
                    type='email'
                    placeholder="Your E-Mail"
                    name="email"
                    onChange={}
                    />
                </label>

                <label> Password
                    <input 
                    type='password'
                    placeholder="Your Password"
                    name="password"
                    onChange={}
                    />
                </label>

                <label className="checkbox"> I accept the terms and conditions
                    <input 
                    type='checkbox'
                    name="cbx"
                    required
                    onChange={}
                    />
                    
                </label>

                <button>Submit</button>
            </form>
        </StyledSignUp>
    )
}

export default SignUp