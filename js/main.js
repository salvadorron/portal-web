$(document).ready(function(){
	$('.menu li:has(ul)').click(function(e){

		e.preventDefault();

		if($(this).hasClass('enabled')){
			$(this).removeClass('enabled')
			$(this).children('ul').slideUp();
		}else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('enabled');
			$(this).addClass('enabled');
			$(this).children('ul').slideDown();
		}

	});
});