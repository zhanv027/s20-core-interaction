


var stem = document.getElementById('plant');
console.log(stem);

var firstWindow = document.querySelector("#plant .spot1:nth-of-type(3)");
var allWindows = document.querySelectorAll(".spot1, .spot2, .spot3, .spot4, .spot5");

console.log(firstWindow);
console.log(allWindows);



if (stem.classList.contains("small")) {

	stem.classList.remove("small");

}else{

	stem.classList.add("small");

}


var plantHeight = 1;

setInterval(function(){

	stem.style.borderBottom = "solid " + plantHeight + "rem purple";

	plantHeight = plantHeight + 1;

}, 500);




