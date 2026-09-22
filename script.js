let currentCounter = 0;
const counter = document.getElementById("counterText");
let beep = new Audio('assets/sfx/beep.mp3');

function playBeep() {
  const sound = beep.cloneNode();
  sound.play();
}

function updateColor() {
  if (currentCounter <= 9) {
    counter.style.color = "white";
  } else if (currentCounter <= 19) {
    counter.style.color = "lightblue";
  } else if (currentCounter <= 29) {
    counter.style.color = "dodgerblue";
  } else if (currentCounter <= 39) {
    counter.style.color = "deepskyblue";
  } else if (currentCounter <= 49) {
    counter.style.color = "turquoise";
  } else if (currentCounter <= 59) {
    counter.style.color = "lime";
  } else if (currentCounter <= 69) {
    counter.style.color = "greenyellow";
  } else if (currentCounter <= 79) {
    counter.style.color = "yellow";
  } else if (currentCounter <= 89) {
    counter.style.color = "gold";
  } else if (currentCounter <= 94) {
    counter.style.color = "orange";
  } else if (currentCounter <= 99) {
    counter.style.color = "darkorange";
  } else {
    counter.style.color = "red";
  }
}

function countUp(event) {
  if (currentCounter < 100) {
    if (event.key === "ArrowUp") {
      currentCounter++;
      counter.innerHTML = currentCounter + "%";
      console.log("+1");
      playBeep();
      updateColor();
    }
  }
}

function countDown(event) {
  if (currentCounter > 0) {
    if (event.key === "ArrowDown") {
      currentCounter--;
      counter.innerHTML = currentCounter + "%";
      console.log("-1");
      playBeep();
      updateColor();
    }
  }
}

document.addEventListener("keydown", countUp)
document.addEventListener("keydown", countDown)
