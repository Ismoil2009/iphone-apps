const time = document.querySelector(".alarm .time");
const alarmSong = document.querySelector(".alarm-song");

let currentTime, currentHour, curretMinute, currentSecond;

function getDate() {
  currentTime = new Date();
  currentHour = +currentTime.getHours();
  curretMinute = +currentTime.getMinutes();
  currentSecond = +currentTime.getSeconds();
}

getDate();

time.value = `${currentHour < 10 ? "0" + currentHour : currentHour}:${
  curretMinute < 10 ? "0" + curretMinute : curretMinute
}`;

function getTime() {
  getDate();

  let melodyTime = time.value;

  melodyTime = melodyTime.split(":");
  melodyTime =
    (+melodyTime[0] - currentHour) * 3600000 +
    (+melodyTime[1] - curretMinute) * 60000 -
    currentSecond * 1000;
  console.log(melodyTime, currentSecond);
  setTimeout(
    () => {
      alarmSong.play();
    },
    melodyTime < 0 ? -melodyTime : melodyTime
  );
}

function stopSong() {
  alarmSong.pause();
}
