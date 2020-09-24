import React from 'react';
import {connect} from 'react-redux'


export const ToDo = ({task}) =>{
    console.log(task)
    return(
        <div>
            <p>{task.task}</p>
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