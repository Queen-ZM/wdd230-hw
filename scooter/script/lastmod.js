let d = new Date();

let newUpdate = document.getElementById('footer-sect');
newUpdate.querySelector('#currentYear').innerHTML = d.getFullYear();
newUpdate.querySelector('#currentDateAndTime').innerHTML = document.lastModified;

  // Check if this is the user's first visit
  if (!localStorage.getItem('lastVisit')) {
    // First visit
    document.querySelector('.sidebar').textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisit = new Date(localStorage.getItem('lastVisit'));
    const today = new Date();
    const timeDifference = today - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display different messages based on the time difference
    if (daysDifference === 0) {
      document.querySelector('.sidebar').textContent = "Back so soon! Awesome!";
    } else {
      const message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
      document.querySelector('.sidebar').textContent = message;
    }
  }

  // Store the current visit date in local storage
  localStorage.setItem('lastVisit', new Date().toString());