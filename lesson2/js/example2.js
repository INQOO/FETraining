//
// class Dish {
//   constructor(name, prepStep, ingredients, creationDate, desc, type) {
//     this.name = name;
//     this.prepStep = prepStep;
//     this.ingredients = ingredients;
//     this.creationDate = creationDate;
//     this.desc = desc;
//     this.type = type;
//   }
// }
//
// class Breakfast extends Dish {
//
// }
//
// class Dinner extends Dish {
//
// }
//
// class Supper extends Dish {
//
// }
//
// class Drink extends Dish {
//
// }
//
// const receptures = [new Dinner(
//   'jaja',
//   ['step1', 'step2', 'step3', 'step4'],
//   ['jajka', 'maslo', 'boczek'],
//   new Date(),
//   'xxxx  xxxx  x xx x x xx x', 'dinner'),
//   new Dinner(
//     'kurczak',
//     ['step1', 'step2', 'step3'],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'dinner'),
//   new Dinner(
//     'buritto',
//     ['step1'],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'dinner'),
//   new Breakfast(
//     'kasza',
//     ['step1', 'step2', 'step3', 'step4'],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'breakfast'),
//   new Breakfast(
//     'pizza',
//     ['step1', 'step2'],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'breakfast'),
//   new Supper(
//     'burito z kasza',
//     ['step1', 'step2', 'step3',],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'supper'),
//   new Supper(
//     'quasedilla',
//     ['step1', 'step2', 'step3', 'step4'],
//     ['jajka', 'maslo', 'boczek'],
//     new Date(),
//     'xxxx  xxxx  x xx x x xx x', 'supper')];
//
// receptures.push(new Drink('cuba libre',
//   ['step1', 'step2', 'step3', 'step4'],
//   ['whisky', 'cola'],
//   new Date(), 'shake it', 'drink'));
//
//
// const breakfast1 = receptures [3];
// const breakfast2 = receptures [4];
// receptures.splice(3, 2);
// receptures.unshift(breakfast1);
// receptures.unshift(breakfast2);
//
// const addLiElement = function (text, parentElement) {
//   const newContent = document.createTextNode(text);
//   const newA = document.createElement('a');
//   const newLi = document.createElement('li');
//   newA.appendChild(newContent);
//   newLi.appendChild(newA);
//   parentElement.insertBefore(newLi, null);
// }
// document.addEventListener("DOMContentLoaded", () => {
//
//
// receptures.forEach(recepture =>
//   addLiElement(recepture.name, document.querySelector('.testList')));
//
//
//   // addLiElement('new test 1', document.querySelector('.testList'));
//   // addLiElement('new test 2', document.querySelector('.testList'));
//   // addLiElement('new test 3', document.querySelector('.testList'));
//   //
//
//
//
// });
//
//

import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

// function getDataWithObservable(url) {
//   return new Observable((observer) =>{
//     const xmlHttp = new XMLHttpRequest();
//     xmlHttp.onload = function () {
//       observer.next(this.responseText);}
//     xmlHttp.onerror = function () {
//       observer.error(this.status)
//     }
//     xmlHttp.open('GET', url);
//     xmlHttp.send();
//   });
// }
//
// function success(responseText) {
//   console.log(responseText);
// }
// function error(status) {
//   console.log(status);
// }
//
// getDataWithObservable('https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078').pipe(
//   map(data => JSON.parse(data))
// ).subscribe(success, error);



const obs$ = ajax(`https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078`).pipe(
  map(cars => console.log('cars: ', cars)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
obs$.subscribe();
