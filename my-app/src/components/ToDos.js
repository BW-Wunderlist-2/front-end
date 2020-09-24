import React, { useEffect} from 'react';
import {connect} from 'react-redux'
import ToDo from './ToDo'
import {fetchTodos} from '../store/actions'




export const ToDos = (props) => {
   useEffect(()=>{
      props.fetchTodos();
   },[])
   console.log("props.tasks=",props.tasks)
   let taskList = props.tasks.data
   console.log("taskList", taskList)
   return( <>
      {/* {taskList.map((task) =>{
         return <ToDo key={task.id} task={task} />
      })} */}
   </>
   )
}
function mapStateToProps(state){
   return{
      tasks: state.tasks,
      loadingTasks: state.loadingTasks,
      errorMessage:state.errorMessage
   }
}

export default connect(mapStateToProps, {fetchTodos})(ToDos);