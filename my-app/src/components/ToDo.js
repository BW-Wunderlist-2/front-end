import React from 'react';
import {connect} from 'react-redux'
import {axiosWithAuth} from '../store/utils/axiosWithAuth'
import {Link} from 'react-router-dom'


export const ToDo = ({task, getTasks}) =>{
    const deleteTask = (e) =>{
        axiosWithAuth().delete(`https://backend-for-wunderlist2.herokuapp.com/api/single-task/${task.id}`)
        .then((res) =>{
            getTasks()
        })
        .catch(err => console.log(err))
    }
    const startEdit = (e) =>{
        localStorage.setItem("taskID", task.id)
    }
    console.log(task)
    return(
        <div>
            <p>Task Name: {task.task}</p>
            <p>Description: {task.description}</p>
            <p>Due: {task.dueDate} </p>
            <button onClick={deleteTask}>Complete {task.task} </button>
            <Link to='/edit'><button onClick={startEdit}>Edit {task.task}</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    return{
       tasks: state.tasks,
       loadingTasks: state.loadingTasks,
       errorMessage:state.errorMessage
    }
 }
 
 export default connect(mapStateToProps, {})(ToDo);