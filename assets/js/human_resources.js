let links = document.querySelectorAll(".content-links a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((otherLink) => otherLink.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

const videobar = document.querySelector("#player");
const videobarImg = document.querySelector(".videobar-img");
const videobarIcon = document.querySelector(".videobar-icon");

videobarIcon.addEventListener("click", function () {
  const video = document.createElement("video");
  video.src = "https://youtu.be/ricGtmUDcLU";
  video.type = "video/mp4";
  video.controls = true;
  video.autoplay = true;
  video.style.width = "100%";
  video.style.height = "400px";

  videobarImg.parentNode.replaceChild(video, videobarImg);
});
