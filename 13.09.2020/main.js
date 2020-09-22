// //
// //
// //
// // //
// // //
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
//
// // // (function () {
// // //   let letter = 'A';
// // //
// // //   if (letter.length) {
// // //     console.log(letter);
// // //     let letter = 'B';
// // //     console.log(letter);
// // //   }
// // //
// // //   console.log(letter);
// // // })();
// // // const liczba =222.222;
// // // console.log(typeof liczba)
// // // console.log( liczba)
// // const car1 = {
// //   name: 'BMW',
// //   price: 208000,
// //   isDiesel: false,
// //   turnOn: function() {
// //     console.log('brum brum');
// //   }
// // };
// // console.log(car1.turnOn());
// //
// //
// // function createCar(name, price, isDiesel, turnOnFunc) {
// //   return {
// //     name,
// //     price,
// //     isDiesel,
// //     turnOn: turnOnFunc
// //   }
// // };
// //
// // function turnOnFunc1() {
// //   console.log('brum brum brum');
// // }
// //
// // const car2 = createCar('merc',222222,true, turnOnFunc1);
// // console.log(car2.turnOn())
// //
// // function Car(name, price, isDiesel) {
// //   this.name = name,
// //     this.price= price,
// //     this.isDiesel= isDiesel,
// //     this.turnOn= function() {
// //       console.log('brum brum');
// //     }
// // };
// // const car3 = new Car('maserati', 600000, false);
// // car3.price=222
// // console.log(car3)
// //
// //
// // //car3 = new Car('maserati', 600000, false);
// //  if(car3.price === 1){
// //    console.log('jeden');
// //  }else if(car3.price === 222){
// //    console.log('dwa');
// //  }else{
// //    console.log('cos innego')
// //  }
//
//
// var square = number => {
// number * number
// };
// var x = square(4)
//
// const hello = () => {
//  return 'hello'
// };
//
// console.log(hello())
//
//
// function silnia(n) {
//   if ( n <= 1)
//     return 1
//   else {
//
//     return (n * silnia(n-1) );
//   }
// }
// console.log(silnia(2));


//bye();
 hello();
console.log(x);
x = 5;
console.log(x);
x = 3;
console.log(x)
function hello(){
  console.log('hello');
}
const bye = function(){
  console.log('bye');
}
bye()
