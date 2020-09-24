import React from 'react'
import {axiosWithAuth} from '.../utils/axiosWithAuth'

export const EDIT_TODO = "EDIT_TODO"
export const DEL_TODO = "DEL_TODO"
export const ADD_TODO = "ADD_TODO"
export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS ='FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_ERROR ='FETCH_TODOS_ERROR'

export const fetchTodos = () =>{
    return (dispatch) =>{
        const ID = localStorage.getItem("user")
        axiosWithAuth().get(`https://backend-for-wunderlist2.herokuapp.com/api/user/tasks/${ID}`)
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}