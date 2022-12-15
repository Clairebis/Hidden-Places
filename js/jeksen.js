//Video controls
var vid = document.getElementById("jeksenVid");
vid.controls = true;

//Weather url
const weatherApiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Jeksen&lang=en&units=metric&appid=4969d2cea5e00ba3e5d664ee8fb7ac33";

// fetch weather sample
fetch(weatherApiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    result.innerHTML += data.main.temp;
    result2.innerHTML += data.main.feels_like;
    result3.innerHTML += data.wind.speed;
    result4.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" width="50px" height="50px" alt="">`;
    // result4.innerHTML = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png" width="50px" height="50px" alt="">';
  });
