// JavaScript to add content dynamically
window.addEventListener('load', function () {
    const leftGrid = document.getElementById('left-grid');
    const rightGrid = document.getElementById('right-grid');

    // Add content to the left div
    const leftContent = document.createElement('div');
    leftContent.innerText = 'Left Sidebar Content';
    leftGrid.appendChild(leftContent);

    // Add content to the right div
    const rightContent = document.createElement('div');
    rightContent.innerText = 'Right Sidebar Content';
    rightGrid.appendChild(rightContent);
});
// JavaScript to add images dynamically
window.addEventListener('load', function () {
    const grid = document.getElementById('image-grid');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

    images.forEach(imageSrc => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Image';
        gridItem.appendChild(image);
        grid.appendChild(gridItem);
    });
});
