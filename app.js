// VARIABLES
let allButtons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let prob = "";
// MAIN
allButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.innerHTML !== "=" && btn.innerHTML !== "C") {
      screen.innerHTML += btn.innerHTML;
      prob = screen.innerHTML;
      console.log(prob);
    }
    if (btn.innerHTML === "=") {
      doTheMath();
    }
    if (btn.innerHTML === "C") {
      clear();
    }
  });
});

// FUNCTIONS
function clear() {
  screen.innerHTML = "";
  prob = "";
}

function doTheMath() {
  try {
    console.log(eval(prob));
    prob = eval(prob);
    screen.innerHTML = prob;
  } catch {
    screen.innerHTML = "err";
    prob = "";
  }
  if (screen.innerHTML == "err" || screen.innerHTML == "undefined") {
    screen.innerHTML = "";
  }
}
