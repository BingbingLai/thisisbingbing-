var main = function() {
  $('.day').click(function() {
    $(this).next().toggle();
    $(this).find('.weekday span').toggleClass('glyphicon glyphicon-plus');
});
};

$(document).ready(main);