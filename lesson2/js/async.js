console.log(1)
setTimeout(function(){ console.log(2); }, 1000);
console.log(3)

function changeColor(){
  const button = document.querySelector('#sendButton');
  if(button.getAttribute('style')){
    button.removeAttribute('style')
  }else{
    button.setAttribute('style','color:green')
  }

}

const intervalId = setInterval(changeColor, 1000);

//clearInterval(intervalId)
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout( function() {
    resolve("Success!")
  }, 250)
})

myFirstPromise.then((successMessage) => {
  console.log(successMessage)
}).then(()=>console.log('koniec'));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.all([promise1, promise2]).then(([first, second]) => {
  console.log(first, second);
});

Promise.race([promise1, promise2]).then((value)=> {
  console.log(value);
});

document.querySelector('#htmlLogo').addEventListener('click',refresh)

function refresh() {
  var spinner = document.querySelector('.loader');
  spinner.classList.add('spin');

  function performFakeCall () {
    return new Promise(function (resolve, reject) {
      setTimeout(function(){ resolve()}, 3000);
    })
  }

  performFakeCall().then(function(result) {
    spinner.classList.remove('spin');
  });
}
