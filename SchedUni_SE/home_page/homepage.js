// homepage.js

// Mapping search keywords to pages
const searchMappings = {
    "software engineering": "software_engineering.html",
    "machine learning": "machine_learning.html",
    "project 2": "project2.html",
    "seminar case study": "seminar_case_study.html",
    "mobile app development": "mobile_app_development.html",
    "design thinking": "design_thinking.html"
};

// When the form is submitted
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing page

    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchMappings[query]) {
        window.location.href = searchMappings[query]; // Go to the mapped page
    } else {
        alert("Course not found!");
    }
});
