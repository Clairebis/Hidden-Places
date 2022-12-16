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

//mapbox

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyZW5kaXBpdHkyMyIsImEiOiJjbDlncWF4bDEwNjMxM29wYnoxaXJqbXhjIn0.09C_PS2VMnvU75LMolE_jg";

const centre = [10.03797, 56.0862];
const jeksen = [9.98345, 56.10725];
const dørup = [10.021825, 56.097912];

const map = new mapboxgl.Map({
  container: "subMapContainer",
  style: "mapbox://styles/serendipity23/clbq8ou66001i15tc6d7sx22h",
  center: dørup,
  zoom: 10,
});

//map popup text
const popupHørning = new mapboxgl.Popup({ offset: 25 }).setText(
  "Hørning town centre"
);

const popupJeksen = new mapboxgl.Popup({ offset: 25 }).setText("Jeksen Dalen");

// create DOM elements (div) for the markers
const hørningMarker = document.createElement("div");
hørningMarker.id = "hørningMarker";

const jeksenMarker = document.createElement("div");
jeksenMarker.id = "jeksenMarker";

// create the markers
new mapboxgl.Marker(hørningMarker)
  .setLngLat(centre)
  .setPopup(popupHørning)
  .addTo(map);

new mapboxgl.Marker(jeksenMarker)
  .setLngLat(jeksen)
  .setPopup(popupJeksen)
  .addTo(map);
