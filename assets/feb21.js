console.log("Hello!");



//variables

var myString = "this is a string"

var myBoolean = true;
var myOtherBoolean = false;

var myFloat = 1.23456;
var myInteger = 5; //whole numbers

var myArray = ["apple", "orange", "pear"];
//list

var myObjects = {
	key : "a value",
	anArray : ["my", "array"],
	aNumber : 22
};

//console.log(myObjects.aNumber);

//document means find html page
//getElementById means get one Id in html page

var square = document.getElementById("square");

//query for class and group, select everything in the class
var circles = document.querySelectorAll(".circle");

//nodelist from console shows all divs selected
//console.log(circles);

//won't override square unless it was not defined in css
square.classList.add("circle");
//add and remove class
square.classList.remove("circle");

//styling like css
//var red = "rgb(255,0,0)";
//square.style.backgroundColor = red;



//starting variables
var red = 255;
var green = 0;
var blue = 0;


var towardsBlue = true;

//what to do and how long
setInterval(function(){
	//template literal: ${} means put in variable
	square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	
	//slowly turning from red to magenta
	//blue = blue + 40;
//add blue 40 to the 255 red and a red that subtracts 40
//in css can add transition for background-color 

	//red = red - 40;

	/*setTimeout(function(){
		console.log(blue);
	}, 1000)*/
// === checks if it's a string 

/*
	"pseudo code"
	I want my square to go from red to blue then back
	square: make a div for that
	change the color every half second
	red to blue
	how do I define red? blue? color? rgb...
	then back?
	if something is blue turn it back to red
		if(something = blue){

			towards red

		}

	if something is red turn it back to blue

*/

	if(towardsBlue == true){
		blue = blue + 40;
		red = red - 40;
	}else{
		blue = blue - 40;
		red = red + 40;

	}
//&& means and
	if(blue >= 255 && red <= 0){
		towardsBlue = false;
	}else if(red >= 255 && blue <= 0){
		towardsBlue = true;
	}
//if we reach the maximums, switch direction

	
	//square.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}, 500)

/* New Section LOOPS*/

/*while(something){

	//do something

} */


//while loop
var j = 0;

while(j < 10){

	//do something
	//console.log(i);

	j = j + 1;
}

//i++ means i +1 and i-- subtracts 1
//for loops used for classes
console.log("circles", circles.length)


for (var i = 0; i < circles.length; i++) {
	//console.log(circles[i])
	circles[i].style.borderWidth = (i + 1)*2 + "px"; //strings
	circles[i].style.borderWidth = `${(i + 1)*2}px`; //template literals
}

//innerHTML adds content

for (var i = 0; i < 100; i++)

var title = document.querySelector("h1");

//inside of HTML element
//output content
console.log(title.innerHTML)

//redefined content
//change the title/h1 words
title.innerHTML = "Hellooooo";

//add to end of content
//add words to the string with +=
title.innerHTML += " everyone";

title.innerHTML = "wait, " + title.innerHTML;




//insertAdjacentHTML adds new element
var container = document.getElementById("container")

//container.insertAdjacentHTML('location', 'content')

container.insertAdjacentHTML('beforeend', `
		<div class="circle"></div>
	`)

var degrees = 0;

setInterval(function(){

	for (var i = 0; i < 10; i++) {

		//1.001 it will round to 2 w/ Math.ceil
		//1.999 = 1 w/ Math.floor
		var r = Math.ceil(Math.random()*255); //144.77989
		var b = Math.round(Math.random()*255);
		var g = Math.floor(Math.random()*255);

	container.insertAdjacentHTML('beforeend', `
		<div 
			class="circle"
			style="transform:skew(${degrees}deg);
				background-color: rgb(${r}, ${g}, ${b});"
		>hello!</div>
	`)
	degrees = degrees + 5;

	}

}, 1000)

//call specific date
var now = new Date();
var clock = `${now.getHours()}: ${now.getSeconds}`

//console.log(Date.now()) get specific time now

//console.log(now.getHours()+ ";" + now.getSeconds())
setInterval(function(){

}, 1000)






















