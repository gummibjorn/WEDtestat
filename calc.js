var a="";
var b="";
var op="";
function add(event){
    a  = a.concat(event.target.value || event.srcElement.value);	
    document.getElementsByTagName("input")[0].value = a;
}

function operation(event){
	b=a;
	op=event.target.value;
	a="";
}

function calc(){
	var res = parseInt(b) + parseInt(a);
	console.log(res);
	a="";
	b="";
}

function init(){
  var elements = document.getElementsByTagName("input");
  for(index = 2; index < elements.length-5; index++){
    elements[index].addEventListener("click", function() { add(event); }, false); 
  }
  for(index = 11; index < elements.length-1; index++){
    elements[index].addEventListener("click", function() { operation(event); }, false); 
  }	
  elements[15].addEventListener("click", function() { calc(); }, false);
}

window.addEventListener('load', init); 
