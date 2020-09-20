import {catchError, map} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

console.log('hey')

const obs$ = ajax(`https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078`).pipe(
  map(cars => console.log('cars: ', cars)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
obs$.subscribe();
