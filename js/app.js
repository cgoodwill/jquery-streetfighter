$(document).ready(function() {


	$(document).keydown(function(key) {
		if(key.which==88) {
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	});

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();

	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}