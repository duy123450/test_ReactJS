import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask.trim()]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]]=
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='todo-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                       placeholder="Enter a task..." 
                       value={newTask}
                       onChange={handleInputChange} />
                <button onClick={addTask}
                        className='add-btn'>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button onClick={() => removeTask(index)}
                                className='remove-btn'>Remove</button>
                        <button onClick={() => moveTaskUp(index)}
                                className='move-btn'>Up</button>
                        <button onClick={() => moveTaskDown(index)}
                                className='move-btn'>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList