var selectedPriority = ""; // Global variable to store the selected priority

function toggleDropdown() {
  var dropdownContent = document.getElementById("priority-dropdown");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

function selectPriority(priority) {
  selectedPriority = priority;
  document.querySelector(".selected-option").textContent = priority;
  toggleDropdown(); // Hide the dropdown after selecting an option
}

function addTask() {
  // Get the values of task, priority, and duration inputs
  var taskValue = document.getElementById("task-input").value;
  var priorityValue = selectedPriority;
  var deadlineValue = document.getElementById("deadline-input").value;

  // Validate if task, priority, and duration are not empty
  if (
    taskValue.trim() === "" ||
    priorityValue.trim() === "" ||
    deadlineValue.trim() === ""
  ) {
    alert("Please enter task, priority, and deadline.");
    return;
  }

  // Create a new div to hold the task, priority, and duration inputs
  var taskRow = document.createElement("div");
  taskRow.classList.add("row", "output-row");
  taskRow.innerHTML =
    "Task  : " +
    taskValue +
    "<br>Priority  : " +
    priorityValue +
    "|Deadline : " +
    deadlineValue;
  // Create a "Done" button
  var doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.onclick = function () {
    // You can customize this function to handle the "Done" action
    // For example, you can remove the task from the list
    taskRow.remove();
  };

  // Append the "Done" button to the task row
  taskRow.appendChild(doneButton);
  // Append the new div below the "ADD" button
  var addButtonContainer = document.querySelector(".add-button-container");
  addButtonContainer.insertAdjacentElement("afterend", taskRow);

  // Clear the input fields for the next entry
  document.getElementById("task-input").value = "";
  document.querySelector(".selected-option").textContent = "Select priority";
  selectedPriority = "";
  document.getElementById("deadline-input").value = "";
}
