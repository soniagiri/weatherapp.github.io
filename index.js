
const weatherApi = {
  key: "490b42790d33b3f5fa86380560426ae9",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");

// Event Listener
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

// ?Get Weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

// show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerHTML = `${weather.name},  ${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let weatherType = document.getElementById("weather");
  weatherType.innerHTML = `${weather.weather[0].main}`;

  let icon = document.getElementById("icon");
  icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;




  let date = document.getElementById("date");
  let today = new Date();
  let f = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  });
  date.innerHTML = f.format(today);

  let bg = document.querySelector(".bg");
  bg.style.display="block"



  if (weatherType.textContent == "Clouds") {
    document.querySelector(".bg").setAttribute("src", "clip/cloudy.mp4");
  } else if (weatherType.textContent == "Rain") {
    document.querySelector(".bg").setAttribute("src", "clip/rain.mp4");
  } else if (weatherType.textContent == "Clear" || weatherType.textContent == "Haze" || weatherType.textContent == "Mist") {
    document.querySelector(".bg").setAttribute("src", "clip/Pexels Videos 4191.mp4");
    // document.querySelector(".weather-body").style.color = "black";
    // document.querySelector(".weather-body").style.textShadow =
    //   "0px 0px #000000";
  } else if (weatherType.textContent == "Thunder") {
    document.querySelector(".bg").setAttribute("src", "clip/thunder.mp4");

  } else if (weatherType.textContent == "Fog") {
    document.querySelector(".bg").setAttribute("src", "clip/fog.mp4");
  } 
  else if (weatherType.textContent == "Snow") {
      document.querySelector(".bg").setAttribute("src", "clip/snow.mp4");
      document.querySelector(".weather-body").style.textShadow =
      "0px 0px #000000";
  }
}
