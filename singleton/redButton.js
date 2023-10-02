import Counter from './singleton.js';

const button = document.getElementById('red');
button.addEventListener('click', () => {
  Counter.increment();
  console.log('Counter total: ', Counter.getCount());
});
