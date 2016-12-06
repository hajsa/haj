$(document).ready(function() {	


	function slider() {
		return {
		
			amount:$('.hero .slides').length,
			width:$('.hero .imgcontainer').width(),
			left: $('.hero .slides').position().left,
			dad: $('.hero .imgcontainer'),
			sons: $('.hero .slides'),
			sonwidth: $('.hero .slides').width()
		}

	}

	function dadWidth() {
		return 100 * slider().amount;
	}
	function sonsWidth() {
		return 100 / slider().amount;

	}

	function slideWait(){
		
		setTimeout(slideWait, 3000);
		if (sliderPlay == true) {
			slideNext()			
		}
	}


	function slideNext(){
		if (currentSlide >= slider().amount-1) {
		currentSlide = 0;			
		$('.hero .imgcontainer')
		.css('left','0%');
		}else{
			$('.hero .imgcontainer')
			.css('left', 
			-((currentSlide+1)*100)
			+'%');
			currentSlide ++;
		}
	}


	function slidePrev(){
		if (currentSlide <= 0) {
			currentSlide = slider().amount-1;			
			$('.hero .imgcontainer')
			.css('left', 
			-((currentSlide)*100)
			+'%');

		}else{
			currentSlide --;
			$('.hero .imgcontainer')
			.css('left', 
			-((currentSlide)*100)
			+'%');
		}
	}

	$('.hero .slides, .left ,.right').mouseenter(function(event) {
		sliderPlay = false;
	});
	$('.hero .slides, .left ,.right').mouseleave(function(event) {
		sliderPlay = true;
	});

	slider().dad.css('width', dadWidth() + '%');
	slider().sons.css('width', sonsWidth() + '%');
	


	$(window).resize(function(event) {
		console.log('caca');
		slider().dad.css('width', dadWidth() + '%');
		slider().sons.css('width', sonsWidth() + '%');
	});



	$('.hero .controls .right').click(function() {		
		
		slideNext();
	});

	$('.hero .controls .left').click(function() {		
		
		slidePrev();
	});

	$('body').keydown(function(event) {
		if (event.keyCode==37) {
			sliderPlay = false;
			slidePrev();
		}
		else if (event.keyCode==39) {
			slideNext();
		}
	});




	slideWait();
	var sliderPlay = true;	
	var currentSlide = 0;
});