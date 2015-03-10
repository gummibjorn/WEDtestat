var a="";
var op="";
var res="";
var b="";

function add(event){
    a  = a.concat(event.target.value);	
    var oldvalue = document.getElementsByTagName("input")[0];
    if(res != "" && op == ""){
	oldvalue.value="";
    }
    oldvalue.value = oldvalue.value + a;
}

function operation(event){
	if(res != ""){
		b=res;
	}else{
	        b=a;
	}
	op=event.target.value;
        var oldvalue=document.getElementsByTagName("input")[0];
	oldvalue.value = oldvalue.value + op;
	a="";
}

function addition(){
	res = parseInt(b) + parseInt(a);	
}	


function multiply(){
	res = parseInt(b) * parseInt(a);	
}	

function minus(){
	res = parseInt(b) - parseInt(a);	
}	

function divide(){
	res = parseInt(b) / parseInt(a);	
}	


function calc(){
	switch(op){
	case "+":
		addition();
		break;
	case "-":
		minus();
		break;
	case "*":
		multiply();
		break;
	case "/":
		divide();
		break;
	}
        document.getElementsByTagName("input")[0].value = res;
	a="";
	b="";
	op="";
}

function init(){
  var elements = document.getElementsByTagName("input");
  elements[0].value="";
  for(index = 2; index < elements.length-5; index++){
    elements[index].addEventListener("click", function() { add(event); }, false); 
  }
  for(index = 11; index < elements.length-1; index++){
    elements[index].addEventListener("click", function() { operation(event); }, false); 
  }	
  elements[15].addEventListener("click", function() { calc(); }, false);
}

window.addEventListener('load', init); 
