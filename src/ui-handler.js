export const updateTaskContainer = (tasksContainer, taskData) => {
    tasksContainer.innerHTML = ''; // Clear existing tasks
    taskData.forEach(({ taskId, taskDue, taskTitle, taskDescription }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${taskId}">
            <p><strong>Title:</strong> ${taskTitle}</p>
            <p><strong>Due Date:</strong> ${taskDue}</p>
            <p><strong>Description:</strong> ${taskDescription}</p>
            <button type="button" class="btn edit-btn">Edit</button>
            <button type="button" class="btn delete-btn">Delete</button>
        </div>
        `;
    });
};

export const attachTaskEvents = (editCallback, deleteCallback) => {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => editCallback(e.target));
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => deleteCallback(e.target));
    });
};