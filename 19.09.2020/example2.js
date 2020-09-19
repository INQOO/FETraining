// const tab = [];
// console.log(tab);
// //tab = [1,2,3,4,5];
// tab.push('elem testowy');
// tab.push('x1')
// tab.push('x2')
// tab.push('x3')
// tab.push('x4')
// tab.push('x5')
// tab.push('x6')
// tab.pop();
// console.log(tab)
// console.log(tab.length)
//
// console.log(tab[0])
// ;
// tab.splice(2, 1).splice(4, 1);
// console.log(tab);
// tab.shift();
// tab.unshift('pierwszy')
// console.log(tab);
// console.log(tab.indexOf('x3'))
// console.log(tab.sort());
// tab.push('x6')
// const tab2 = tab.slice();
// console.log(tab2)

class Dish {
  constructor(name, prepStep, ingredients, creationDate, desc, type) {
    this.name = name;
    this.prepStep = prepStep;
    this.ingredients = ingredients;
    this.creationDate = creationDate;
    this.desc = desc;
    this.type = type;
  }
}

class Breakfast extends Dish {

}

class Dinner extends Dish {

}

class Supper extends Dish {

}

class Drink extends Dish {

}

const receptures = [new Dinner(
  'jaja',
  ['step1', 'step2', 'step3', 'step4'],
  ['jajka', 'maslo', 'boczek'],
  new Date(),
  'xxxx  xxxx  x xx x x xx x', 'dinner'),
  new Dinner(
    'jaja',
    ['step1', 'step2', 'step3'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'dinner'),
  new Dinner(
    'jaja',
    ['step1'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'dinner'),
  new Breakfast(
    'jaja',
    ['step1', 'step2', 'step3', 'step4'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'breakfast'),
  new Breakfast(
    'jaja',
    ['step1', 'step2'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'breakfast'),
  new Supper(
    'jaja',
    ['step1', 'step2', 'step3',],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'supper'),
  new Supper(
    'jaja',
    ['step1', 'step2', 'step3', 'step4'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'supper')];
console.log(receptures);
console.log(receptures.length)

receptures.push(new Drink('cuba libre',
  ['step1', 'step2', 'step3', 'step4'],
  ['whisky', 'cola'],
  new Date(), 'shake it', 'drink'));
console.log(receptures);

const breakfast1 = receptures [3];
const breakfast2 = receptures [4];
receptures.splice(3, 2);
receptures.unshift(breakfast1);
receptures.unshift(breakfast2);
console.log(receptures);
//
// // function delTabElem(name, tab){
// //   const index = tab.indexOf(name);
// //   return tab.splice(index,1);
// // }
//
//
// let someArray = [];
// // dodajemy za pomoca petli for elementy do naszej tablicy -> zauważmy ze następuje mutacja
// for (let i = 0; i < 19; i++) {
//   console.log(i);
//   someArray.push(i);
// }
// console.log(someArray)
//
// let x = 10;
// // standardowa petla while - wykonuje sie dopoki x jest wieksze od 0
// while (x > 0) {
//   x--;
//   console.log(x);
// }
// someArray.forEach((elem, index) => {
//   someArray[index] = elem * elem;
//   //console.log(elem);
// });
// console.log(someArray)
//
// //inny sposob na iteracje po wszystkich elementach tablicy
// for (let recepture of receptures) {
//
//   for (let prop in recepture) {
//     console.log(recepture[prop]);
//   }
// }
//
//
// function zad1(someString) {
//   const tab = someString.split('');
//   const newTab = [];
//   for (let i = 0; i < tab.length; i += 2) {
//     newTab.push(tab[i]+tab[i+1]);
//   }
//   return newTab;
// }
//
// const newTab = zad1('testowy');
//
// console.log(newTab);
//
//
// function add(tabNumber){
//   let suma = 0;
//   for(let i =0 ;i<tabNumber.length;i++){
//     suma= suma + tabNumber[i];
//   }
//   return suma;
// }
//
// console.log(add([2,1]))
//
// let x;
//
// x=5;

// function zrobCos(argument1, argument2, argument3Tablicowy){
//   const tablica = [2,3,'sedfg',{}];
//   const elementDrugi = tablica[1]
//   tablica.push(23);
//   let sumaSilni = 0;
//   for(let xd = 0;xd<20;xd=xd+2){
//
//     sumaSilni = sumaSilni *xd
//   }
//
//   const toCoZwracaFunkcja= argument1 +argument2;
//   return toCoZwracaFunkcja;
//
// }
//
// x =zrobCos(23, 66, [32,43,566])
// x =zrobCos(1, 2, ['sdfs','sdf'])
// console.log(x)
//
// function silnia(x){
//   let suma = 1;
//   for(let i =1;i<=x;i++){
//     suma=suma*i;
//   }
//   return suma;
// }
//
// console.log(silnia(5));
//
// function longestString(tab){
//   let long='';
//   for(let i=0;i<tab.length;i++){
//     if(typeof tab[i] === 'object'){
//       for(let prop in tab[i]){
//         if(tab[i][prop].length>long.length){
//           long=tab[i][prop];
//         }
//       }
//     }else{
//     if(tab[i].toString().length>long.length){
//       long=tab[i];
//     }
//     }
//   }
//   return long;
// }
//
// console.log(longestString(['sdfsdf','xxxxxxxxxxx','sfdsf',{name:'xxxx',desc:'To najdluzszy string effs sdfsdfsd fsddfdsf sdfsdfsdf sdfsd'}]))

function popupwindow(url, title, w, h) {
  const left = (screen.width/2)-(w/2);
  const top = (screen.height/2)-(h/2);
  return window.open('', title, 'toolbar=no,' +
    ' location=no, directories=no, status=no, menubar=no,' +
    ' scrollbars=no, resizable=no, copyhistory=no,' +
    ' width='+w+', height='+h+', top='+top+', left='+left);
}

document.addEventListener("DOMContentLoaded", () => {
 console.log(document.body)
  console.log(window.screen)
  // let newWin = window.open("about:blank", "hello",
  //   "width=200,height=200");
  // newWin.document.write("Hello, world!");
popupwindow('about:blank','x',222,222)
  // let params = (new URL(newWin.document.location)).searchParams;
  // let name = params.get("name");
  // console.log(name);

 // localStorage.setItem('name',name);
console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
//   localStorage.clear();

let counter = localStorage.getItem('counter');
if(counter){
  localStorage.setItem('counter',+counter+1);
}else{
  localStorage.setItem('counter', 1);
}
console.log('jestes na tej stronie po raz ', localStorage.getItem('counter'))
});


