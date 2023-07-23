// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const calendar = document.querySelector("#datetime-picker");
// const startBtn = document.querySelector("button[data-start]");
// const daysEl = document.querySelector("[data-days]");
// const hoursEl = document.querySelector("[data-hours]");
// const minutesEl = document.querySelector("[data-minutes]");
// const secondsEl = document.querySelector("[data-seconds]");

// startBtn.disabled = true;
// let selectedDate = null;

// const currentDate = new Date();

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     handlerSelectedDate(selectedDates[0]);
//   },
// };

// function handlerSelectedDate(selectedDates) { 
//   if (selectedDates <= currentDate) { 
//     Notify.warning("Please choose a date in the future");
//     return;
//   }
//   selectedDate = selectedDates;
//   startBtn.disabled = false;
// };


// function startCountdown() { 
//   startBtn.disabled = true;
//   const intervalId = setInterval(updateCountdown, 1000);
  
//   function updateCountdown() { 
//   const timeLeft = selectedDate - new Date();

//   if (timeLeft <= 0) { 
//     clearInterval(intervalId);
//     resetTimer();
//     Notify.info("Countdown is finished!");
//     startBtn.disabled = false;
//     return;
//   }
//   const { days, hours, minutes, seconds } = convertMs(timeLeft);

//   daysEl.textContent = formatTimeValue(days);
//   hoursEl.textContent = formatTimeValue(hours);
//   minutesEl.textContent = formatTimeValue(minutes);
//   secondsEl.textContent = formatTimeValue(seconds);
//   };
// }

// function resetTimer() {
//   daysEl.textContent = "00";
//   hoursEl.textContent = "00";
//   minutesEl.textContent = "00";
//   secondsEl.textContent = "00";
// }

// function formatTimeValue(value) { 
//   return value.toString().padStart(2, "0");
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// startBtn.addEventListener("click", startCountdown);
// const fpCalendar = flatpickr(calendar, options);


//* ==============

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const calendar = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtn.addEventListener("click", startCountdown);
startBtn.disabled = true;

let selectedDate = null;
const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handlerSelectedDate(selectedDates[0]);
  },
};

let countdownInProgress = false;

function handlerSelectedDate(selectedDates) { 
  if (countdownInProgress) { 
    Notify.warning("Countdown is already in progress!");
    return;
  };
  if (selectedDates <= currentDate) { 
    Notify.warning("Please choose a date in the future!");
    return;
  }
  selectedDate = selectedDates;
  startBtn.disabled = false;
};

function startCountdown() { 
  if (countdownInProgress) { 
    return;
  };
  countdownInProgress = true;
  startBtn.disabled = true;
  const intervalId = setInterval(updateCountdown, 1000);
  
  function updateCountdown() { 
    const timeLeft = selectedDate - new Date();

  if (timeLeft <= 0) { 
    clearInterval(intervalId);
    resetTimer();
    Notify.info("Countdown is finished!");
    startBtn.disabled = true;
    countdownInProgress = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeLeft);

  daysEl.textContent = formatTimeValue(days);
  hoursEl.textContent = formatTimeValue(hours);
  minutesEl.textContent = formatTimeValue(minutes);
  secondsEl.textContent = formatTimeValue(seconds);
  };
}

function resetTimer() {
  daysEl.textContent = "00";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
}

function formatTimeValue(value) { 
  return value.toString().padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// startBtn.addEventListener("click", startCountdown);
const fpCalendar = flatpickr(calendar, options);
