// // // //
// // // //
// // // //
// // // // //
// // // // //
// // // (function () {
// // //   var letter = 'A';
// // //
// // //   if (letter.length) {
// // //     console.log(letter);
// // //     var letter = 'B';
// // //     console.log(letter);
// // //   }
// // //
// // //   console.log(letter);
// // // })();
// // //
// // // // // (function () {
// // // // //   let letter = 'A';
// // // // //
// // // // //   if (letter.length) {
// // // // //     console.log(letter);
// // // // //     let letter = 'B';
// // // // //     console.log(letter);
// // // // //   }
// // // // //
// // // // //   console.log(letter);
// // // // // })();
// // // // // const liczba =222.222;
// // // // // console.log(typeof liczba)
// // // // // console.log( liczba)
// // // // const car1 = {
// // // //   name: 'BMW',
// // // //   price: 208000,
// // // //   isDiesel: false,
// // // //   turnOn: function() {
// // // //     console.log('brum brum');
// // // //   }
// // // // };
// // // // console.log(car1.turnOn());
// // // //
// // // //
// // // // function createCar(name, price, isDiesel, turnOnFunc) {
// // // //   return {
// // // //     name,
// // // //     price,
// // // //     isDiesel,
// // // //     turnOn: turnOnFunc
// // // //   }
// // // // };
// // // //
// // // // function turnOnFunc1() {
// // // //   console.log('brum brum brum');
// // // // }
// // // //
// // // // const car2 = createCar('merc',222222,true, turnOnFunc1);
// // // // console.log(car2.turnOn())
// // // //
// // // // function Car(name, price, isDiesel) {
// // // //   this.name = name,
// // // //     this.price= price,
// // // //     this.isDiesel= isDiesel,
// // // //     this.turnOn= function() {
// // // //       console.log('brum brum');
// // // //     }
// // // // };
// // // // const car3 = new Car('maserati', 600000, false);
// // // // car3.price=222
// // // // console.log(car3)
// // // //
// // // //
// // // // //car3 = new Car('maserati', 600000, false);
// // // //  if(car3.price === 1){
// // // //    console.log('jeden');
// // // //  }else if(car3.price === 222){
// // // //    console.log('dwa');
// // // //  }else{
// // // //    console.log('cos innego')
// // // // //  }
// // // //
// // // //
// // // // var square = number => {
// // // // number * number
// // // // };
// // // // var x = square(4)
// // // //
// // // // const hello = () => {
// // // //  return 'hello'
// // // // };
// // // //
// // // // console.log(hello())
// // // //
// // // //
// // // function silnia(n) {
// // //   if ( n <= 1)
// // //     return 1
// // //   else if{
// // //
// // //     return (n * silnia(n-1) );
// // //   }
// // // }
// // // console.log(silnia(2));
// // //
// // //
// // // //bye();
// // //  hello();
// // // console.log(x);
// // // x = 5;
// // // console.log(x);
// // // x = 3;
// // // console.log(x)
// // // function hello(){
// // //   console.log('hello');
// // // }
// // // const bye = function(){
// // //   console.log('bye');
// // // }
// // // bye()
// //
// //
// // function animal() {
// // }
// // animal.prototype ={
// //   name: 'burek',
// //   legs: 4,
// //   size: 'big',
// //   speak: function(){console.log('hau')}
// //
// // }
// // const cat = Object.create(
// //   animal.prototype
// // );
// // //
// // console.log(cat);
// // // console.log(cat.toString())
// // cat.name ='mruczek'
// // cat.speak();
// // console.log(cat.name);
// // console.log(cat.toString())
// // cat.speak = () =>{console.log('meow' + cat.name)}
// // cat.speak();
// // console.log({}.toString())
// //  Object.prototype.toString = function(){console.log('zhakowane')}
// //     console.log({}.toString())
// //     console.log(cat.toString())
// // //
// //
// //
// // function car(){
// //
// // }
// // car.prototype = {
// //
// // }
// //
// // const bmw = Object.create(
// //   car.prototype
// // );
// // const mercedes = Object.create(
// //   car.prototype
// // );
// // const audi = Object.create(
// //   car.prototype
// // );
//
// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`The ${this.name} goes ${this.sound}!`);
//   }
// }
// const cat = new Animal('mruczek','meow')
// cat.makeSound();
//
// class Dog extends Animal {
//   constructor(name, sound, favoriteFood) {
//     super(name, sound);
//     this.favoriteFood = favoriteFood;
//   }
//   makeSound() {
//     console.log(`Bark ${this.name} goes ${this.sound} and love to eat ${this.favoriteFood}`);
//   }
// }
// const azora = new Dog('azor', 'hau', 'meat');
//
// azora.makeSound()


// closures - domkniecia
function makeAdder(x) {
  debugger
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add15 = makeAdder(15)

console.log(add5(2));
console.log(add15(2));
