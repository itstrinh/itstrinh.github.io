$(document).ready(function() {

	$(window).scroll(function() {
		var MENU_HEIGHT = 120; /* Adjust as necessary. */
		var poster = $(".poster");
		if ($(window).scrollTop() >= MENU_HEIGHT) {
			if (!poster.hasClass("poster-static")) {
				poster.addClass("poster-static");
			}
		}
		else {
			if (poster.hasClass("poster-static")) {
				poster.removeClass("poster-static");
			}
		}
	});

});