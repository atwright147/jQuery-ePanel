/*!
* jQuery Plugin v1.0.1
* https://github.com/atwright147/jquery-accdn
*
* Copyright 2012, Andy Wright
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function($){

	$.fn.epanel = function(options) {  

		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'open_class'	: 'open',
			'closed_class'	: 'closed',
			'cookie_prefix'	: 'panel_',
			//'cursor'		: 'pointer',
			//'speed'			: 'fast',
			//'easing'		: 'linear',
			//'mode'			: 'class'  // class, hash, first
		}, options);

		var o = settings;
		//console.debug(settings);

		return this.each(function() {

			console.log(o);
			this.click(function() {
				parent_id = $(this).parent().attr('id');
				content = $('#' + parent_id + ' .content');
				if($(content).is(':visible')) {
					$('#' + parent_id).removeClass('open').addClass('closed');
					$.cookie(o.cookie_prefix + parent_id, 'closed');
				} else {
					$('#' + parent_id).removeClass('closed').addClass('open');
					$.cookie(o.cookie_prefix + parent_id, 'open');
				}
				$(content).slideToggle();
			});
			
			// init panels
			parent_id = $(this).attr('id');
			content = $('#' + parent_id + ' .content');
			switch($.cookie(o.cookie_prefix + parent_id)) {
				case 'closed':
					$('#' + parent_id).removeClass('open').addClass('closed');
					$(content).hide();
					break;

				case 'open':
					$('#' + parent_id).removeClass('closed').addClass('open');
					break;

				default:
					console.log('hasClass: ' + $('#' + parent_id).hasClass('closed'));
					if($('#' + parent_id).hasClass('closed')) {
						$(content).hide();
					}
					break;
			}

		});

	};

})(jQuery);