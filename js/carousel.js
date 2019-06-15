var myCarousel = 0;
var running = true;
var first = true;
carousel();
setInterval(carousel, 4000);

$('.slides').mouseover(pare);
$('.slides').mouseout(volta);

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
		highlightdot(myCarousel -1);
	}
}


function pare() {
	running = false;
}

function volta() {
	running = true;
}

function navigator(index) {
	var a = document.getElementsByClassName('slides');
	for(i = 0; i < a.length; i++) {
		a[i].style.display ='none';
	}
	highlightdot(index);
	a[index].style.display = 'block';
	myCarousel = index;
}

function highlightdot(index) {
	var circle = document.getElementsByClassName('circle-caption');

	for(i = 0; i < circle.length; i++) {
		circle[i].className = circle[i].className.replace(' active', ''); 
	}
	circle[index].className += ' active';
	
}

