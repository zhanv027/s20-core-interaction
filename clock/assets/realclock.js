
//Initial setup
var body = document.getElementById("body")
var clock = document.getElementById("clock")

var currentTime = new Date();
var hour = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = new Date().getSeconds();
var totalMinutes = (hour * 60) + minutes;


	changeBackground();

// document.getElementById("one").style.font-size = 100%;




// populate existing dots
for(var i = 0; i < totalMinutes; i++) {
	
	createDot();
}

// a set interval to add a dot every minute

setInterval(function(){
	var hour = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();

// 	add a dot

	if(new Date().getSeconds() === 0) createDot();

	if(hour === 0 && minutes === 0 && seconds === 0){
		clock.innerHTML = "";
	}
	// if ()

	changeBackground();




	//}
}, 1000)

//update every second
function createDot() {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;
		var x = Math.floor(Math.random()*100);
		var y = Math.floor(Math.random()*100);

	clock.insertAdjacentHTML('beforeend',`
		<div class="dot" 
		style="background-color: rgb(${r}, ${g}, ${b}); border-radius: 50%; 
				width: 2vw; height: 2vw; text-align: center; font-size: .25vw; 
				font-family: 'Spartan', sans-serif; color: white;
				position: absolute; left: ${x}%; top: ${y}%; z-index: ${i};
				">
				<div class="one"
				style="font-size: 500%; position: relative; opacity: .5;
				">.
				</div>

		</div>
	`
	)

	console.log("dot added");
}


function changeBackground() {
	var hour = currentTime.getHours();

		if (hour >= 7 && hour < 18) {
  		clock.style.backgroundColor = "lightblue";
  		body.style.backgroundColor = "lightblue";
	} 
	else {
  		clock.style.backgroundColor = "black";
  		body.style.backgroundColor = "black";
	}
}





