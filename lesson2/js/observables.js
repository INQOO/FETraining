import {fromEvent, interval} from 'rxjs';
import {scan, map, debounceTime, bufferWhen, filter,} from 'rxjs/operators';


//fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

fromEvent(document, 'click')
  .pipe(
    scan(count => count + 1, 0),
    map(x => x * 2))
  .subscribe(count => console.log(`Clicked ${count} times`));


const input = document.querySelector('.typeAheadInput');

const inputStream$ = fromEvent(input, 'input').pipe(
  map(e => e.target.value),
  debounceTime(1000)
);

inputStream$.subscribe(word => {
  console.log(word)
})


fromEvent(document, 'click').pipe(
  bufferWhen(() => interval(1000)),
  filter(events => events.length >= 3)
).subscribe((res) => {
  alert('jest!')
});
