

var myMod1 = document.querySelector(".mod1");


	for (var i = 0; i < 50; i++) {

		var r = Math.ceil(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		
		var myModule = `
		    	<div 
					class=".mod1"
					style="background-color: rgb(${r}, ${g}, ${b});"
				>.</div>
		`;
	
	myMod1.insertAdjacentHTML('beforeend', myModule)

}