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

const corpSlides = [
  {
    image: "/assets/img/corp-slider-1.png",
    header: "Online salary project",
    desc: "Every businessman can login to Internet Banking with Asan Imza, join to salary project and order a salary card.",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-2.png",
    header: "Online Account open",
    desc: "Business owners can open account in any currency at any time of the day without going to the bank. Account data is immediately sent to the e-mail address of the account holder",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-3.png",
    header: "Production loans",
    desc: "Get production credits from Unibank with individual payment schedule and under collateral for equipment!",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-4.png",
    header: "Online overdarft",
    desc: "Get business loans from Unibank via İnternet-Banking with just one touch, without collateral and online within 15 minutes!",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-5.png",
    header: "Overdraft from the turnover of funds",
    desc: "Enables the customer to perform transactions in the amount exceeding the current account balance. These transactions are enabled through overdraft limit.",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-6.png",
    header: "Agro-Loan",
    desc: "Borrow an agricultural loan of up to AZN 300 000 with a 3% discount and expand your business! The Unibank agro-loans have the grace periods of up to 6 months. If you borrow more than AZN 20 000 you get a 50% discount on cash withdrawals and money transfers. ",
    showBtn: true,
  },
  {
    image: "/assets/img/corp-slider-7.png",
    header: "Overdraft on acquiring",
    desc: "Overdraft enables the customer to perform transactions in the amount exceeding the current account balance through the overdraft limit. ",
    showBtn: true,
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

const body = document.querySelector("body");
const slideIdentifier = body.dataset.slides;

const allSlides = slideIdentifier === "slides" ? slides : corpSlides;

function showSlide() {
  const { image: imgSrc, header, desc, showBtn } = allSlides[currentSlide];

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
  for (let i = 0; i < allSlides.length; i++) {
    const dot = createDot(i);
    dotsContainer.appendChild(dot);
  }
}

nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

createDots();
showSlide();
