const EditButton = ({ taskId }, { complete }) => {
    const completeHandler = () => {
        console.log('yay');
    }

    return (
        <button
            className="edit-task"
            id={taskId}
            onClick={completeHandler}
        >
            <img className="edit-descr-img" src={complete ? "/icons/icons8-checkmark-64.png" : "https://img.icons8.com/plumpy/48/000000/text-cursor.png"} />
        </button>
    );
}

const CheckButton = () => {
    return (<h3>check. </h3>);
}

const TrashButton = () => {
    return (<h3>trash. </h3>);
}

export const TaskButtons = ({ taskState, setTaskState }) => {
    return (
        <div className="todo-buttons">
            <EditButton
                id="outlined-basic"
                variant="outlined"
                label="Task Name"
                value="values.name"
            // value={values.name}
            // InputProps={{
            //     readOnly: true,
            // }}
            />
            <CheckButton />
            <TrashButton />
        </div>
    )
}

export const TaskDisplay = ({ taskState, setTaskState }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskName = e.target.value;
        const editEndPoint = '';
        const editedTask = { ...task, name: newTaskName };

        // setTimeout(() => {
        //     fetch(editEndPoint, {
        //         method: 'POST',
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(newBlog)
        //     }).then(() => {
        //         console.log('New blog added.')
        //     });
        // }, 2000);
    }

    return (
        <div className="todo-status">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskState.name}
                    onChange={(e) => setTaskState(e.target.value)}
                />
                <EditButton
                    id="outlined-basic"
                    variant="outlined"
                    label="Task Name"
                // InputProps={{
                //     readOnly: true,
                // }}
                />
            </form>
        </div>
    );
}