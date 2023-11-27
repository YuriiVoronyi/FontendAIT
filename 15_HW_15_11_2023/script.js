const API_KEY = "fa1e72ff893c6a4a5ed4077327e855b4";

const input = document.getElementById("locationInput");
const button = document.getElementById("getWeatherButton");
const info = document.getElementById("weatherContainer");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
// https://openweathermap.org/img/wn/04n@2x.png

button.onclick = async() => {
  const cityName = input.value.trim();

  if (cityName) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=de&units=metric`);
      const weatherInfo = await response.json();
      input.value = '';
      displayWeather(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  }
};

function displayWeather(data) {
    const {
      name,
      clouds: { all },
      sys: { country, sunrise, sunset },
      visibility,
      coord: { lon, lat },
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      weather: [{ description, icon }],
      wind: { speed }
    } = data;

    info.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">${name}, ${country}</h2>
        <p>Temperature: ${temp}°C, Feels like: ${feels_like}°C</p>
        <p>Max temperature: ${temp_max}°C, Min temperature: ${temp_min}°C</p>
        <p>Description: ${description}, clouds: ${all}%, pressure: ${pressure}, humidity: ${humidity}</p>
        <p>Sunrise: ${sunrise}, sunset: ${sunset}</p>
        <p>Coord: ${lon}, ${lat}</p>
        <p>Wind speed: ${speed}m/s</p>
        <p>Visibility: ${visibility / 1000}km</p>
    `;
}