
const apiKey = "19e65e22ba329ce6d7c605b8a09dbf46";  // Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const proxy = "https://corsproxy.io/?";
  const url = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "<p>City not found. Please try again.</p>";
    }
  } catch (error) {
    alert("Error fetching weather data. Please try again.");
  }
}
