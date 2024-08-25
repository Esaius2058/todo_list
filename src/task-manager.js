export class Todo {
    constructor(taskTitle, taskDescription, taskDue, taskPriority){
        this.taskId = `${taskTitle.toLowerCase().split(" ").join("-")}-${Date.now()}`;
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskDue = taskDue;
        this.taskPriority = taskPriority;
    }
}

export const addTask = (taskData, newTask) => {
    taskData.unshift(newTask);
};

export const updateTask = (task) => {
    task.taskTitle = titleInput.value;
    task.taskDescription = descriptionInput.value;
    task.taskDue = dueDate.value;
    task.taskPriority = priorityInput.value;
};

export const deleteTask = (taskData, taskId) => {
    const index = taskData.findIndex(task => task.taskId === taskId);
    if (index !== -1) taskData.splice(index, 1);
};