import {axiosWithAuth} from '../utils/axiosWithAuth'

export const EDIT_TODO = "EDIT_TODO"
export const DEL_TODO = "DEL_TODO"
export const ADD_TODO = "ADD_TODO"
export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS ='FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_ERROR ='FETCH_TODOS_ERROR'

export const fetchTodos = () =>{
    return(dispatch) =>{
        dispatch({type: FETCH_TODOS});
        const ID = localStorage.getItem("UID")
        axiosWithAuth().get(`https://backend-for-wunderlist2.herokuapp.com/api/user/tasks/${ID}`)
        .then((data)=>{
            console.log("Data from axios",data)
            dispatch({type: FETCH_TODOS_SUCCESS, payload: data.data})
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type: FETCH_TODOS_ERROR, payload: {message: "Oops! We cant find your list right now"}})
        });
    };
};

export const addToDo = (newTask) =>{
    return(dispatch) =>{
        const ID = localStorage.getItem("UID")
        axiosWithAuth().post(`https://backend-for-wunderlist2.herokuapp.com/api/user/tasks/${ID}`, newTask)
        .then((res)=>{
            console.log(res)
            dispatch({type: ADD_TODO})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}