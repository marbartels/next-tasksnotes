'use strict';
import { db_updateTaskDescr as ajaxUpdate } from '/js/ajaxRequests.js'

var taskDescrVal = '';
var editDescrInputVal = '';


function attachListeners() {
    const taskToggleBtns = document.querySelectorAll('.todo-complete-btn');
    const taskEditBtns = document.querySelectorAll('.edit-task');
    const addTaskBtn = document.querySelector('#btn-add-task');

    addTaskBtn.addEventListener('click', check_addTask)
    taskToggleBtns.forEach(task => task.addEventListener('click', changeStatusAndSubmit));
    taskEditBtns.forEach(task => task.addEventListener('click', addEditForm));
}

document.addEventListener('DOMContentLoaded', attachListeners);

function changeStatusAndSubmit(clickEv) {
    const cBtnClicked = clickEv.target;
    const currentStatus = cBtnClicked.getAttribute('completed');
    if (currentStatus === 'yes') {
        cBtnClicked.value = 'no';
        cBtnClicked.setAttribute('completed', 'no');
    } else if (currentStatus === 'no') {
        cBtnClicked.value = 'yes';
        cBtnClicked.setAttribute('completed', 'yes');
    } else if (currentStatus === null) {
        console.log('error');
    }
    this.form.submit();
}

function check_addTask(clickAddTaskEv) {
    clickAddTaskEv.preventDefault();
    const addTaskForm = document.querySelector('#form-task-add');

    const taskDescription = document.querySelector('#task-descr-input').value;
    if (taskDescription.length > 2) {
        addTaskForm.submit();
    }
}

function addEditForm(clickEv) {
    const divClicked = clickEv.target.tagName=='DIV' ? clickEv.target : clickEv.target.firstElementChild;
    const thisForm = divClicked.parentElement.children[1];
    const thisLi = divClicked.parentElement.firstElementChild;
    const editImage = divClicked.firstElementChild;
    const submitImage = divClicked.children[1];

    divClicked.removeEventListener('click', addEditForm);
    //remove LI
    taskDescrVal = thisLi.textContent;
    thisLi.classList.add('hidden');
    //hide old img
    editImage.classList.add('hidden');
    // Enable saving image
    submitImage.classList.remove('hidden');
    //enable input field, click it for input
    const editInput = thisForm.firstElementChild;
    thisForm.classList.remove('hidden');
    // editInput.setAttribute('type', 'text');
    editInput.focus();
    const selectionPosition = taskDescrVal.length;
    editInput.value = taskDescrVal;
    editInput.setSelectionRange(selectionPosition, selectionPosition);

    setTimeout(() => {
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && event.target.nodeName === "INPUT") {
                event.preventDefault();
                kpUpdateDescr(divClicked);
            }
        });
        divClicked.addEventListener('click', clickUpdateDescr);
    }, 500);
}

function clickUpdateDescr (saveDescrClick) {
    const divClicked = saveDescrClick.target.tagName=='DIV' ? saveDescrClick.target : saveDescrClick.target.firstElementChild;
    kpUpdateDescr(divClicked);
}

function kpUpdateDescr (divClicked) {
    const thisLi = divClicked.parentElement.firstElementChild;
    const thisTodoItem = divClicked.parentElement;
    const thisForm = thisTodoItem.children[1];
    const editInput = thisForm.firstElementChild;
    const editImage = divClicked.firstElementChild;
    const submitImage = divClicked.children[1];

    editDescrInputVal = editInput.value;
    updateDomAndDescr(editDescrInputVal, editInput, thisLi, editImage, submitImage);
}

function updateDomAndDescr (editDescrInputVal, editInput, thisLi, editImage, submitImage) {
    thisTodoItem.firstElementChild.classList.remove('hidden');
    // update DB
    const nameTag = editInput.getAttribute('name');
    ajaxUpdate(editDescrInputVal, nameTag);
    // update DOM -  editDescrInputVal
    editInput.classList.add('hidden');
    thisLi.textContent = editDescrInputVal;
    // Enable old img
    editImage.classList.remove('hidden');
    // Hide saving image
    submitImage.classList.add('hidden');
}
