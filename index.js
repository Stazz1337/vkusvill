// switch pics and arrows

const texts = document.querySelectorAll(".parts__subtitle");
const pictures = document.querySelectorAll(".parts__picture-item");
const arrows = document.querySelectorAll(".parts__arrows-item");

texts.forEach((text, index) => {
  text.addEventListener("mouseover", (e) => {
    e.stopPropagation();
    pictures.forEach((picture) => {
      picture.style.display = "none";
      picture.classList.remove("fade-in");

      arrows.forEach((arrow) => {
        arrow.style.visibility = "hidden";
        arrow.classList.remove("fade-in");
      });
    });

    arrows[index].classList.add("fade-in");
    pictures[index].classList.add("fade-in");

    pictures[index].style.display = "block";
    arrows[index].style.visibility = "visible";
  });
});


// show form inputs

const form = document.querySelector(".footer__form");
const checkbox = document.querySelector(
  '.footer__form-checkbox-area input[type="checkbox"]'
);
const formButton = document.querySelector(".footer__form-button");


const showInputs = function () {
  const inputs = document.querySelectorAll(
    ".footer__form-input:nth-of-type(3), .footer__form-input:nth-of-type(2), .footer__form-input_select"
  );
  inputs.forEach((input) => {
    input.classList.remove("hidden");
    input.classList.add("fade-in");
  });
};

form.addEventListener("focusin", function (event) {
  if (event.target !== checkbox && event.target !== formButton) {
    showInputs();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
