const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const birthDate = new Date("March 20 2023")

function countDown() {
    const currentDate = new Date();
    let diff = birthDate - currentDate;
    let diffSeconds = Math.floor(diff / 1000);

    const getDays = Math.floor(diffSeconds / 3600 / 24);
    let getHours = Math.floor(diffSeconds / 3600) % 24;
    let getMinutes = Math.floor(diffSeconds / 60) % 60;
    let getSeconds = Math.floor(diffSeconds % 60);

    days.innerHTML = formatTime(getDays);
    hours.innerHTML = formatTime(getHours);
    minutes.innerHTML = formatTime(getMinutes);
    seconds.innerHTML = formatTime(getSeconds);
}

setInterval(countDown, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}