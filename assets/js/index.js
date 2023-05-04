const btns = document.querySelectorAll(".types button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((otherBtn) => otherBtn.classList.remove("active"));
    btn.classList.add("active");
  });
});

let iconBtn = document.querySelector(".bg-theme");
let icon = document.querySelector(".bg-theme a i");

iconBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");
  console.log("Toggled .dark-mode class on body element");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun");
    console.log("Changed icon to sun");
  } else {
    icon.classList.remove("fa-sun")
    icon.classList.add("fa-moon");
    console.log("Changed icon to moon");
  }
};
