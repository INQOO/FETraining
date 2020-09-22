const someArray = [];
// dodajemy za pomoca petli for elementy do naszej tablicy -> zauważmy ze następuje mutacja
for (let i = 0; i < 19; i++) {
  console.log(i);
  someArray.push(i);
}
let x = 10;
// standardowa petla while - wykonuje sie dopoki x jest wieksze od 0
while (x > 0) {
  x--;
  console.log(x);
}


console.log(someArray);
// pętla iterująca po kązdym elemencie tablicy i wykonujca na nim console.log
someArray.forEach(elem => console.log(elem));
console.log(someArray);

//inny sposob na iteracje po wszystkich elementach tablicy
for (let i of someArray) {
  i *= 2;
  console.log(i)
}
console.log(someArray)
const car = {
  type: 'BMW',
  model: 'z4',
  engine: 2000,
  price: 200000
}
//iteracja po wlasciwosciach obiektu
for (const prop in car){
  console.log(prop);
}
//mozemy rownież iterować po stringach
for (let i of car.type) {
  console.log(i)
}
