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
        width: 40%;
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
        width: 40%;
        margin: 0 auto;
        text-align: center;
        padding: 1%;
    }
    .checkbox{
        margin: 5% auto;
    }
`

const SignUp = (props) => {


    const [formValue, setFormValue] = useState({
        name: "",
        value: "",

    })


    const onSubmit = (event) => {
        event.preventDefault()
    }

    const onChange = (event) => {
        setFormValue({
            ...formValue, [event.target.name] : event.target.value
        })
        
    }

    


    return (
        <StyledSignUp>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label> First Name
                    <input 
                    type='text'
                    placeholder="Your First Name"
                    name="firstname"
                    value={formValue.firstname}
                    onChange={onChange}
                    
                    
                    />
                </label>

                <label> Last Name
                    <input 
                    type='text'
                    placeholder="Your Last Name"
                    name="lastname"
                    value={formValue.lastname}
                    onChange={onChange}
                    
                    />
                </label>

                <label> E-Mail
                    <input 
                    type='email'
                    placeholder="Your E-Mail"
                    name="email"
                    value={formValue.email}
                    onChange={onChange}
                    
                    />
                </label>

                <label> Password
                    <input 
                    type='password'
                    placeholder="Your Password"
                    name="password"
                    value={formValue.password}
                    onChange={onChange}
                    
                    />
                </label>

                <label className="checkbox"> I accept the terms and conditions
                    <input 
                    type='checkbox'
                    name="cbx"
                    required
                    checked
                    onChange={onChange}

                    
                    />
                    
                </label>

                <button onSubmit={onSubmit}>Submit</button>
            </form>
        </StyledSignUp>
    )
}

export default SignUp