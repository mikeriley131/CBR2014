// HEADER IMAGE CHANGE ON PRIMARY NAV ITEM HOVER
$(document).ready(function() {
	$('.nav-item').mouseenter(function() {
	  var img = $(this).attr('data-headerimg');
	  var href = $(this).attr('data-headerlink');
	  $('img#header-img').attr('src', img).parent().attr('href', href);
	}).mouseleave(function() {
	  var img = $(this).attr('data-headerimg');
	  $('img#header-img').attr('src', img);
	});
});