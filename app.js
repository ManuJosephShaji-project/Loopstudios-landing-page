$(document).ready(function(){
    $("#icon").click(function(){
      $("#side-nav").slideToggle("slow");
    });
  });

let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = year;