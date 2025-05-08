document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".btn-add");
    const doneButton = document.querySelector(".btn-done");
  
    const task = localStorage.getItem("assignmentTask");
    const isMarkedDone = localStorage.getItem("assignmentDone") === "true";
  
    // Only mark as done if task exists and it was marked done
    if (task && isMarkedDone) {
      doneButton.textContent = "Marked as done ✅";
      doneButton.disabled = true;
      doneButton.style.backgroundColor = "#4ade80"; // green
    } else {
      doneButton.textContent = "Mark as done";
      doneButton.disabled = false;
      doneButton.style.backgroundColor = "#1e3a8a"; // blue
    }
  
    addButton.addEventListener("click", () => {
      const newTask = prompt("Enter assignment details:");
      if (newTask) {
        localStorage.setItem("assignmentTask", newTask);
        localStorage.setItem("assignmentDone", "false");
  
        doneButton.textContent = "Mark as done";
        doneButton.disabled = false;
        doneButton.style.backgroundColor = "#1e3a8a";
  
        alert("Assignment saved!");
      }
    });
  
    doneButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to mark this as done?")) {
        localStorage.setItem("assignmentDone", "true");
        doneButton.textContent = "Marked as done ✅";
        doneButton.disabled = true;
        doneButton.style.backgroundColor = "#4ade80";
      }
    });
  });