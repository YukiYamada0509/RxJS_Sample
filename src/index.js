const { of } = require('rxjs');
const { map } = require('rxjs/operators');

// Create an Observable that emits values from 1 to 5
const source$ = of(1, 2, 3, 4, 5);

// Transform the values by doubling them
const transformed$ = source$.pipe(
  map(value => value * 2)
);

// Subscribe to the transformed Observable and print the doubled values
transformed$.subscribe(
  doubledValue => console.log(`Doubled value: ${doubledValue}`)
);
