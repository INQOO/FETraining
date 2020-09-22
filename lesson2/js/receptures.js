
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
    'kurczak',
    ['step1', 'step2', 'step3'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'dinner'),
  new Dinner(
    'buritto',
    ['step1'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'dinner'),
  new Breakfast(
    'kasza',
    ['step1', 'step2', 'step3', 'step4'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'breakfast'),
  new Breakfast(
    'pizza',
    ['step1', 'step2'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'breakfast'),
  new Supper(
    'burito z kasza',
    ['step1', 'step2', 'step3',],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'supper'),
  new Supper(
    'quasedilla',
    ['step1', 'step2', 'step3', 'step4'],
    ['jajka', 'maslo', 'boczek'],
    new Date(),
    'xxxx  xxxx  x xx x x xx x', 'supper')];

receptures.push(new Drink('cuba libre',
  ['step1', 'step2', 'step3', 'step4'],
  ['whisky', 'cola'],
  new Date(), 'shake it', 'drink'));


const breakfast1 = receptures [3];
const breakfast2 = receptures [4];
receptures.splice(3, 2);
receptures.unshift(breakfast1);
receptures.unshift(breakfast2);

const addLiElement = function (text, parentElement, index) {
  const newContent = document.createTextNode(text);
  const newA = document.createElement('a');
  const newLi = document.createElement('li');
  newA.setAttribute('href','example2.html?id='+index);
  newA.appendChild(newContent);
  newLi.appendChild(newA);
  parentElement.insertBefore(newLi, null);
}
document.addEventListener("DOMContentLoaded", () => {
  receptures.forEach((recepture,index)=>
    addLiElement(recepture.name, document.querySelector(
      '.testList'), index));


  // addLiElement('new test 1', document.querySelector('.testList'));
  // addLiElement('new test 2', document.querySelector('.testList'));
  // addLiElement('new test 3', document.querySelector('.testList'));
  //



});


