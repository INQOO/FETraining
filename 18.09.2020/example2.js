const tab = [];
console.log(tab);
//tab = [1,2,3,4,5];
tab.push('elem testowy');
tab.push('x1')
tab.push('x2')
tab.push('x3')
tab.push('x4')
tab.push('x5')
tab.push('x6')
tab.pop();
console.log(tab)
console.log(tab.length)

console.log(tab[0])
;
tab.splice(2, 1).splice(4, 1);
console.log(tab);
tab.shift();
tab.unshift('pierwszy')
console.log(tab);
console.log(tab.indexOf('x3'))
console.log(tab.sort());
tab.push('x6')
const tab2 = tab.slice();
console.log(tab2)

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
receptures.splice(3,2);
receptures.unshift(breakfast1);
receptures.unshift(breakfast2);
console.log(receptures);

// function delTabElem(name, tab){
//   const index = tab.indexOf(name);
//   return tab.splice(index,1);
// }


