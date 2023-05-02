const dots = document.querySelectorAll(".dot");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.classList.remove("active-dot"));
    dot.classList.add("active-dot");

    if (index === 0) {
      box1.classList.remove("d-none");
      box2.classList.add("d-none");
    } else {
      box1.classList.add("d-none");
      box2.classList.remove("d-none");
    }
  });
});
