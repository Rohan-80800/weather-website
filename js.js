const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".weather-icon");

const apikey = "533a6765e39708842cb8e1fa60bb3e35";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function cheakwheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    alert("Please Enter valid city Name");
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      wheatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wheatherIcon.src = "/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      wheatherIcon.src = "/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      wheatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wheatherIcon.src = "/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});

searchBtn.addEventListener("click", () => {
  cheakwheather(searchBox.value);
});
