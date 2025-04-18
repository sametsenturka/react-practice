import { useState } from 'react';

const Todo = ({ onTaskAdded }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim()) {
            onTaskAdded(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter a task"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default Todo;