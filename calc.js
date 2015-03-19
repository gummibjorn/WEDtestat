"use strict";
var a, b, op, result;

function inputDigit(event){
  var digit = event.target.value;
  var display = jQuery(".header input");
  if(op === null){
    if(a === ""){
      //clear the 0 from start state
      display.val("");
    }
    a += digit;
  } else {
    b += digit;
  }
  display.val(display.val() + digit);
}

function sum(){
  result = op(parseInt(a),parseInt(b));
  reset();
  jQuery(".header input").val(result);
}

function reset(){
	a="";
	b="";
	op=null;
  jQuery(".header input").val(0);
}

function plus(a,b){ return a+b; };
function minus(a,b){ return a-b; };
function mult(a,b){ return a*b; };
function div(a,b){ return a/b; };

function init(){
  jQuery(".numberFields").click(function(event){
    inputDigit(event);
  });

  jQuery('.operations').children()
    .first().click(function(){ op = plus; })
    .next().click(function() { op = minus; })
    .next().click(function() { op = mult; })
    .next().click(function() { op = div; });

  jQuery('.operations').click(function(event){
    //weiterrechnen
    var display = jQuery(".header input");
    display.val(display.val() + event.target.value);
    if(result){
      a = result;
      b = "";
    }
  });

  jQuery('.sum').click(sum);
  reset();
}

window.addEventListener('load', init); 
