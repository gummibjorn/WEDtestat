function add(event){
    console.log(event.target.value || event.srcElement.value);	
}

function init(){
  var elements = document.getElementsByTagName("input");
  for(index = 2; index < elements.length; index++){
    elements[index].addEventListener("click", function() { add(event); }, false); 
  }	
}

window.addEventListener('load', init); 
