const { of } = require('rxjs');

const observable = of(1, 2, 3, 4, 5);

observable.subscribe(
  (value) => console.log(`Value: ${value}`),
  (error) => console.error(`Error: ${error}`),
  () => console.log('Completed','\n')
);
