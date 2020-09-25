import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux'
import ToDo from './ToDo'
import {fetchTodos, addToDo} from '../store/actions'

export const ToDos = ({taskList, addToDo, getTasks}) => {  
   
   useEffect(()=>{
      getTasks()
   }, [addToDo])

   return( <>
      {taskList.map((task) =>{
         return <ToDo key={task.id} task={task} getTasks={getTasks}/>
      })}
   </>
   )
}
function mapStateToProps(state){
   return{
      loadingTasks: state.loadingTasks,
      errorMessage:state.errorMessage
   }
}

export default connect(mapStateToProps, {fetchTodos, addToDo})(ToDos);