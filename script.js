let currentCounter = 0;
const counter = document.getElementById("counterText");
let beep = new Audio('assets/sfx/beep.mp3');

function playBeep() {
  const sound = beep.cloneNode();
  sound.play();
}

function updateColor() {
  if (currentCounter <= 10) {
    const light = 100 - (currentCounter * 1.5);
    counter.style.color = `hsl(200, 100%, ${light}%)`;
    return;
  }

  const prcnt = (currentCounter - 11) / (100 - 11);
  const currentHue = 200 - (200 * prcnt);
  const currentLightness = 85 - (35 * prcnt);

  counter.style.color = `hsl(${currentHue}, 100%, ${currentLightness}%)`;
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
