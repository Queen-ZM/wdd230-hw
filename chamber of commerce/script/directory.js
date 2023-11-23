
    document.addEventListener('DOMContentLoaded', function () {
      // Fetch JSON data
      fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
          const members = data.members;
          const app = document.getElementById('app');

          // Function to generate member cards
          function generateMemberCard(member) {
            const card = document.createElement('div');
            card.className = 'member-card';
            // Customize card content based on your needs
            card.innerHTML = `
              <h3>${member.name}</h3>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <!-- Add other information as needed -->
            `;
            return card;
          }

          // Function to generate member list items
          function generateMemberListItem(member) {
            const listItem = document.createElement('div');
            listItem.className = 'member-list-item';
            // Customize list item content based on your needs
            listItem.innerHTML = `
              <h3>${member.name}</h3>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <!-- Add other information as needed -->
            `;
            return listItem;
          }

          // Function to toggle between grid and list views
          function toggleView(isGrid) {
            app.innerHTML = ''; // Clear existing content

            members.forEach(member => {
              const element = isGrid ? generateMemberCard(member) : generateMemberListItem(member);
              app.appendChild(element);
            });
          }

          // Initial view (grid)
          toggleView(true);

          // Event listener for toggle button
          const toggleButton = document.createElement('button');
          toggleButton.textContent = 'Toggle View';
          toggleButton.addEventListener('click', function () {
            const isGrid = app.firstChild && app.firstChild.classList.contains('member-card');
            toggleView(!isGrid);
          });

          document.body.insertBefore(toggleButton, app);
        })
        .catch(error => console.error('Error fetching data:', error));
    });

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("app");
    
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
  gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
  });
    
  listbutton.addEventListener("click", showList); // example using defined function
    
  function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  }
 
