const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=metric&appid=' + apiKey;

window.onload = () => {
  fetchWeather();
  displayNotification('High temperature today: 30°C');
};

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherSection = document.getElementById('weather-section');
    weatherSection.innerHTML = `
      <h2>Current Weather</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;

    // Fetch the forecast for the next day at 3:00 pm
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`);
    const forecastData = await forecastResponse.json();

    const nextDayForecast = forecastData.daily[1];
    const weatherDescription = nextDayForecast.weather[0].description;
    const weatherIcon = nextDayForecast.weather[0].icon;

    weatherSection.innerHTML += `
      <h2>Next Day's Forecast</h2>
      <p>Temperature at 3:00 pm: ${nextDayForecast.temp.day}°C</p>
      <p>Weather: ${weatherDescription}</p>
      <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherDescription}">
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

function openReservationForm() {
  // Add logic to open the reservation form or link to the Reservations page
  // For example: window.location.href = 'reservations.html';
}

function displayNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');

  notificationMessage.textContent = message;
  notification.style.display = 'block';
}

function closeNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'none';
}
