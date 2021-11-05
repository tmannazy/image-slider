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
  //   if (slideIndex === 1 && slideIndex < 3) {
  //     nextBtn.addEventListener("mousemove", () => {
  //       nextBtn.classList.toggle("change-colors");
  //     });
  //     prevBtn.addEventListener("mousemove", () => {
  //       prevBtn.classList.toggle("change-colors");
  //     });
  //   }

  getSlides[slideIndex - 1].setAttribute("style", "display: block");
};

const slideShow = (num) => {
  displaySlides((slideIndex += num));
};

function changeDisplay() {
  slideShow(1);
  runSlides = setTimeout(changeDisplay, 5000);
}

nextBtn.addEventListener("click", () => {
  slideShow(1);
});
prevBtn.addEventListener("click", () => {
  slideShow(-1);
});

displaySlides(slideIndex);
let runSlides = setTimeout(changeDisplay, 5000);
