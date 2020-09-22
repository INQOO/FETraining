const car1 = {
  name: 'BMW',
  possibleColor:['red','green','yellow'],
  price: 208000,
  isDiesel: false,
  turnOn: function() {
    console.log('brum brum jade ' + this.name);
  }
};

car1.turnOn();
function createCar(name, price, isDiesel)  {
  return {
    name,
    price,
    isDiesel,
    turnOn: function() {
      console.log('brum brum jade'+ name);
    }
  }
};

const car2 = createCar('mercedes', 300000, true);
car2.turnOn();
function Car(name, price, isDiesel) {
  this.name = name,
    this.price= price,
    this.isDiesel= isDiesel,
    this.turnOn= function() {
      console.log('brum brum jade' + this.name );
    }
};

const car3 = new Car('maserati', 600000, false);
car3.turnOn();
console.log(car1)
console.log(car2)
console.log(car3)
