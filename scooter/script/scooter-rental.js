document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch("data/scooter-rentals.json")
      .then(response => response.json())
      .then(data => {
        // Access the rentals array
        const rentals = data.rentals;
  
        // Get the table element
        const table = document.getElementById("rentals-table");
  
        // Create table header
        const headerRow1 = table.insertRow(0);
        const headerCell1 = headerRow1.insertCell(0);
        headerCell1.textContent = "Max Rental Pricing";
        headerCell1.colSpan = 6;
  
        const headerRow2 = table.insertRow(1);
        Object.keys(rentals[0]).forEach(key => {
          const th = document.createElement("th");
          th.textContent = key;
          headerRow2.appendChild(th);
        });
  
        // Create table rows
        rentals.forEach(rental => {
          const row = table.insertRow();
          Object.values(rental).forEach((value, index) => {
            const cell = row.insertCell();
            // Check if the value is a number (assumption for currency formatting)
            const formattedValue = typeof value === 'number' ? `$${value.toFixed(2)}` : value;
            cell.textContent = formattedValue;
          });
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  });
  