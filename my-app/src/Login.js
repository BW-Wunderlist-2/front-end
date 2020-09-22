import React, { useState } from 'react'
import styled from 'styled-components'


const Login = () => {
    return (
        <div>
            <form>

                <label> Name
                    <input 
                    type='text'
                    placeholder="Your Name"
                    name="name"
                    
                    
                    
                    />
                </label>


                <label> Password
                    <input 
                    type='password'
                    placeholder="Your Password"
                    name="password"
                    
                    
                    />
                </label>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login