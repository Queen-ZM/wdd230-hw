// JavaScript to add content dynamically
//window.addEventListener('load', function () {
    //const leftGrid = document.getElementById('left-grid');
    //const rightGrid = document.getElementById('right-grid');

    // Add content to the left div
    //const leftContent = document.createElement('div');
    //leftContent.innerText = 'Left Sidebar Content';
    //leftGrid.appendChild(leftContent);

    // Add content to the right div
    //const rightContent = document.createElement('div');
    //rightContent.innerText = 'Right Sidebar Content';
   // rightGrid.appendChild(rightContent);
//});
// JavaScript to add images dynamically
//window.addEventListener('load', function () {
    //const grid = document.getElementById('image-grid');
    //const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

   // images.forEach(imageSrc => {
       // const gridItem = document.createElement('div');
       // gridItem.classList.add('grid-item');
       // const image = document.createElement('img');
       // image.src = imageSrc;
       // image.alt = 'Image';
      //  gridItem.appendChild(image);
       // grid.appendChild(gridItem);
   // });
//});


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


