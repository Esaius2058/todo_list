import { resetForm, toggleForm } from './form-handler.js';
import { Todo, addTask, updateTask, deleteTask } from './task-manager.js';
import { updateTaskContainer, attachTaskEvents } from './ui-handler.js';
import './styles.css';

const openFormBtn = document.getElementById('open-form-btn');
const tasksContainer = document.getElementById('tasks-container');

const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const dueDate = document.getElementById('due-date');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const closeFormBtn = document.getElementById('close-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');

const taskData = [];
let currentTask = null;

openFormBtn.addEventListener('click', () => {
    resetForm(titleInput, descriptionInput, dueDate, priorityInput, addOrUpdateTaskBtn);
    toggleForm(taskForm);
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (currentTask) {
        updateTask(currentTask);
    } else {
        const newTask = new Todo(titleInput.value, descriptionInput.value, dueDate.value, priorityInput.value);
        addTask(taskData, newTask);
    }
    updateTaskContainer(tasksContainer, taskData);
    attachTaskEvents(editTask, deleteTask); // Reattach event listeners after updating the DOM
    resetForm(titleInput, descriptionInput, dueDate, priorityInput, addOrUpdateTaskBtn);
    toggleForm(taskForm);
});

closeFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Discard changes in the form?')){
        resetForm(titleInput, descriptionInput, dueDate, priorityInput, addOrUpdateTaskBtn);
        toggleForm(taskForm);
3    }
});

// Edit and delete task handlers
const editTask = (buttonEl) => {
    const taskId = buttonEl.parentElement.id;
    currentTask = taskData.find(task => task.taskId === taskId);
    titleInput.value = currentTask.taskTitle;
    descriptionInput.value = currentTask.taskDescription;
    dueDate.value = currentTask.taskDue;
    priorityInput.value = currentTask.taskPriority;
    addOrUpdateTaskBtn.innerText = 'Update Task';
    toggleForm(taskForm);
};

const deleteTaskHandler = (buttonEl) => {
    const taskId = buttonEl.parentElement.id;
    deleteTask(taskData, taskId);
    updateTaskContainer(tasksContainer, taskData);
    attachTaskEvents(editTask, deleteTaskHandler);
};

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks-container');
    if (tasksContainer) {
        updateTaskContainer();
    } else {
        console.error('tasksContainer is null');
    }
    // Initialize the task container when the DOM is fully loaded
    updateTaskContainer();
});