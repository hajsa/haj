$(document).ready(function() {	
	





	function slider() {
		return {
		
			amount:$('.slidercontainer .slides').length,
			width:$('.slidercontainer .imgcontainer').width(),
			left: $('.slidercontainer .slides').position().left,
			dad: $('.slidercontainer .imgcontainer'),
			sons: $('.slidercontainer .slides'),
			sonwidth: $('.slidercontainer .slides').width(),
			sonheight: $('.slidercontainer .slides').height(),
			dadheight: $('.slidercontainer .imgcontainer').height()
		}

	}


	function slideWait(){
		
		if (sliderPlay == true) {
			slideNext()			
		}
		setTimeout(slideWait, 5000);
	}


	function slideNext(){
		if (currentSlide >= slider().amount-1) {
		currentSlide = 0;			
		$('.slidercontainer .imgcontainer')
		.css('left','0%');
		}else{
			$('.slidercontainer .imgcontainer')
			.css('left', 
			-((currentSlide+1)*100)
			+'%');
			currentSlide ++;
			
		}
		sqActive();
	}


	function slidePrev(){
		if (currentSlide <= 0) {
			currentSlide = slider().amount-1;			
			$('.slidercontainer .imgcontainer')
			.css('left', 
			-((currentSlide)*100)
			+'%');

		}else{
			currentSlide --;
			$('.slidercontainer .imgcontainer')
			.css('left', 
			-((currentSlide)*100)
			+'%');
		}
		sqActive();
	}

	function selectSlide(argument) {
		$('.slidercontainer .imgcontainer')
			.css('left', 
			-((currentSlide)*100)
			+'%');
		sqActive();
	}


	function dadWidth() {
		return 100 * slider().amount;
	}
	function sonsWidth() {
		return 100 / slider().amount;

	}

	
	function sqActive(){
		$('.slidercontainer .sq').removeClass('active');
		$('.slidercontainer .sq').eq(currentSlide).addClass('active');
			
	}


//////////////			stop slider
	$('.slidercontainer .slides, .controls .left,.controls.right').mouseenter(function(event) {
		sliderPlay = false;
	});
	$('.slidercontainer .slides, .controls .left,.controls.right').mouseleave(function(event) {
		sliderPlay = true;
	});




////////////////		buttons
	$('.slidercontainer .controls .right').click(function() {		
		
		slideNext();
	});

	$('.slidercontainer .controls .left').click(function() {		
		
		slidePrev();
	});


	$('.slidercontainer .imgselectors').mouseenter(function(event) {
		$('.slidercontainer .imgselectors .active').css('height', '1rem');
	});
	$('.slidercontainer .imgselectors').mouseleave(function(event) {
		$('.slidercontainer .imgselectors .active').css('height', '1.3rem');
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

////////////			resizing




	$(window).resize(function(event) {
		slider().dad.css('width', dadWidth() + '%');
		slider().sons.css('width', sonsWidth() + '%');
		slider().sons.css('height', (((slider().sonwidth*440)/1024)-10)+'px');
		stopSliderOnScroll();

	});

	slider().dad.css('width', dadWidth() + '%');
	slider().sons.css('width', sonsWidth() + '%');
	slider().sons.css('height', (((slider().sonwidth*440)/1024)-10)+'px');

	

	

///////////// append .SQuares



	for (var i = 2; i < slider().amount+1; i++) {
		$('.slidercontainer .imgselectors').append('<div class="sq s'+i+'"></div>');
	}
	//the first <div class='sq active'> added in html 
	//$('.slidercontainer .imgselectors .sq').addClass('active');

	//$('.slidercontainer .imgselectors .sq').toArray();
		
	$('.slidercontainer .imgselectors .sq').click(function(event) {

		currentSlide = $(this).index('.imgselectors'/'.sq'-2);
		sliderPlay = false;
		selectSlide();
	});

	

	
//////////////

	slideWait();
	var sliderPlay = true;	
	var currentSlide = 0;
		
		

	




//////stop slider on scroll

	$(window).scroll(function() {
		stopSliderOnScroll();
	});



	function stopSliderOnScroll() {
		var offsetslider = $('.slidercontainer').height()+$('.slidercontainer').offset().top;
		var zeroStop = $(window).scrollTop()-offsetslider;
		if (zeroStop>0) {
			sliderPlay=false;
		}else{
			sliderPlay=true;

		}
	}










//////////////////




});