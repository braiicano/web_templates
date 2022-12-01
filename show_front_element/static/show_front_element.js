const $ = (selector) => document.querySelector(selector);
let element = $(".front");

function toggleFront(classAction) {
  element.style.visibility='initial';
  if (classAction === "open") {
    element.classList.remove("front_close");
    element.classList.add("front_open");
  } else if (classAction === "close") {
    element.classList.remove("front_open");
    element.classList.add("front_close");
  }
}
