const btnClose = document.querySelector("#close");
const imgGif = document.querySelector("#gif");
const btnRotate = document.querySelector("#rotate");
const imgStatic = document.querySelector("#static-image");

btnClose.style.display = "none";
imgGif.style.display = "none";

btnRotate.addEventListener("click", function () {
  btnRotate.style.display = "none";
  imgStatic.style.display = "none";
  btnClose.style.display = "block";
  imgGif.style.display = "block";
});

btnClose.addEventListener("click", function () {
  btnClose.style.display = "none";
  imgGif.style.display = "none";
  btnRotate.style.display = "block";
  imgStatic.style.display = "block";
});
