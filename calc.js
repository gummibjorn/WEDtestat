function add(a){
	console.log(a);
}

window.onload = function(){
document.getElementsByClassName("numberFields")[0].children[1].addEventListener("click", add(2), false);
};
