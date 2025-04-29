let courses = JSON.parse(localStorage.getItem("courses"));

if (!courses || courses.length === 0) {
  courses = [
    { name: "Project 2", teacher: "Kiran Khattar", day: "Wednesday", due: "Friday", place: "NB 4th Floor", color: "green" },
    { name: "Machine Learning", teacher: "Anantha Rao", day: "Monday & Wednesday", due: "Wednesday", place: "GA 203", color: "blue" },
    { name: "Software Engineering", teacher: "Gautam Gupta", day: "Saturday & Monday", due: "Tomorrow", place: "GA 102", color: "red" },
    { name: "Seminar Case Study", teacher: "Dr. Kiran Khattar", day: "Thursday", due: "12 March", place: "NB 105", color: "orange" },
    { name: "Mobile App Development", teacher: "Gautam Gupta", day: "Tuesday & Thursday", due: "Friday", place: "NB 211", color: "yellow" },
    { name: "Design Thinking", teacher: "Avijit Chakravarty", day: "Wednesday", due: "Wednesday", place: "NB 211", color: "cyan" }
  ];
  localStorage.setItem("courses", JSON.stringify(courses));
}

let editIndex = null;

function displayCourses() {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";
  courses.forEach((course, index) => {
    container.innerHTML += `
      <div class="card ${course.color}">
        <h4>${course.name}</h4>
        <p>👤 <button class="teacher-name" onclick="openCourse('${course.teacher}', '${course.name}')">${course.teacher}</button></p> <!-- Teacher's name as a button -->
        <p>🗓️ ${course.day}</p>
        <p>⏰ Due ${course.due}</p>
        <p>📍 ${course.place}</p>
        <div class="crud-buttons">
          <button onclick="editCourse(${index})">✏️ Edit</button>
          <button onclick="deleteCourse(${index})">🗑️ Delete</button>
        </div>
      </div>
    `;
  });
}

function openCourse(teacher, courseName) {
  // Check if the clicked course is "Software Engineering" with teacher "Nishtha Phutela"
  if (courseName === "Software Engineering" && teacher === "Gautam Gupta") {
    window.location.href = "se.html";  // Redirect to se.html
  } else {
    alert(`No detailed page for ${courseName}`);
  }
}

function openForm() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("courseForm").style.display = "block";
}

function closeForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("courseForm").style.display = "none";
  document.getElementById("form").reset();
  editIndex = null;
}

function showMessage(text) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerText = text;
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 2000);
}

function saveCourse() {
  const name = document.getElementById("courseName").value;
  const teacher = document.getElementById("teacherName").value;
  const day = document.getElementById("courseDay").value;
  const due = document.getElementById("dueDate").value;
  const place = document.getElementById("location").value;
  const color = document.getElementById("color").value;

  const newCourse = { name, teacher, day, due, place, color };

  if (editIndex !== null) {
    courses[editIndex] = newCourse;
    showMessage("Course updated successfully!");
  } else {
    courses.push(newCourse);
    showMessage("Course added successfully!");
  }

  localStorage.setItem("courses", JSON.stringify(courses));
  displayCourses();
  closeForm();
}

function deleteCourse(index) {
  if (confirm("Are you sure you want to delete this course?")) {
    courses.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses();
    showMessage("Course deleted successfully!");
  }
}

function editCourse(index) {
  openForm();
  const course = courses[index];
  document.getElementById("courseName").value = course.name;
  document.getElementById("teacherName").value = course.teacher;
  document.getElementById("courseDay").value = course.day;
  document.getElementById("dueDate").value = course.due;
  document.getElementById("location").value = course.place;
  document.getElementById("color").value = course.color;
  editIndex = index;
}

function searchCourse() {
  const input = document.getElementById("searchBox").value.toLowerCase().trim();
  if (input === "software engineering") {
    window.location.href = "se.html";
  } else {
    alert("Course not found!");
  }
}

window.onload = displayCourses;
