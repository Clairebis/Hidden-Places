//Video controls
var vid = document.getElementById("snepVid");
vid.controls = true;

//Weather url
const weatherApiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Tebstrup&lang=en&units=metric&appid=4969d2cea5e00ba3e5d664ee8fb7ac33";

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
    result4.innerHTML += data.weather[0].main;
    result5.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" width="50px" height="50px" alt="weather icon">`;
    // result5.innerHTML = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png" width="50px" height="50px" alt="weather icon">';
  });

//modal window - newsletter
const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("subscribeNewsletter");

btn2.onclick = function () {
  modal2.style.display = "block";
};
