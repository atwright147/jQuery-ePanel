/*!
* jQuery Plugin v0
* https://github.com/atwright147/jquery-epanel
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

			$this   = $(this);
			$header = $this.find('.header');
			classes = o.open_class + ' ' + o.closed_class;

			$header.click(function() {
				$this = $(this);
				console.log($this);
				$content = $this.siblings('div.content');
				console.log($this.toggleClass(classes));
				if($content.is(':visible')) {
					//$.cookie(o.cookie_prefix + $panel_id, o.closed_class);
				} else {
					//$.cookie(o.cookie_prefix + $panel_id, o.open_class);
				}
				$content.slideToggle();
			}).css('cursor','pointer');
			
			// init panels
			//parent_id = $(this).attr('id');
			//content = $('#' + parent_id + ' .content');
			/*
			switch($.cookie(o.cookie_prefix + $panel_id)) {
				case 'closed':
					$header.toggleClass(o.open_class + ' ' + o.closed_class);
					$content.hide();
					break;

				case 'open':
					$toggleClass(o.open_class + ' ' + o.closed_class);
					break;

				default:
					//console.log('hasClass: ' + $('#' + parent_id).hasClass('closed'));
					if($panel.hasClass('closed')) {
						$content.hide();
					}
					break;
			}
			*/
		});

	};

})(jQuery);