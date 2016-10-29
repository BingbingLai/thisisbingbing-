var main = function () {
	var i = 1;
	$('div').click(function() {
		$('b').text(i);
		i++ ;
	});
};

$(document).ready(main);