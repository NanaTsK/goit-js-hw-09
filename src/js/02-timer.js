import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const calendar = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

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

// function handlerSelectedDate(selectedDates) { 
//   if (selectedDates < currentDate) { 
//     Notify.warning("Please choose a date in the future");
//     return;
//   }
  
//   startBtn.disabled = falce;

//   let countdown = selectedDates < currentDate;
//   startBtn.addEventListener("click", startCountdown)
  
//   function startCountdown() { 
//     const intervalId = setInterval(() =>
      
//     // ...

//     , 1000);
//   }
// };




const fpCalendar = flatpickr(calendar, options);








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
