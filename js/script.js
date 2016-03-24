$(document).ready(function(event) {
  $("#triangle").submit(function(event) {


  var m1 = parseInt($("input#m1").val());
  var m2 = parseInt($("input#m2").val());
  var m3 = parseInt($("input#m3").val());
  debugger;

  if (m1 === m2 && m2 === m3) {
    $(".equilateral").show();
  }

  else if (m1 === m2) {
    $(".isosceles").show();
  }
  else if (m3 === m2)  {
    $(".isosceles").show();
  }

  else {
    $(".scalene").show();
  }
    event.preventDefault();
  });
});
