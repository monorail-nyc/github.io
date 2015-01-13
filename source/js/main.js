(function($) {

var justExecuted = false;
var introServices = false;
var introWork = false;

$(window).on('scroll', function() {
	// Slow down event execution with timeout set below
	if ( justExecuted ) {
		return;
	}

	// Cache all values and elements used below
	var $body = $('body'),
	    $scrollPosition = $body.scrollTop();

	console.log($scrollPosition); // for testing breakpoints

	// Switch became increasingly efficient here
	switch( true ) {
		case ($scrollPosition > 1200):
            if (!introWork) {
                introWork = true; 
                $('#work .screenshots').addClass('animated fadeInUp visible');
                $('#work .app-icon').addClass('animated fadeInDown visible');
            } else {
                return false;
            }
			break;

		case ($scrollPosition > 350):
            if (!introServices) {
                introServices = true; 
                $('.services li').addClass('animated fadeInUp visible');
            } else {
                return false;
            }
			break;

	}

	// Reset timeout periodically (increase for better performance, but decreased accuracy)
	justExecuted = true;
	setTimeout(function() {
		justExecuted = false;
	}, 100);

});

})(jQuery);
