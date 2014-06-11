// HEADER IMAGE CHANGE ON PRIMARY NAV ITEM HOVER
$(document).ready(function() {
	var img = $(this).attr('data-headerimg');
	$('.nav-item').mouseenter(function() { 
	  $('img#header-img').attr('src', img);
	}).mouseleave(function() {
	  $('img#header-img').attr('src', img);
	});
});