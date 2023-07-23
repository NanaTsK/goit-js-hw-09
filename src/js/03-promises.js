import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector(".form");
promiseForm.addEventListener("submit", onPromiseSubmit);

function onPromiseSubmit(event) { 
  event.preventDefault();

  let delay = Number(promiseForm.elements.delay.value);
  let step = Number(promiseForm.elements.step.value);
  let amount = Number(promiseForm.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) { 
createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  .finally(delay += step);
  }
    event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 

    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}


