let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();

let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let h2 = document.querySelector("h2");

h2.innerHTML = `${day}, ${hours}:${minutes}`;

let apiKey = "7ecd2a71ced362676a580794d868a980";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°`;
}

function windSpeed(response) {
  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `${wind}km/h`;
}

axios.get(apiUrl).then(showTemperature);
