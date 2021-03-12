import { useState, useEffect } from 'react';
import Form from '../../components/Tasks/Form';
import ListHeader from "../../components/Tasks/ListHeader";
import TaskList from "../../components/Tasks/TaskList";
import styles from '../../styles/Tasks.module.css';

var listTasks = [
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

export const getStaticPaths = () => {
    const paths = [
        { params: { listName: 'home' } },
        { params: { listName: 'work' } },
        { params: { listName: 'hobbies' } },
        { params: { listName: 'other' } },
        { params: { listName: 'studies' } },
    ];

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    // const memberId = context.params.memberId;
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + memberId);
    // const memberData = await res.json();

    return {
        props: {}
    };
}

const ListView = () => {
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