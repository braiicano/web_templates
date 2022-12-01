const $ = (selector) => document.querySelector(selector);

function appear(id) {
  let elem = $(id);
  elem.classList.toggle("appear");
}
