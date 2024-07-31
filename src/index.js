//Feature 1 -- Display current time ("Tuesday 16:00")
function displayCurrent() {
  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];

  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();

  let displayCurrentInfo = document.querySelector(".currentTimeInfo");

  displayCurrentInfo.innerHTML = `${day} ${hour}:${minute}`;
}

let displayCurrentTime = document.querySelector(".current-weather");

//Feature 2 -- Add a search engine: a search bar with a button.
//When searching for a city, display the city name on the page after the user submits the form.

function searchNewCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  if (cityInput.value) {
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${cityInput.value}`;
  }

  displayCurrent();
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", searchNewCity);
