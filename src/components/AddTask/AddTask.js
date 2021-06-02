import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import boostrap from 'bootstrap/dist/css/bootstrap.min.css';

export default function AddTask() {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const addNewTask = () => {
        dispatch({
            type: 'ADD_NEW_TASK',
            payload: task
        });
    }

    return (
        <div>
            <h3>Add New Task</h3>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <input type="text" value={task} className="form-control w-75" style={{ display: 'inline' }} placeholder="Enter Task" onChange={(e) => { setTask(e.target.value) }} />
                    <button className="btn btn-primary" onClick={addNewTask}>Add New Task</button>
                </div>
            </div>
        </div>
    )
}