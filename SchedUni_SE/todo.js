// Redirect Home
document.getElementById('homeButton').addEventListener('click', function() {
  window.location.href = "home.html"; // your actual homepage
});

// Calendar Data
let events = JSON.parse(localStorage.getItem('scheduniEvents')) || {};

// DOM elements
const calendarBody = document.getElementById('calendar-body');
const taskModal = document.getElementById('taskModal');
const modalDate = document.getElementById('modalDate');
const taskInput = document.getElementById('taskInput');
const saveTaskBtn = document.getElementById('saveTask');
const closeModalBtn = document.getElementById('closeModal');

let selectedDay = null;

// Load Calendar
function loadCalendar() {
  const daysInMonth = 28;
  const startDay = 5; // 1st Feb 2025 starts at Saturday (index 5)

  let html = '<tr>';
  for (let i = 0; i < startDay; i++) {
    html += '<td></td>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if ((startDay + day - 1) % 7 === 0) {
      html += '</tr><tr>';
    }
    const hasEvent = events[day];
    html += `<td class="${hasEvent ? 'event' : ''}" data-day="${day}">${day}</td>`;
  }
  html += '</tr>';
  calendarBody.innerHTML = html;

  // Add click events
  document.querySelectorAll('td[data-day]').forEach(td => {
    td.addEventListener('click', openModal);
  });
}

// Open Modal
function openModal(e) {
  selectedDay = e.target.getAttribute('data-day');
  modalDate.textContent = `Add/Edit Task for February ${selectedDay}, 2025`;
  taskInput.value = events[selectedDay] || '';
  taskModal.classList.remove('hidden');
}

// Close Modal
closeModalBtn.addEventListener('click', function() {
  taskModal.classList.add('hidden');
});

// Save Task
saveTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    events[selectedDay] = taskText;
  } else {
    delete events[selectedDay];
  }
  localStorage.setItem('scheduniEvents', JSON.stringify(events));
  taskModal.classList.add('hidden');
  loadCalendar();
});

loadCalendar();



