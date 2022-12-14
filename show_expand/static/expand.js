const $ = (selector) => document.querySelectorAll(selector);

let listItems = $(".expand-item");
let btns = $("button");
let lenListItems = listItems.length - 1;
var active = 0;


listItems.forEach((selectedItem) =>
  selectedItem.addEventListener("click", (event) => {
    selectedItem.classList.toggle("expand--active");
    if (selectedItem.classList.value.includes("expand--active")) {
      listItems.forEach(
        (_selectedItem) => (_selectedItem.style.display = "none")
      );
      selectedItem.animate(
        [{ width: "var(--width)" }, { width: "calc(var(--width) * 2)" }],
        {
          duration: 120,
          interations: 1,
        }
      );
    } else {
      selectedItem.animate(
        [{ width: "calc(var(--width) *2)" }, { width: "var(--width)" }],
        {
          duration: 120,
          interations: 1,
        }
      );
      listItems.forEach(
        (_selectedItem) => (_selectedItem.style.display = "initial")
      );
    }
  })
);

btns.forEach((selectedBtn) =>
  selectedBtn.addEventListener("click", (event) => {
    let { id } = selectedBtn;
    active = id.includes("prev") ? active - 1 : active + 1;
    if (active > lenListItems) active = 0;
    if (active < 0) active = lenListItems;
    listItems.forEach((selectedItem) => {
      selectedItem.classList.remove("--active");
    });
    listItems[active].classList.add("--active");
    listItems[active].style.transition='.5s';
  })
);
