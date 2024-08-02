function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "e49t4e467d35faocb8ec3a1644a604fa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayWeatherDetails);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayWeatherDetails(response) {
  //displays current temperature for city
  let tempElement = document.querySelector("#current-temperature");
  let currT = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = currT;

  //displays current weather description for city
  let descriptionElement = document.querySelector("#weather-desc");
  let currentDesc = response.data.condition.description;
  descriptionElement.innerHTML = currentDesc;

  //displays current humidity for city
  let humidityElement = document.querySelector("#humidity-value");
  let currHumidity = response.data.temperature.humidity;
  humidityElement.innerHTML = currHumidity;

  //displays current wind speed for city
  let windElement = document.querySelector("#wind-value");
  let currWind = response.data.wind.speed;
  windElement.innerHTML = currWind;
}
