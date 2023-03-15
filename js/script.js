let weather = {
  apiKey: "4c480936c88ad3dc5f86413f7154525f",
  fetchWeather: async function (city) {
    try {
      const setHeader = {
        headers: {
          accept: "application/json",
        },
      };
      const call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`,
        setHeader
      );
      return call.json();
    } catch (error) {
      console.log(error);
    }
  },
  displayWeather: async function (city = "karachi") {
    const data = await this.fetchWeather(city);
    const temp = document.getElementById("temp");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const heading = document.getElementById("heading");
    const desImg = document.getElementById("desImg");
    desImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png `;
    temp.innerHTML = Math.round(data.main.temp - 273) + "&#xb0;C";
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = "Humidity : " + data.main.humidity + "%";
    windSpeed.innerHTML = ` Wind Speed :  ${data.wind.speed}km/h`;
    heading.innerHTML = `Weather in ${city}`;
  },
};

const btn = document.getElementById("btn");
const inputField = document.getElementById("inputField");
btn.addEventListener("click", () => {
  weather.displayWeather(inputField.value).then(() => {
    const hidden = document.getElementById("toggleHidden");
    hidden.classList.remove("hidden");
  });
});
inputField.addEventListener("keyup", (e) => {
  if (e.key === "enter" || e.keyCode === 13) {
    weather.displayWeather(inputField.value).then(() => {
      const hidden = document.getElementById("toggleHidden");
      hidden.classList.remove("hidden");
    });
  }
});
