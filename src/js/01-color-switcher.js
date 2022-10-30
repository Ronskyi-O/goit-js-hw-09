let getEl = selector => document.querySelector(selector)

getEl('[data-start]').addEventListener('click', colorSwitcherStart)
getEl('[data-stop]').addEventListener('click', colorSwitcherStop)

let timerId = null

function colorSwitcherStart() {
    timerId = setInterval(() => {
        const color = getRandomHexColor()
        getEl('body').style.backgroundColor = `${color}`;
    }, 1000);

     makeBtnStartDisabled()
}

function colorSwitcherStop() { 
    clearInterval(timerId)

    makeBtnStartAvailable()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function makeBtnStartDisabled() {
    getEl('[data-start]').setAttribute('disabled', '');
}

function makeBtnStartAvailable() {
    getEl('[data-start]').removeAttribute('disabled');
}