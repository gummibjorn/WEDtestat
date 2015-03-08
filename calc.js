function add(a){
    console.log(a);	
}

function init(){
  document.getElementsByClassName("numberFields")[0].children[1].addEventListener("click", function() { add(2); }, false);
  document.getElementsByClassName("numberFields")[0].children[2].addEventListener("click", function() { add(3); }, false);
  document.getElementsByClassName("numberFields")[0].children[3].addEventListener("click", function() { add(4); }, false);
  document.getElementsByClassName("numberFields")[0].children[4].addEventListener("click", function() { add(5); }, false);
  document.getElementsByClassName("numberFields")[0].children[5].addEventListener("click", function() { add(6); }, false);
  document.getElementsByClassName("numberFields")[0].children[6].addEventListener("click", function() { add(7); }, false);
  document.getElementsByClassName("numberFields")[0].children[7].addEventListener("click", function() { add(8); }, false);
  document.getElementsByClassName("numberFields")[0].children[8].addEventListener("click", function() { add(9); }, false);
}

window.addEventListener('load', init); 
