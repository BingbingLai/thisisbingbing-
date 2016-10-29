var main = function() {
	var catEle = document.getElementById('cat');
	var count = parseInt(catEle);

	$('div').click(function() {
		count += 1;
		catEle.text(i);
	});
};

$(document).ready(main);