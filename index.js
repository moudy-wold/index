let card = document.querySelectorAll(".card");
let text_Card = document.querySelectorAll(".text-card");
let red = document.querySelectorAll(".red");
let orange = document.querySelectorAll(".orange");
let green = document.querySelectorAll(".green");
let lail = document.querySelectorAll(".lail");

text_Card.forEach((item, index) => {
  if (index % 2 == 0) {
    item.style.top = "-100%";
  } else {
    item.style.bottom = "-100%";
  }
});
card.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    if (index % 2 == 0) {
      text_Card[index].style.top = 0;
    } else {
      text_Card[index].style.bottom = 0;
    }
  });
  item.addEventListener("mouseout", () => {
    if (index % 2 == 0) {
      text_Card[index].style.top = "-100%";
    } else {
      text_Card[index].style.bottom = "-100%";
    }
  });
});

red.forEach((item, index) => {
  item.addEventListener("click", function () {
    card.forEach((it, ind) => {
      if (ind != index) {
        if (it.style.background != "red" || it.style.background != "white") {
          it.style.background = "white";
        }
      }
    });
    console.log(card[index]);
    if (card[index].style.background == "red") {
      card[index].style.background = "white";
    } else {
      card[index].style.background = "red";
    }
  });
});
orange.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (card[index].style.background == "rgb(253, 163, 66)") {
      card[index].style.background = "white";
    } else {
      card[index].style.background = "rgb(253, 163, 66)";
    }
  });
});
green.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (card[index].style.background == "rgb(116, 220, 98)") {
      card[index].style.background = "white";
    } else {
      card[index].style.background = "rgb(116 220 98)";
    }
  });
});
lail.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (card[index].style.background == "rgb(187, 81, 243)") {
      card[index].style.background = "white";
    } else {
      card[index].style.background = "rgb(187, 81, 243)";
    }
  });
});

let totalTime = 20 * 60;
let timerInterval;
let paused = false;
let started = false;

function startTimer() {
  if (!started) {
    started = true;
    timerInterval = setInterval(() => {
      if (!paused) {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        document.getElementById("timer").textContent = `${String(
          minutes
        ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

        if (totalTime <= 0) {
          clearInterval(timerInterval);
          alert("الوقت انتهى!"); // مثال على تنفيذ أمر ما
        }

        totalTime--;
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  totalTime = 20 * 60;
  document.getElementById("timer").textContent = "20:00";
  paused = false;
  started = false;
}

function pauseTimer() {
  paused = true;
}

function resumeTimer() {
  paused = false;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resumeBtn").addEventListener("click", resumeTimer);

let timerElement250 = document.getElementById("timer250");
let startBtn250 = document.getElementById("startBtn250");
let resetBtn250 = document.getElementById("resetBtn250");
let pauseBtn250 = document.getElementById("pauseBtn250");
let resumeBtn250 = document.getElementById("resumeBtn250");

let timerValue = 250;
let intervalId;
let isPaused = false;

function startTimer250() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (!isPaused) {
        timerValue -= 5;
        timerElement250.textContent = timerValue;
        if (timerValue <= 0) {
          clearInterval(intervalId);
          timerValue = 0;
        }
      }
    }, 2000);
  }
}

function resetTimer250() {
  clearInterval(intervalId);
  intervalId = null;
  timerValue = 250;
  timerElement250.textContent = timerValue;
}

function pauseTimer250() {
  isPaused = true;
}

function resumeTimer250() {
  isPaused = false;
}

startBtn250.addEventListener("click", startTimer250);
resetBtn250.addEventListener("click", resetTimer250);
pauseBtn250.addEventListener("click", pauseTimer250);
resumeBtn250.addEventListener("click", resumeTimer250);
