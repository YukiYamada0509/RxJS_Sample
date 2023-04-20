const { interval } = require('rxjs');
const { take, filter, map } = require('rxjs/operators');

const observable = interval(1000);

const processedObservable = observable.pipe(
  take(10),
  filter((value) => value % 2 === 0),
  map((value) => value * 2)
);

processedObservable.subscribe(
  (value) => console.log(`Processed value: ${value}`),
  (error) => console.error(`Error: ${error}`),
  () => console.log('Completed','\n')
);
