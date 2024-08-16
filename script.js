let hour = document.getElementById("h");
let minute = document.getElementById("m");
let second = document.getElementById("s");

const now = new Date();
let hours = now.getHours(); // Gets the current hour (0-23)
let minutes = now.getMinutes(); // Gets the current minutes (0-59)
let seconds = now.getSeconds(); // Gets the current seconds (0-59)

console.log(`Current time: ${hours}:${minutes}:${seconds}`);

const updateSecondCounter = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0; // Reset the counter
    minutes++;
    if (minutes === 60) {
      minutes = 0; // Reset the counter
      hours++;
      if (hours === 24) {
        hours = 0; // Reset the counter
      }
    }
  }

  second.innerHTML = seconds < 10 ? "0" + seconds : seconds; // Add leading zero
  minute.innerHTML = minutes < 10 ? "0" + minutes : minutes; // Add leading zero
  hour.innerHTML = hours < 10 ? "0" + hours : hours; // Add leading zero
};

setInterval(updateSecondCounter, 1000); // 1000 milliseconds = 1 second
