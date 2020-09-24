import React from 'react'
import styled from 'styled-components'

const StyledUserlist = styled.div`

`
const Userlist = (props) => {
    const {user} = props
    console.log(props)
    return (

        <div>
            <p>name:{user.name}</p>
            <p>email:{user.email}</p>
            <p>password:{user.password}</p>
        </div>
    )
}

export default Userlist