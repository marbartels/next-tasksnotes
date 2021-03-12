import Todo from './Todo';

const TaskList = ({ tasks, setTasks }) => {
    console.log('inside TaskList ' + tasks);
    for (const task of tasks) {
        console.log(task);
    };
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {tasks.map(todo => (
                        <Todo
                            thisTodo={todo}
                            tasks={tasks}
                            setTasks={setTasks}
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
};

export default TaskList;