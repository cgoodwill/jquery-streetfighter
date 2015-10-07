$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseenter(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
});