export const resetForm = (titleInput, descriptionInput, dueDate, priorityInput, addOrUpdateTaskBtn) => {
    titleInput.value = '';
    descriptionInput.value = '';
    dueDate.value = '';
    priorityInput.value = 'Medium';
    addOrUpdateTaskBtn.innerText = 'Add Task';
};

export const toggleForm = (taskForm) => {
    taskForm.classList.toggle('hidden');
};