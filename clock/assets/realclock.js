

var currentTime = new Date;

var hour = currentTime.getHours()



var backgroundchange;
var time = new Date().getHours();

function myFunction( ){

	if (hour < 7) {
  		backgroundchange = document.getElementById("body").style.color = "blue";
	} else if (hour < 18) {
  		backgroundchange = document.getElementById("body").style.color = "orange";
	} else {
  		backgroundchange = document.getElementById("body").style.color = "pink";
	}
}



var minutes = currentTime.getMinutes()
var totalMinutes = (hour * 60) + minutes;

var body = document.getElementById("body")
// populate existing dots
for(var i = 0, i < totalMinutes; i++){
	
	body.insertAdjacentHTML('beforeend',`
		<div class="dot">
			<p>1</p>
		</div>
	`
	)
}


// a set interval to add a dot every minute

setInterval(function(){

// 	add a dot

body.insertAdjacentHTML('beforeend',`
		<div class="dot">
			<p>1</p>
		</div>
	`
	)

if(hour < 7){
	// fill in
}


}, 60000)














