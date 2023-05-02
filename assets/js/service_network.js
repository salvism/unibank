let links = document.querySelectorAll(".content-links a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((otherLink) => otherLink.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});
