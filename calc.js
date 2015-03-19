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

function init(){
  jQuery(".numberFields").click(function(event){
    inputDigit(event);
  });

  jQuery('.operations').children()
    .first().click(function(){ op = function(a,b) { return a+b; }})
    .next().click(function() { op = function(a,b) { return a-b; }})
    .next().click(function() { op = function(a,b) { return a*b; }})
    .next().click(function() { op = function(a,b) { return a/b; }});

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
