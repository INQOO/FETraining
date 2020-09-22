class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} goes ${this.sound}!`);
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(`Bark`);
  }
}
const azor = new Dog('azor', 'hau')
azor.makeSound()
