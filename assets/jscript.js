// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.innerHTML = `${taskInput.value} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        
        // Add the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
