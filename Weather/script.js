//variable declaration

let apiKey = "3e9d0ba5d8ca6bd1b1b1c47ef745374d";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

//main function
async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //checking city name

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    //selecting city

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    } // else if (data.weather[0].main === "Thunderstorm") {
    else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
    } // else if (data.weather[0].main === "Thunderstorm") {
    else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } // else if (data.weather[0].main === "Thunderstorm") {
    //     weatherIcon.src = "images/thunderstorm.png";
    //   }
    console.log(data);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
