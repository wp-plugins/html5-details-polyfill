(function($) {	

	$(document).ready(function(){
	
		$('html').addClass($.fn.details.support ? 'details' : 'no-details');	
		$('details').details();

	});

})( jQuery );