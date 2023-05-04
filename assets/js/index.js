const btns = document.querySelectorAll(".types button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((otherBtn) => otherBtn.classList.remove("active"));
    btn.classList.add("active");
  });
});

// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//  }
