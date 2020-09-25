import React, {useState} from 'react'
import {axiosWithAuth} from '../store/utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


export default function EditTask(props){
    const history= useHistory()
    const taskId = localStorage.getItem("taskID")
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
        const editTask ={
        "task":form.task.trim(),
        "description":form.description.trim(),
        "complete": false,
        "dueDate": form.dueDate.trim()
        }
        //put req here
        axiosWithAuth().put(`https://backend-for-wunderlist2.herokuapp.com/api/single-task/${taskId}`, editTask)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        //push to home with history
        history.push('/home')
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
                <button>Done Editing</button>
            </form>
        </div>
    )
}