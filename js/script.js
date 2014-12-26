var main = function() {

	$('.button').click(function(){
		$('.button').removeClass('selected')
		$(this).addClass('selected');
	});



};

$(document).ready(main);