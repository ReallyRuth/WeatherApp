function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "7ecd2a71ced362676a580794d868a980";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
