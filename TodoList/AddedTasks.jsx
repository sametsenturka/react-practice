import Todo from './Todo.jsx';
import { useState } from 'react';
import './todo.css';

const AddedTasks = () => {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleDeleteTask = (indexToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <Todo onTaskAdded={handleTaskAdded} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => handleDeleteTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddedTasks;