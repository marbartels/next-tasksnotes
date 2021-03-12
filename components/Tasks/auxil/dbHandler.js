'use strict';
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin-marieke:projectsDb4-Marieke@startingprojects.eeqqz.mongodb.net/tasksDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: 'Please check your data entry, no name specified!',
    },
    urgency: {
        type: String,
        enum: ['Normal', 'Important', 'Urgent', 'Very urgent'],
        required: 'Please check your data entry, no task urgency specified!',
    },
    complete:  {
        type: Boolean,
        default: false,
    },
    datePendingSince: {
        type: Date,
        required: "Please check your data entry, no 'task pending since' date specified!",
    }
});

const Task = mongoose.model('Task', taskSchema);

const listSchema = {
    name: {
        type: String,
        minlength: 4,
        required: 'Please check your data entry, no list name specified!',
    },
    slug: {
        type: String,
        minlength: 4,
        required: 'Please check your data entry, no list slug specified!',
    },
    items: {
        type: [taskSchema],
        required: 'Please check your data entry, no tasks list specified!',
    }
};

const TaskList = mongoose.model('TaskList', listSchema);

exports.useList = async function (listName) {
    return TaskList.findOne({ name: listName }).exec()
        .then(result => {
            console.log(result);
            if (!result) {
                result = createList(listName);
            }
            return result;
        })
        .catch(err => console.log(err) );
}

exports.getList = async function (listId) {
    try {
       return TaskList.findOne({ _id: listId }).exec();
    } catch (err) { console.log(err) }
}

async function createList(listName) {
    const listSlug = listName.toLowerCase();
    const createdList = new TaskList({
        name: listName,
        slug: listSlug,
        items: [],
    });
    try {
        await createdList.save();
        console.log(`Added list ${listName} to collection of task lists`);
        return createdList;
    } 
    catch(exception) { console.log('Error while saving to db.') }
}

exports.addNewTask = async function (listId, newTask) {
    var foundList;
    try {
        foundList = await TaskList.findOne({ _id: listId });
    } 
    catch (exception) { console.log(exception); }
    if (!foundList) { console.log('Error finding list.'); }
    newTask.dateAdded = new Date();
    const taskToSave = new Task(newTask);
    try {
        foundList.items.push(taskToSave);
        await foundList.save();
        console.log('Saved new task!');
    } 
    catch (err) { console.log(err); }
}

exports.loadStoredTasks = async function(listId) {
    var foundList;
    try {
        foundList = await TaskList.findOne({ _id: listId });
    }
    catch (exception) { console.log(exception); }
    if (!foundList) { console.log('Error finding list.'); }
    var mongoDbTasks;
    try {
        mongoDbTasks = foundList.items;
    }
    catch (err) { console.log(err); }
    return mongoDbTasks;
}

exports.setTaskComplete = async function(listId, taskId, taskComplete) {
    const isCompleted = (taskComplete === 'yes');
    console.log('writing to DB');
    console.log(isCompleted);
    var foundList;
    try {
        foundList = await TaskList.findOne({ _id: listId });
    } 
    catch (exception) { console.log(exception); }
    if (!foundList) { console.log('Error finding list.'); }
    try {
        const foundIndex = foundList.items.findIndex(listItem => listItem._id == taskId);
        if (foundIndex > -1) {
            foundList.items[foundIndex].complete = taskComplete; 
        } else {
            console.log('Error, task not found.');
        }
        await foundList.save();
    } 
    catch (err) { console.log(err); }
};

exports.deleteTask = async function(listId, taskId) {
    console.log(listId);
    try {
        await TaskList.findOneAndUpdate( { _id: listId }, {$pull: {items: {_id: taskId}} });
    } catch (exception) { console.log(exception); }    
};