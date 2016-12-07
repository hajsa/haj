$(document).ready(function() {
	
///nave

	

	function buildSelectNav(dadLi,sonUl,sonLi,buttonTag,selectClass) {

		var navArray = [];
		$(dadLi).each(function() {

			navArray.push($(this).children(buttonTag).text());

			if ($(this).children().length > 1) {


				$(this).children($(sonUl)).children($(sonLi)).children(buttonTag).each(function() {
					var separator = '-- ';
					separator += $(this).text();
					navArray.push(separator);
				});

			}
		});
		for (var i = 0 ; i < navArray.length; i++) {
			var option = '<option value="'
				+navArray[i].split(' ').join('')
				.replace('--', '').replace('ê','e').replace('ñ','n')
				.replace('á','a').replace('é','e').replace('í','i')
				.replace('ó','o').replace('ú','u')
				.toLowerCase()
				+'">'+navArray[i]
				+'</option>';
			$(selectClass).append(option);
		}

		


		
	}////////////
	buildSelectNav('.menuitem', '.submenu', '.submenuitem','a','.smallnav');





/////end nave



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




	