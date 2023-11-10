
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
 
