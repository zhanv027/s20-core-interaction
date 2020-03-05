

var currentTime = new Date();

var hour = currentTime.getHours()

var time = new Date().getHours();


	if (hour >= 7 && hour < 18) {
  		document.getElementById("body").style.backgroundColor = "lightblue";
	} 
	else {
  		document.getElementById("body").style.backgroundColor = "black";
	}



var minutes = currentTime.getMinutes()
var totalMinutes = (hour * 60) + minutes;

var body = document.getElementById("body")
// populate existing dots
for(var i = 0; i < totalMinutes; i++) {
	
		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

	body.insertAdjacentHTML('beforeend',`
		<div class="dot" 
		style="background-color: rgb(${r}, ${g}, ${b}); border-radius: 50%; 
				width: 10vw; height: 10vw; text-align: center; font-size: 11vw; 
				font-family: 'Spartan', sans-serif; color: white;
				">1

		</div>
	`
	)
}


// a set interval to add a dot every minute
/*
setInterval(function(){

// 	add a dot
	for (var i = totalMinutes; i++) {

		var r = Math.ceil(Math.random()*255) + 130;
		var g = Math.round(Math.random()*255) + 160;
		var b = Math.floor(Math.random()*255) + 120;

	body.insertAdjacentHTML('beforeend',`
		<div class="dot" 
		style="background-color: rgb(${r}, ${g}, ${b}); border-radius: 50%; 
				width: 10vw; height: 10vw; text-align: center; font-size: 30px; 
				">1

		</div>
	`
	)

	if (hour >= 7 && hour < 18) {
  		document.getElementById("body").style.backgroundColor = "lightblue";
	} 
	else {
  		document.getElementById("body").style.backgroundColor = "black";
	}


}, 60000)


*/











