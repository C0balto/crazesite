var myCarousel = 0;
var time
var clock = 4000; // setando o tempo do relogio
var running = true;
var first = true;
volta();

function carousel() {
	if(running == true){
		var i;
		var x = document.getElementsByClassName('slides');
		for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		}
		myCarousel++;
		if (myCarousel > x.length) {myCarousel = 1}    
		x[myCarousel-1].style.display = "block";
		time = setTimeout(carousel, clock); 
	}
}
	
function Stop() {
	running = false;
}
function volta() {
    
	var aux = first ? setTimeout(function() { running = true; carousel()}, 1) : setTimeout(function() { running = true; carousel()}, clock);
	first = false;
}

function navigator(index) {
	
	var a = document.getElementsByClassName('slides');
	 for(i = 0; i < a.length; i++) {
		 a[i].style.display ='none';
		 	if(index == i){
				 a[i].style.display = 'block'
				 clearTimeout(time);
				 time = setTimeout(carousel, clock); 				 
			 }

	 }

 }
