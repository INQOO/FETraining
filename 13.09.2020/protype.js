function animal() {
}
animal.prototype ={
  name: 'burek',
  legs: 4,
  size: 'big',
  speak: function(){console.log('hau')}

}
const cat = Object.create(
  animal.prototype
);

console.log(cat);
console.log(cat.toString())
cat.speak();
cat.speak = () =>{console.log('meow' + cat.name)}
cat.speak();
console.log({}.toString())
Object.prototype.toString = function(){console.log('zhakowane')}
console.log({}.toString())
console.log(cat.toString())


