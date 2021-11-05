const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotBtn = document.querySelectorAll(".circle");

let slideIndex = 1;

const displaySlides = (slideNum) => {
  const getSlides = document.querySelectorAll(".slides");
  const getDots = document.querySelectorAll(".circle");

  if (slideNum > getSlides.length) slideIndex = 1;
  else if (slideNum < 1) slideIndex = getSlides.length;
  [...getSlides].forEach((item, index) => {
    item.style.display = "none";
  });
  [...getDots].forEach((item) => {
    item.classList.remove("active");
  });

  getSlides[slideIndex - 1].setAttribute("style", "display: block");
  getDots[slideIndex - 1].classList.add("active");
};

const slideShow = (num) => {
  displaySlides((slideIndex += num));
};

const changeDisplay = () => {
  slideShow(1);
  runSlides = setTimeout(changeDisplay, 5000);
};

const circleDisplay = (circleNum) => {
  slideShow(circleNum);
};

nextBtn.addEventListener("click", () => {
  slideShow(1);
});

prevBtn.addEventListener("click", () => {
  slideShow(-1);
});

[...dotBtn].forEach((item, index) =>
  item.addEventListener("click", () => {
    circleDisplay(index);
  })
);

displaySlides(slideIndex);
let runSlides = setTimeout(changeDisplay, 5000);
