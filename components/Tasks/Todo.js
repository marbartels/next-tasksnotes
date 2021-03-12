import { useState, useEffect } from 'react';
import { TaskDisplay, TaskButtons } from './TodoParts';

const Todo = ({ thisTodo, tasks, setTasks }) => {
    const [editing, setEditing] = useState(false);

    return (
        <div className="todo-div">
            <TaskDisplay taskState={thisTodo} editing={editing} setEditing={setEditing} />
            <TaskButtons values={thisTodo} setValues={setTasks} />
        </div>
    )
};

export default Todo;