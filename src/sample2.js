const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const observable = from([1, 2, 3, 4, 5]);

const transformedObservable = observable.pipe(
  map((value) => value * 2)
);

transformedObservable.subscribe(
  (value) => console.log(`Transformed value: ${value}`),
  (error) => console.error(`Error: ${error}`),
  () => console.log('Completed','\n')
);
