
var myRootDiv = document.getElementById("clock")

myRootDiv.insertAdjacentHTML('beforeend', `
		<div class="c1"></div>
	`)

var degrees = 0;

setInterval(function(){

	for (var i = 0; i < 50; i++) {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

		
		myRootDiv.insertAdjacentHTML('beforeend', `
			<div 
				class="c1"
				style="transform:background-color: rgb(${r}, ${g}, ${b});"
			></div>
		`)

	}

}, 5000)



/*If time is less than 7:00, create a "Good morning" greeting, 
if not, but time is less than 18:00 or 7pm, create a "Good day" greeting, 
otherwise a "Good evening":*/

function myFunction() {
  var backgroundchange;
  var time = new Date().getHours();
if (time < 7) {
  backgroundchange = document.getElementById("clock").style.color = "blue";
} else if (time < 18) {
  backgroundchange = document.getElementById("clock").style.color = "orange";
} else {
  backgroundchange = document.getElementById("clock").style.color = "pink";
}
document.getElementById("clock").innerHTML = backgroundchange;
}















