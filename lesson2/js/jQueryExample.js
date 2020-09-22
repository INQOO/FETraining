import jquery from 'jquery';

window.jQuery = jquery;
window.$ = jquery;


$(document).ready(function () {
  console.log('dziala')

  $('H1').click(() => {
    $('.testList').slideToggle()
  });

  $("#downloadButton").click(function(){
    $.get("https://run.mocky.io/v3/0eacf0e7-3b68-4949-9436-c76b13333078", function(data, status){
      data.cars.forEach(car => {
        $(`<li>${car.Name}</li>`).hide().appendTo('.carList').slideDown('slow');
      })
    });
  });
});


