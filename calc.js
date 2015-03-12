"use strict";
var a, b, op, result;

function inputDigit(event){
    var digit = event.target.value;
    var display = document.getElementsByTagName("input")[0];
    if(op === null){
      if(a === ""){
        display.value = "";
      }
      a += digit;
    } else {
      b += digit;
    }
    display.value = display.value + digit;
}

function sum(){
  result = op(parseInt(a),parseInt(b));
  reset();
  document.getElementsByTagName("input")[0].value = result;
}

function reset(){
	a="";
	b="";
	op=null;
  var display = document.getElementsByTagName("input")[0];
  display.value = "0";
}

function init(){
  var numbers = document.getElementsByClassName("numberFields")[0].getElementsByTagName("input");
  for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function() { inputDigit(event); }, false);
  }

  var operations = document.getElementsByClassName("operations")[0].getElementsByTagName("input");
  operations[0].addEventListener("click", function() { op = function(a,b) { return a+b }});
  operations[1].addEventListener("click", function() { op = function(a,b) { return a-b }});
  operations[2].addEventListener("click", function() { op = function(a,b) { return a*b }});
  operations[3].addEventListener("click", function() { op = function(a,b) { return a/b }});
  for(var i = 0; i < operations.length; i++){
    operations[i].addEventListener("click", function(event) {
      //weiterrechnen
      var display = document.getElementsByTagName("input")[0];
      display.value = display.value + event.target.value;
      if(result){
        a = result;
        b = "";
      }

    });
  }
  document.getElementsByClassName("sum")[0].getElementsByTagName("input")[0].addEventListener("click", function() { sum(); });

  reset();
}

window.addEventListener('load', init); 
