const { of, zip, merge, concat, interval } = require('rxjs');
const { switchMap, take } = require('rxjs/operators');

const observable1 = of(1, 2, 3, 4, 5);
const observable2 = of('A', 'B', 'C', 'D', 'E');

const separator = '-----------';

console.log(separator,'zip', separator, '\n');
const zippedObservable = zip(observable1, observable2);

zippedObservable.subscribe(
    ([value1, value2]) => console.log(`Zipped values: ${value1}, ${value2}`),
    (error) => console.error(`Error: ${error}`),
    () => console.log('Completed','\n')
);


console.log(separator, 'merge', separator, '\n');

const mergedObservable = merge(observable1, observable2);

mergedObservable.subscribe(
    (value) => console.log(`Merged value: ${value}`),
    (error) => console.error(`Error: ${error}`),
    () => console.log('Completed','\n')
);

console.log(separator, 'switchMap', separator, '\n');

const sourceObservable = interval(2000);
const switchedObservable = sourceObservable.pipe(
    take(10),
    switchMap((value) => of(value * 2, value * 3).pipe(take(2)))
);

switchedObservable.subscribe(
    (value) => console.log(`Switched value: ${value}`),
    (error) => console.error(`Error: ${error}`),
    () => console.log('Completed','\n')
);
