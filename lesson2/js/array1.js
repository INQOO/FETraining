const cars = ['BMW', 'Audi', 'Mercedes']
const bmw = cars[0];
const mercedes = cars[cars.length-1];
console.log(cars)
console.log(mercedes)
console.log(cars.length)
const tab = [1,true,'xxx']
console.log(tab);
cars.pop();
cars.push('Honda')
console.log(cars);
cars.unshift('Ford')
console.log(cars);
console.log(cars.indexOf('Honda'))
cars.sort();
console.log(cars);
cars.splice( 2,1);
console.log(cars)
const cars2 = cars.slice(0,2); //koncowy indeks nie zawiera sie w kopii
console.log(cars2);


