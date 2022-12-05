
let writeEffect = function typed(element, text, time = 5) {
  time = time * 10;
  var index = 0;
  var letterIndex = 0;
  var timeOut = 0;
  var full = false;

  const writeText = function () {
    if (letterIndex < text[index].length && !full) {
      element.innerHTML =
        element.innerHTML.split(["|"])[0] + text[index][letterIndex] + "|";
      letterIndex++;
    } else {
      full = true;
      if (timeOut >= time / 2) {
        element.innerHTML =
          element.innerHTML
            .split(["|"])[0]
            .substring("", element.innerHTML.split(["|"])[0].length - 1) + "|";
        letterIndex--;
        if (letterIndex == 0 && full) {
          full = false;
          index = index < text.length - 1 ? index + 1 : 0;
          timeOut = 0;
        }
      } else {
        timeOut++;
      }
    }
  };
  const interval = setInterval(writeText, time);
};

// function writeEffect need 3 params:
// 1: it is the container element (div,h1,h2,p,etc...)
// 2: text list.
// 3: this is the time to write (it's in seconds) default time=2 (seconds)

export {writeEffect}