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
const snep = [9.87279, 55.98363];
const jeksen = [9.98345, 56.10725];
const mosen = [10.03025, 56.07744];
const skanderborg = [9.93267, 56.0439];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/serendipity23/clbq8ou66001i15tc6d7sx22h",
  center: skanderborg,
  zoom: 10,
});

//map popup text
const popupHørning = new mapboxgl.Popup({ offset: 25 }).setText(
  "Hørning town centre"
);

const popupSnep = new mapboxgl.Popup({ offset: 25 }).setText(
  "Snepstrup Præstegård"
);

const popupJeksen = new mapboxgl.Popup({ offset: 25 }).setText("Jeksen Dalen");

const popupMosen = new mapboxgl.Popup({ offset: 25 }).setText(
  "Naturcenter Mosehuset"
);

// create DOM elements (div) for the markers
const hørningMarker = document.createElement("div");
hørningMarker.id = "hørningMarker";

const snepMarker = document.createElement("div");
snepMarker.id = "snepMarker";

const jeksenMarker = document.createElement("div");
jeksenMarker.id = "jeksenMarker";

const mosenMarker = document.createElement("div");
mosenMarker.id = "mosenMarker";

// create the markers
new mapboxgl.Marker(hørningMarker)
  .setLngLat(centre)
  .setPopup(popupHørning)
  .addTo(map);

new mapboxgl.Marker(snepMarker).setLngLat(snep).setPopup(popupSnep).addTo(map);

new mapboxgl.Marker(jeksenMarker)
  .setLngLat(jeksen)
  .setPopup(popupJeksen)
  .addTo(map);

new mapboxgl.Marker(mosenMarker)
  .setLngLat(mosen)
  .setPopup(popupMosen)
  .addTo(map);
