// RxJS v6+
import { interval } from 'rxjs';
import { scan } from 'rxjs/operators';

const createElem = drop => {
  const elem = document.createElement('div');
  elem.style.position = 'absolute';
  elem.style.marginTop = drop.x + 'px';
  elem.style.marginLeft = drop.y + 'px';
  elem.style.fontSize = '12px';
  elem.innerHTML = drop.d.reduce((acc, c) => (acc += '<br/>' + c), '');
  elem.style['color'] = `rgb(21, ${100 + drop.d.length * 10}, 21)`;
  return elem;
};

export const render = matrix => {
  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.style.position = 'relative';
  matrix.forEach(m => container.appendChild(createElem(m)));
  document.body.appendChild(container);
};

const drop = (x, y) => ({ x, y, d: [], remove: false });
const random = (max) => Math.floor(Math.random() * Math.floor(max));
const ranodmChar = () => String.fromCharCode(random(128));

 const markForRemoval = matrix =>
  matrix.forEach(
    drop => (drop.remove = drop.remove ? true : drop.d.length > 20)
  );
 const updateDrops = matrix =>
  matrix.forEach(
    drop =>
      (drop.d = drop.remove
        ? drop.d.slice(1).map(e => ranodmChar())
        : [ranodmChar(), ...drop.d.map(e => ranodmChar())])
  );
const updateMatrix = matrix => [
  ...matrix,
  drop(random(window.innerHeight) / 4, random(window.innerWidth))
];



interval(300)
  .pipe(
    scan(matrix => (
      markForRemoval(matrix),
      updateDrops(matrix),
      updateMatrix(matrix)
  ), [])
  ).subscribe(render);
