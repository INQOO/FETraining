const cars = [
  {
    type: 'bmw',
    models: ['1', '3', '5', 'z4']
  },
  {
    type: 'audi',
    models: ['a1', 'a4', 'a5', 'a6']
  },
  {
    type: 'mercedes',
    models: ['E Klasa', 'S Klasa']
  },
  {
    type: 'ford',
    models: ['focus', 'mustang', 'c-max', 'fiesta']
  }
]
const listCarTypes = (acc, currentValue) => {
  return acc + currentValue.type + ' '
};
console.log(cars.reduce(listCarTypes, ''));

const shortNames = cars.filter(car => car.type.length < 4);
console.log(shortNames)

const result = cars.map(car => {
  return {...car, type: 'typ to: ' + car.type}

})
console.log(result);
