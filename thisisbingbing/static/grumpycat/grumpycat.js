// var main = function() {
// 	$('.circle').click( function() {
// 		$('float').effect('bounce', {time:1}, 100);
// 	});
// };

// $(document).ready(main);

var bio = {
		"name": "Meow",
		"job": "enjoy the life",
		"skill": "jumping",
		"language": "meowmeow"
	};
bio.education = "Harvard";
bio["country"] = "Fuzhou";
bio.project = function() {
	$('p').prepend(bio);
};
var main = function() {
	var i = 1;
	$('div').click(function(){
		i += 1;
		$('em').text(i);
	});
	$('p').append(bio.education);
	$('div').append(bio["country"]);
	bio.project;
};

$(document).ready(main);