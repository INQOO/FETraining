(function () {
  document.addEventListener("DOMContentLoaded", () => {




  //creating new window
  // function popupwindow(url, title, w, h) {
  //   const left = (screen.width/2)-(w/2);
  //   const top = (screen.height/2)-(h/2);
  //   return window.open('', title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  // }
 //
 // const win =  popupwindow('testing','nice titile', 200, 200)
 //  win.document.write('hello world')

  console.log(window.screen.width)
  let newWin = window.open("about:blank", "hello", "width=200,height=200");
  newWin.document.write("Hello, world!");

  let params = (new URL(newWin.document.location)).searchParams;
  let name = params.get("name");

  console.log(name)
  //localstorage
  localStorage.setItem('testItem1', 'xxx');
  localStorage.setItem('testItem2', 'xxx');
  console.log(localStorage.getItem('testItem1'));

  localStorage.removeItem('testItem2')
  //localStorage.clear();
//adding removing dom items
  const newLi = document.createElement('li');
  newLi.setAttribute('class', 'test');
  const newContent = document.createTextNode("some text to insert");
  newLi.appendChild(newContent);

  document.querySelector('.testList').insertBefore(newLi, null);

  console.log(document.querySelectorAll('.test'));

  document.querySelector('.testList').setAttribute('id', 'testId')

  console.log(document.querySelector('.testList'));


  const addLiElement = function (text, parentElement) {
    const newContent = document.createTextNode(text);
    const newLi = document.createElement('li');
    newLi.appendChild(newContent);
    parentElement.insertBefore(newLi, null);
  }

  addLiElement('new test 1', document.querySelector('.testList'));
  addLiElement('new test 2', document.querySelector('.testList'));
  addLiElement('new test 3', document.querySelector('.testList'));
  console.log(document.querySelector('.testList'));


//event
  // lista eventów https://developer.mozilla.org/en-US/docs/Web/Events
  function test(event) {
    console.log('clicked', event);
    event.preventDefault();
  }

  function sendData(event) {
    const formText = document.querySelector('textarea').value;
    addLiElement(formText, document.querySelector('.testList'));
    event.preventDefault();
  }

  function changeButtonColor() {
    document.querySelector('#sendButton').setAttribute('style', 'color:red')
  }

  document.querySelector('#sendButton').addEventListener('click', test)
  document.querySelector('#sendButton').addEventListener('mouseenter', changeButtonColor)
  // document.querySelector('#sendButton').addEventListener('click', sendData)
  });
}());
