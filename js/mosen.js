//Video controls
var vid = document.getElementById("mosenVid");
vid.controls = true;

//Weather url
const weatherApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Hørning&lang=en&units=metric&appid=4969d2cea5e00ba3e5d664ee8fb7ac33";

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
    result5.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" width="50px" height="50px" alt="weather icon">`;
    // result5.innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png" width="50px" height="50px" alt="weather icon">';
  });

//modal window - newsletter & validation
const modal2 = document.getElementById("myModal2");
const subscribeNewsletterBtn = document.getElementById("subscribeNewsletter");

subscribeNewsletterBtn.onclick = function () {
  const newsletterForm = document.getElementById("formNewsletter");

  if (newsletterForm.checkValidity()) {
    modal2.style.display = "block";
  } else {
    newsletterForm.reportValidity();
  }
};

//image gallery
let galleryImages = document.querySelectorAll(".galleryImageContainer");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function (image, index) {
  image.onclick = function () {
    getLatestOpenedImg = index + 1;

    let container = document.body;
    let newImgWindow = document.createElement("div");
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute("class", "img-window");
    newImgWindow.setAttribute("onclick", "closeImg()");

    let newImg = image.firstElementChild.cloneNode();
    newImgWindow.appendChild(newImg);
    newImg.classList.remove("galleryImage");
    newImg.classList.add("popup-img");
    newImg.setAttribute("id", "current-img");

    newImg.onload = function () {
      let newNextBtn = document.createElement("a");
      newNextBtn.innerHTML = '<i class="fas fa-chevron-right next"></i>';
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute("class", "img-btn-next");

      // newNextBtn.setAttribute("onclick", "changeImg(1)"); doesn't work
      newNextBtn.addEventListener("click", () => {
        changeImg(1);
      });

      let newPrevBtn = document.createElement("a");
      newPrevBtn.innerHTML = '<i class="fas fa-chevron-left next"></i>';
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class", "img-btn-prev");

      // newPrevBtn.setAttribute("onclick", "changeImg(0)");  doesn't work
      newPrevBtn.addEventListener("click", () => {
        changeImg(0);
      });
    };
  };
});

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(change) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (change === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (change === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute("src", "../images/Mosen/newMosen" + calcNewImg + ".jpg");
  newImg.setAttribute("class", "popup-img");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;
}

//mapbox

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyZW5kaXBpdHkyMyIsImEiOiJjbDlncWF4bDEwNjMxM29wYnoxaXJqbXhjIn0.09C_PS2VMnvU75LMolE_jg";

const centre = [10.03797, 56.0862];
const mosen = [10.03025, 56.07744];
const station = [10.03778, 56.08222];

const map = new mapboxgl.Map({
  container: "subMapContainer",
  style: "mapbox://styles/serendipity23/clbq8ou66001i15tc6d7sx22h",
  center: station,
  zoom: 12,
});

//map popup text
const popupHørning = new mapboxgl.Popup({ offset: 25 }).setText(
  "Hørning town centre"
);

const popupMosen = new mapboxgl.Popup({ offset: 25 }).setText(
  "Naturcenter Mosehuset"
);

// create DOM elements (div) for the markers
const hørningMarker = document.createElement("div");
hørningMarker.id = "hørningMarker";

const mosenMarker = document.createElement("div");
mosenMarker.id = "mosenMarker";

// create the markers
new mapboxgl.Marker(hørningMarker)
  .setLngLat(centre)
  .setPopup(popupHørning)
  .addTo(map);

new mapboxgl.Marker(mosenMarker)
  .setLngLat(mosen)
  .setPopup(popupMosen)
  .addTo(map);
