import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Loading } from 'notiflix';

let getEl = selector => document.querySelector(selector);
getEl('[data-start]').addEventListener('click', timerStart);
getEl('.timer').setAttribute('style', 'display:flex;padding-top:10px');

const fieldRef = document.querySelectorAll('.field');
fieldRef.forEach(element => {
    element.setAttribute('style', 'width:70px;text-align:center');
});

const valuedRef = document.querySelectorAll('.value');
valuedRef.forEach(element => {
    element.setAttribute('style', 'display:block;font-size:20px;font-weight:500');
});

makeBtnStartDisabled();

let timerId = null
const date = new Date
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
    if (date.getTime() < selectedDates[0].getTime()) {
        makeBtnStartAvailable()
    } else {
        alert()
        };
        
    },
};
const selectedDate = flatpickr("#datetime-picker", options)

function timerStart() {
    makeDatetimePickerDisabled()

    const timerId = setInterval(() => {
        const dateNow = Date.now()
        const timeDifference = selectedDate.selectedDates[0] - dateNow
        const { days, hours, minutes, seconds } = convertMs(timeDifference)

        if (timeDifference < 1000) {
            clearInterval(timerId)
            makeBtnStartAvailable()
            makeDatetimePickerAvailable()
        }
    
        updateTimerInterface({ days, hours, minutes, seconds })
    }, 1000) 

    makeBtnStartDisabled()
}

function makeBtnStartDisabled() {
    getEl('[data-start]').setAttribute('disabled', '');
}

function makeBtnStartAvailable() {
    getEl('[data-start]').removeAttribute('disabled');
}

function makeDatetimePickerDisabled() {
    getEl('#datetime-picker').setAttribute('disabled', '');
}

function makeDatetimePickerAvailable() {
    getEl('#datetime-picker').removeAttribute('disabled', '');
}

function alert() {
    Notiflix.Notify.failure('Please choose a date in the future');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
        getEl('[data-days]').textContent = `${days}`;
        getEl('[data-hours]').textContent = `${hours}`;
        getEl('[data-minutes]').textContent = `${minutes}`;
        getEl('[data-seconds]').textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}


