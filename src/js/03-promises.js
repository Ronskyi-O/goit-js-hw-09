import Notiflix from 'notiflix';

let getEl = selector => document.querySelector(selector);

getEl('.form').addEventListener('submit', handleSubmit)
const delay = getEl('[name="delay"]').value
const step = getEl('[name="step"]').value
const amount = getEl('[name="amount"]').value


function handleSubmit(event) {
  event.preventDefault();
  const firstdelay = Number(getEl('[name="delay"]').value)
  const step = Number(getEl('[name="step"]').value)
  const amount = Number(getEl('[name="amount"]').value)
  

    for (let i = 0; i < amount; i++) {
       const delay = firstdelay + step * i
      setTimeout(() => {
        createPromise(i + 1, delay)
      }, delay)
  }
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }
  )
promise.then(({ position, delay }) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
}
