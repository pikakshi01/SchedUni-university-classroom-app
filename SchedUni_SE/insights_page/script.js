document.addEventListener('DOMContentLoaded', () => {
    const viewFacultyButton = document.getElementById('viewFacultyButton');
    viewFacultyButton.addEventListener('click', () => {
      alert('Faculty details will be displayed here.');
    });
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.dataset.value;
      const progressValue = bar.querySelector('.progress-value');
      progressValue.style.width = `${value}%`;
    });
  });
  