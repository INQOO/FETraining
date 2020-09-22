// promise
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

function makeRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}
makeRequest('GET', 'https://run.mocky.io/v3/8c9e0740-433f-4afc-856b-d612da63a73f')
  .then(function (data) {
    console.log(data);
  })
makeRequest('GET', 'https://run.mocky.io/v3/c01405d6-8329-4b26-93f7-b82e6918dc1f')
  .then(function (data) {
    console.log(data);
  }, function(reason) {
    console.error('we have got error here! ', reason)
  })


// Observable

function getDataWithObservable(url) {
 return new Observable((observer) =>{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function () {
      observer.next(this.responseText);}
    xmlHttp.onerror = function () {
      observer.error(this.status)
    }
    xmlHttp.open('GET', url);
    xmlHttp.send();
  });
}

function success(responseText) {
  console.log(responseText);
}
function error(status) {
  console.log(status);
}

getDataWithObservable('https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078').pipe(
  map(data => JSON.parse(data))
).subscribe(success, error);


const obs$ = ajax(`https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078`).pipe(
  map(cars => console.log('cars: ', cars)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
obs$.subscribe();


