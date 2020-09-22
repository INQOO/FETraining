import {catchError, map} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {fromEvent} from "rxjs";
import {debounceTime} from "rxjs/operators";


document.addEventListener("DOMContentLoaded", () => {
//nowa tablica = tablica.map( x => x*2)
  const inputStream$ = fromEvent(document.querySelector('#searchInput'), 'input').pipe(
    map(e => e.target.value),
   // debounceTime(1000)
  );
  inputStream$.subscribe(e=>
{
    document.querySelector('#carList').innerHTML = '';
    obs$.subscribe(cars => {
      const carTabs = cars.response.cars;


      const carsIndexed = carTabs.map((car, index)=>{
        car.id = index;
        return car;
      });


      const filteredCars = carsIndexed.filter(car =>
        car.Name.includes(
          document.querySelector('#searchInput').value));
      const filteredCarsColor = filteredCars.map((car, index) => {
        console.log(index);
        const newCar = car;
        newCar.color = 'white';
        return newCar;
      });
      console.log(filteredCarsColor)
      filteredCarsColor.forEach((car, index) =>
        addLiElement(car.Name,
          document.querySelector('#carList'), car.id))
    });
  });
  document.querySelector('#strongestCarButton').addEventListener('click', () => {
    document.querySelector('#carList').innerHTML = '';
    obs$.subscribe(cars => {
      const carTabs = cars.response.cars;

      const reducer = (acc, currentValue) => {
        if (acc.Horsepower > currentValue.Horsepower) {
          return acc;
        } else {
          return currentValue;
        }
      }
      const car = carTabs.reduce(reducer);
      addLiElement(car.Name,
        document.querySelector('#carList'), 0)
    });

  });

  const addLiElement = function (text, parentElement, index) {
    const newContent = document.createTextNode(text);
    const newA = document.createElement('a');
    newA.setAttribute('href', '/car-details.html?id=' + index);
    const newLi = document.createElement('li');
    newA.appendChild(newContent);
    newLi.appendChild(newA);
    parentElement.insertBefore(newLi, null);
  }

  const obs$ = ajax(`https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078`).pipe(
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );

});
