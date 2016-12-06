$(document).ready(function() {
	
//slider
	
	
		
		

	

////////////////////


$('.hero .caca').click(function(event) {

		
		console.log('slider().amount : '+slider().amount);
		console.log(
			'currentSlide*100+"%":  '+
			currentSlide*100+'%'

			);
		

		

});





//////////////



//representaciones
	$('.representaciones .sel-uy').click(function() {
		$('.representaciones div').removeClass('active');
		$('.country .uy').addClass('active');
		$('.sub button').removeClass('active');
		$(this).addClass('active');
	});
	$('.representaciones .sel-arg').click(function() {
		$('.representaciones div').removeClass('active');
		$('.country .arg').addClass('active');
		$('.sub button').removeClass('active');
		$(this).addClass('active');
	});
	$('.representaciones .sel-py').click(function() {
		$('.representaciones div').removeClass('active');
		$('.country .py').addClass('active');
		$('.sub button').removeClass('active');
		$(this).addClass('active');
	});

//servicios
	$('.servicios .thumbs').hover(function() {
		$('.servicios .active').removeClass('active');
		$(this).addClass('active');
	});

	




});




	