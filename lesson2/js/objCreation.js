const car1 = {
  name: 'BMW',
  price: 208000,
  isDiesel: false,
  turnOn: function() {
    console.log('brum brum');
  }
};

function createCar(name, price, isDiesel)  {
  return {
    name,
    price,
    isDiesel,
    turnOn: function() {
      console.log('brum brum');
    }
  }
};
const car2 = createCar('mercedes', 300000, true);
function Car(name, price, isDiesel) {
  this.name = name,
    this.price= price,
    this.isDiesel= isDiesel,
    this.turnOn= function() {
      console.log('brum brum');
    }
};
const car3 = new Car('maserati', 600000, false);
console.log(car1)
console.log(car2)
console.log(car3)
