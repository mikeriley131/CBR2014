// HEADER IMAGE CHANGE ON PRIMARY NAV ITEM HOVER
$(document).ready(function() {
	$('.nav-item').mouseenter(function() {
	  var img = $(this).attr('data-headerimg'); 
	  $('img#header-img').attr('src', img);
	}).mouseleave(function() {
	  var img = $(this).attr('data-headerimg');
	  $('img#header-img').attr('src', img);
	});
});