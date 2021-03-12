import { useState, useEffect } from 'react';
import Form from '../../components/tasksComponents/Form';
import ListHeader from "../../components/tasksComponents/ListHeader";
import TaskList from "../../components/tasksComponents/TaskList";
import styles from '../../styles/Tasks.module.css';

const listTasks = [
    {
        name: "Testing",
        urgency: "Very urgent",
        complete: false,
        id: 1,
    },
    {
        name: "Again",
        urgency: "Normal",
        complete: false,
        id: 2,
    },
    {
        name: "Hello groceries",
        urgency: "Normal",
        complete: true,
        id: 3,
    },
];

function setListTasks() {
    console.log('f');
}

export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();

    // const paths = data.map(member => {
    //     return {
    //         params: { memberId: member.id.toString() }
    //     }
    // });

    const paths = [{ params: { listName: 'home' } }]

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const listName = context.params.listName;
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + memberId);
    // const listData = await res.json();
    const listData = [{ taskName: 'Testing', completed: 'false' }, { taskName: 'Is it working?', completed: 'true' }];

    return {
        props: { listName: listName }
    };
}

const ListView = ({ listName }) => {
    // const ListView = ({ listName }) => {

    // const [inputTaskText, setInputTaskText] = useState('');

    // const [filteredTodos, setFilteredTodos] = useState([]);

    // function filterHandler() {
    //     console.log('filtering');
    // }

    // useEffect(() => {
    //     getTodos();
    // }, [])

    // useEffect(() => {
    //     filterHandler();
    //     saveTodos();
    // }, [listTasks, setListTasks]);

    // const filterHandler = () => {
    //     switch (status) {
    //         case 'completed':
    //             setFilteredTodos(todos.filter(todo => todo.completed === true));
    //             break;
    //         case 'uncompleted':
    //             setFilteredTodos(todos.filter(todo => todo.completed === false));
    //             break;
    //         default:
    //             setFilteredTodos(todos)
    //             break;
    //     }
    // };

    const saveTodos = () => {
        // use listName
        console.log('saved');
        //save to db
    };

    const getTodos = () => {
        // get from db
        // setListTasks();
        console.log('got them')
    }

    return (
        <>
            <style jsx global>{`
            body {
                background: black
            }
            `}</style>
            <div className={styles.tasksBody}>
                <ListHeader />
                {/* <Form
                    tasks={listTasks}
                    setTasks={setListTasks}
                    inputText={inputTaskText}
                    setInputText={setInputTaskText}
                /> */}
                <TaskList
                    tasks={listTasks}
                    setTasks={setListTasks}
                />
            </div>
        </>
    );
};

export default ListView;