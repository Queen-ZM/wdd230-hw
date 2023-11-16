// select HTML elements in the document

//const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.

//const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lat=${lat}&lon=${lon}&appid=${apiID}&units=imperial`;
//;

// Use the Current Weather API named 'weather'.
// Start a query string with the "?" character as shown in the examples.
// Use a & between each key/value pair in the query string in these next steps.
// Specify the latitude and longitude of Trier, Germany using the information you have gathered and the examples provided.
// Set the units to imperial: "units=imperial"
// Provide your API key: "appid=[enter your key here]"

//const queryParams = '?q=Trier,Germany&units=imperial&appid=[5456abcd3c96c6b5d54fed653469bfa1]';
//const apiUrl = `${url}${queryParams}`;

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
// Store the results of the URL fetch into a variable named "response".
// If the response is OK, then store the result of response.json() conversion in a variable named "data", and
// Output the results to the console for testing.
// Else, throw an Error using the response.text().
// Finish off the catch block by outputting any try error to the console.

//async function apiFetch() {
  //try {
    //const response = await fetch(apiUrl);
    //if (response.ok) {
      //const data = await response.json();
      //console.log(data); // testing only
      //displayResults(data); 
   // } else {
      //throw Error(await response.text());
    //}
  //} catch (error) {
    //console.log(error);
 // }
//}

// Invoke the apiFetch() function somewhere in your script.

//apiFetch();

//Build the displayResults function to output to the given HTML document.

//function displayResults(data) {
  //currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  //const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  //let desc = data.weather[0].description;
  //weatherIcon.setAttribute('src', iconsrc);
  //weatherIcon.setAttribute('alt', desc);
  //captionDesc.textContent = `${desc}`;
//}

const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#captionDesc');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=49.7561&lon=6.6415&units=imperial&appid=5456abcd3c96c6b5d54fed653469bfa1';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // Call displayResults function with the fetched data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
