$(document).ready(function() {

//////	vars	///////

	var userLang = (navigator.userLanguage||navigator.language).split('').slice(0,2).join('');
	var navlangbutton = $('.nave .lang').html();


//////	TRY AND ERROR	///////



////////////////////////////////////////////////////////////////////////////////////////////////
//////	reload page
	//setTimeout(location.reload(), 10000);
	/*setTimeout(function() {
		location.reload()
	}, 1000);*/
//////	language of language buttons
	//userLang = 'es';///////remove to make it work
//$('.scrollhelp').html('asd');
//////	reload page
	//setTimeout(location.reload(), 10000);
	/*setTimeout(function() {
		location.reload()
	}, 1000);*/
//////	language of language buttons
	//userLang = 'es';///////remove to make it work
/////////////////////////////////////////////////////////////////////////////////////////////////	




//////	TRY AND ERROR END	///////




//////	Functionality	///////

	/// build mobile Nav	
	buildSelectNav('.menuitem', '.submenu', '.submenuitem','a','.smallnav');

	///	change language button for diferent clients
	if (userLang== 'en') {
		$('.lang').html('Language');

	}else if (userLang== 'es'||userLang== 'pt') {
		$('.lang').html('Idioma');
	}else {
		$('.lang').html('Language');
	}
	
	if (navlangbutton != 'Language') {
		$('.nave .buttons').css('margin-right', '20px');
	}

	///	.servicios hover anim
	if (checkUserHref() == 'index.html') {
		$('.servicios .thumbs').hover(function() {		
			if ($(window).width()>425) {
				$('.servicios .active').removeClass('active');
				$(this).addClass('active');
			}
		});
	}

	///	representaciones buttons
	if (checkUserHref() == 'index.html') {
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
	}

//////	Functions	///////

	///	check url
	function checkUserHref(argument) {
		return window.location.href.split('/').slice(-1).join();		
	}

	/// check section visibility

	function sectionVisible(targetSection) {
		if (checkUserHref() == 'index.html') {
			var windowHeight = $(window).height();
			var serviciosOffset = $(targetSection).offset().top;
			var scrollTop = $(window).scrollTop();
			typeof scrollTop == 'number' ? scrollTop : scrollTop = 0;
			return windowHeight > serviciosOffset - scrollTop;
		}
	}






	///	nave
	function buildSelectNav(dadLi,sonUl,sonLi,buttonTag,selectClass) {

		var navArray = [];
		$(dadLi).each(function() {

			navArray.push($(this).children(buttonTag).text());

			if ($(this).children().length > 1) {


				$(this).children($(sonUl)).children($(sonLi)).children(buttonTag).each(function() {
					var separator = '--';
					separator += $(this).text();
					navArray.push(separator);
				});

			}
		});
		for (var i = 0 ; i < navArray.length; i++) {
			var item = navArray[i].split(' ').join('-')
				.replace('--', '').replace('ê','e').replace('ñ','n')
				.replace('á','a').replace('é','e').replace('í','i')
				.replace('ó','o').replace('ú','u')
				.toLowerCase();
			if (item == 'inicio'|| item == 'espanol') {item = 'index';}
			var option = '<option value="'
						+item
						+'.html">'+navArray[i]
						+'</option>';
			$(selectClass).append(option);
		}
	}///	<< function build select nav
});




	