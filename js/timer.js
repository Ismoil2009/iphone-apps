const minut = document.querySelector("#minut");
const second = document.querySelector("#second");
const taymerMusic = document.querySelector(".timer-music");

function getNumber() {
  let numbers;

  for (let i = 0; i < 601; i++) {
    numbers += `<option value="${i < 10 ? "0" + i : i}">${
      i < 10 ? "0" + i : i
    }</option>;`;
  }

  return numbers;
}

minut.innerHTML = getNumber();
second.innerHTML = getNumber();
let a = 1;

function stop() {
  clearInterval(a);
  taymerMusic.pause();
}

function reset() {
  minut.value = "00";
  second.value = "00";
}

function start() {
  let nowMinut = +minut.value;
  let nowSecond = +second.value;

  a = setInterval(() => {
    if (nowSecond == 0 && nowMinut == 0) {
      stop();
      taymerMusic.play();
    } else if (nowSecond == 0) {
      nowSecond = 60;
      nowMinut -= 1;
    } else {
      nowSecond -= 1;
    }
    minut.value = nowMinut < 10 ? "0" + nowMinut : `${nowMinut}`;
    second.value = nowSecond < 10 ? "0" + nowSecond : `${nowSecond}`;
  }, 1000);
}
