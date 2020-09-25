import React, {useState} from 'react';
import ToDos from './ToDos'
import AddToDo from './AddToDo'
import {fetchTodos} from '../store/actions'
import {connect} from 'react-redux'
import {axiosWithAuth} from '../store/utils/axiosWithAuth'


export const LandingPage=({fetchTodos, tasks}) =>{
    const [taskList, setTaskList] = useState([])
    const ID = localStorage.getItem("UID")
    const getTasks= () =>{ axiosWithAuth().get(`https://backend-for-wunderlist2.herokuapp.com/api/user/tasks/${ID}`)
    .then((data)=>{
        console.log("Data from axios",data)
        setTaskList(data.data.data)
        // console.log("tasklist",taskList)
    })
    .catch((err)=>{
        console.log(err)
    });
 }
    return(
        <div>
            <ToDos getTasks={getTasks} taskList={taskList}/>
            <AddToDo getTasks={getTasks}/>
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
 
 export default connect(mapStateToProps, {fetchTodos})(LandingPage);