let currentCounter = 0;
const counter = document.getElementById("counterText");
let beep = new Audio('assets/sfx/beep.mp3');

function playBeep() {
  const sound = beep.cloneNode();
  sound.play();
}

function countUp(event) {
  if (currentCounter < 100) {
    if (event.key === "ArrowUp") {
      currentCounter++;
      counter.innerHTML = currentCounter + "%";
      console.log("+1");
      playBeep();
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
    }
  }
}

document.addEventListener("keydown", countUp)
document.addEventListener("keydown", countDown)
