


//
//
// (function () {
//   var letter = 'A';
//
//   if (letter.length) {
//     console.log(letter);
//     var letter = 'B';
//     console.log(letter);
//   }
//
//   console.log(letter);
// })();
// (function () {
//   let letter = 'A';
//
//   if (letter.length) {
//     console.log(letter);
//     let letter = 'B';
//     console.log(letter);
//   }
//
//   console.log(letter);
// })();
// const liczba =222.222;
// console.log(typeof liczba)
// console.log( liczba)
const car1 = {
  name: 'BMW',
  price: 208000,
  isDiesel: false,
  turnOn: function() {
    console.log('brum brum');
  }
};
console.log(car1.turnOn());


function createCar(name, price, isDiesel, turnOnFunc) {
  return {
    name,
    price,
    isDiesel,
    turnOn: turnOnFunc
  }
};

function turnOnFunc1() {
  console.log('brum brum brum');
}

const car2 = createCar('merc',222222,true, turnOnFunc1);
console.log(car2.turnOn())

function Car(name, price, isDiesel) {
  this.name = name,
    this.price= price,
    this.isDiesel= isDiesel,
    this.turnOn= function() {
      console.log('brum brum');
    }
};

const car3 = new Car('maserati', 600000, false);

console.log(car3.turnOn())



