import React, {useState} from 'react';
import {connect} from 'react-redux'
import {addToDo} from '../store/actions'

export const AddToDo = (props) =>{
    const initForm={
        task:'',
        description:'',
        complete: false,
        dueDate: ''
    }
    const [form, setForm]= useState(initForm)
    const handleChange =(e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask ={
        "task":form.task.trim(),
        "description":form.description.trim(),
        "complete": false,
        "dueDate": form.dueDate.trim()
        }
        props.addToDo(newTask);
        setForm(initForm);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    type="text"
                    placeholder="Task Name"
                    name="task"
                    value={form.task}
                    onChange={handleChange} 
                    />
                </label>
                <label>
                    <input
                    type="text"
                    placeholder="Task Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange} 
                    />
                </label>
                <label>
                    <input
                    type="text"
                    placeholder="Due Date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={handleChange} 
                    />
                </label>
                <button>Submit New Task</button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        tasks: state.taks
    }
}

export default connect(mapStateToProps, {addToDo})(AddToDo)