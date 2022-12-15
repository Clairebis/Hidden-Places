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
      newNextBtn.setAttribute("onclick", "changeImg(1)");

      let newPrevBtn = document.createElement("a");
      newPrevBtn.innerHTML = '<i class="fas fa-chevron-left next"></i>';
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class", "img-btn-prev");
      newPrevBtn.setAttribute("onclick", "changeImg(0)");
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

  let getImgWindow = document.querySelector("img-window");
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

  newImg.setAttribute("src", "../images/Snep/Snep" + calcNewImg + ".jpg");
  newImg.setAttribute("class", "popup-img");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;
}
