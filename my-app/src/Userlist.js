import React from 'react'
import styled from 'styled-components'

const StyledUserlist = styled.div`
    .user-container{
        border: 3px solid white;
        border-radius: 50%;
        padding: 2%;
        width: 10%;
        display: flex;
        flex-flow: column;
        margin: 2% auto;
        background-color: #191970;
        color: white;
    }
    .user-container:hover{
        background-color: white;
        color: #191970;
        transition: 1s;
        transform: scale(1.3)
    }

    p{
        margin: 2% auto;
    }
   
`
const Userlist = (props) => {
    const {user} = props
    console.log(props)
    return (
        <StyledUserlist>
            <div > 
                <div className="user-container">
                    <h2 className="name">{user.name}</h2>
                    <h3 className="email">{user.email}</h3>
                </div>
            </div>
         </StyledUserlist>
    )
}

export default Userlist