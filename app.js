import setBackground from "./background.js";

// vars
// search box
const searchDiv = document.querySelector('.search')
const searchInput = document.querySelector(".search-input");
const cleanBtn = document.querySelector('.clean-btn')
// titles
const cityNameTitle = document.querySelector(".city-name");
const weatherStatusTitle = document.querySelector(".weather-status");
const tempTitle = document.querySelector(".main-temp");
const windTitle = document.querySelector(".wind-title")
const humidityTitle =document.querySelector(".humidity-title")
const weatherIcon = document.querySelector('.weather-icon')
const apiKey = "your openweather api key";

// get lat and lon
const getLocation = async (name = "yeruham", key) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${key}`
  );
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
};

// get weather data
const getWeather = async (lat, lon, key) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );
  return response.json();
};

const setIcon = (data) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.src = iconUrl
};

// set the data in DOM
const setData = (data) => {
  console.log(data);
  setBackground(data);
  setIcon(data)
  tempTitle.innerHTML = parseInt(data.main.temp) + "c" ;
  cityNameTitle.innerHTML = data.name;
  weatherStatusTitle.innerHTML = data.weather[0].description;
  windTitle.innerHTML = parseInt(data.wind.speed) + "km/h";
  humidityTitle.innerHTML = data.main.humidity + "%";
};

const run = async() => {
    const city = searchInput.value;
  const location = await getLocation(city || "yeruham", apiKey);
  const weather = await getWeather(location.lat, location.lon, apiKey);
  setData(weather);
}

// search input event
searchInput.addEventListener("input",()=>{run()} );

// button animation
document.querySelector('.search-btn').addEventListener("click", ()=> {
    searchDiv.classList.toggle('active')
    searchInput.classList.toggle('hide')
    setTimeout(() => {
        cleanBtn.classList.toggle('hide')
    }, 400);
})

cleanBtn.addEventListener('click', ()=> {
    searchInput.value = ""
})

run()