document.addEventListener("DOMContentLoaded", () => {
    loadAnnouncements();
});

function goHome() {
  window.location.href = "homepage.html";  // Change this to your homepage path
}

function addAnnouncement() {
  const title = document.getElementById("announcement-title").value.trim();
  const content = document.getElementById("announcement-content").value.trim();

  if (title && content) {
    const announcement = {
      title,
      content,
      timestamp: new Date().toLocaleString()
    };

    let announcements = JSON.parse(localStorage.getItem("announcements")) || [];
    announcements.unshift(announcement);
    localStorage.setItem("announcements", JSON.stringify(announcements));

    document.getElementById("announcement-title").value = "";
    document.getElementById("announcement-content").value = "";
    loadAnnouncements();
  } else {
    alert("Please fill in both fields.");
  }
}

function loadAnnouncements() {
  const list = document.getElementById("announcement-list");
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  const html = announcements.map(ann => `
    <div class="announcement">
      <h3>${ann.title}</h3>
      <p>${ann.content}</p>
      <small>${ann.timestamp}</small>
    </div>
  `).join("");

  list.innerHTML = '<h2>Latest Announcements</h2>' + html;
}
