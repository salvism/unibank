const slides = [
  {
    image: "/assets/img/slider_1.png",
    header: "Get a loan instantly!",
    desc: "Just choose UCard at UBank mobile application and get a money on the card in seconds!",
    showBtn: true,
  },
  {
    image: "/assets/img/slider_2.png",
    header: "Canceled!",
    desc: "There is no more need for 200 AZN turnover to earn 5% cashback at petrol stations, cafes-restaurants and markets around the world!",
    showBtn: true,
  },
  {
    image: "/assets/img/slider_3.png",
    header: "Topla!",
    desc: "Make your dreams come true! Name your goal and start to save money!",
    showBtn: true,
  },
  {
    image: "/assets/img/slider_4.png",
    header: "Your card, your art!",
    desc: "Log into UBank, change Unibank cards in Apple Wallet / Google Wallet™ to the desired skin and be different from everyone!",
    showBtn: false,
  },
  {
    image: "/assets/img/slider_5.gif",
    header: "Card to Card is free!",
    desc: "Make unlimited money transfers to Unibank cards and up to 2000 AZN to local bank cards without fee!",
    showBtn: false,
  },
];

let currentSlide = 0;

const image = document.querySelector(".banner-left img");
const dotsContainer = document.querySelector(".dots-container");
const bannerHeader = document.querySelector(".banner-header");
const bannerDesc = document.querySelector(".banner-desc");
const bannerBtn = document.querySelector(".banner-btn");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide() {
  const { image: imgSrc, header, desc, showBtn } = slides[currentSlide];

  image.src = imgSrc;
  bannerHeader.textContent = header;
  bannerDesc.textContent = desc;

  if (showBtn) {
    bannerBtn.classList.remove("d-none");
  } else {
    bannerBtn.classList.add("d-none");
  }

  setActiveDot();
}

function showNextSlide() {
  if (currentSlide === slides.length - 1) {
    return;
  }
  currentSlide++;
  showSlide();
}

function showPrevSlide() {
  if (currentSlide === 0) {
    return;
  }
  currentSlide--;
  showSlide();
}

function createDot(index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide();
  });
  return dot;
}

function setActiveDot() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = createDot(i);
    dotsContainer.appendChild(dot);
  }
}

nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

createDots();
showSlide();

