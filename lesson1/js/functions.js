function square(number) {
  return number * number;
}
const x = square(4)

const shout = function(text) { return text+'!!!!' };
 console.log(shout('hello'))


const isLongString = text => text.length>5;
console.log(isLongString('xxxxxxxxx'))

const hello = () => {console.log('hello')};





// closures - domkniecia
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);

console.log(add5(5));
