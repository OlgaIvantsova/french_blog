$(document).ready(function () {
	$('.profile-rating').on('mouseover', 'a', function() {
		var curElem = $(this);
		curElem[0].classList.add('current');
		var stars = $('.star');
		for (var i = 0; i < stars.length; i++) {
			stars[i].classList.add('star-active');
			var flag = stars[i].classList.contains('current');
			if(flag) break;
		};
	});

	$('.profile-rating').on('mouseout', 'a', function() {
		var stars = $('.star');
		for (var i = 0; i < stars.length; i++) {
			stars[i].classList.remove('current');
			stars[i].classList.remove('star-active');
		}
	});

	$('#portfolio-button').click(function(e) {
		e.preventDefault();
		$('.profile-post').slideToggle();
	});

	$('.bookmarks a').click(function(e) {
		e.preventDefault();
		var link = $(this);
		$('.bookmarks-item').removeClass('bookmark-active');
		link.addClass('bookmark-active');
		var id = link.attr('id');
		var linksText = $('.bookmarks-item-text');
		linksText.removeClass('text-active');
		for (var i = 0; i < linksText.length; i++) {
			if(linksText[i].classList.contains(id)) {
				linksText[i].classList.add('text-active');
			}
		};
	});

});