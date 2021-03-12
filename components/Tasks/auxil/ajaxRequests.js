'use strict';

export async function db_updateTaskDescr(description, nameTag) {
    const listId = nameTag.split(';')[0];
    const taskId = nameTag.split(';')[1];
    console.log('list: ' + listId, ' task: ' + taskId);
    // AJAX REQUEST
    const data = { 
        list: listId,
        task: taskId,
        newDescription: description,
    };

    fetch('https://tranquil-stream-29458.herokuapp.com/tasks/update', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export async function db_toggleComplete(listId, taskId) {
    const listId = nameTag.split(';')[0];
    const taskId = nameTag.split(';')[1];
    console.log('list: ' + listId, ' task: ' + taskId);
    // AJAX REQUEST
    const data = { 
        list: listId,
        task: taskId,
        newDescription: description,
    };

    fetch('https://tranquil-stream-29458.herokuapp.com/tasks/update', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}