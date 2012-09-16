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
			'cursor'		: 'pointer',
			'speed'			: 'fast',
			'easing'		: 'linear',
			'mode'			: 'class'  // class, hash, first
		}, options);

		var o = settings;
		var classes = o.open_class + ' ' + o.closed_class;

		return this.each(function() {

			$this   = $(this);
			$header = $this.find('.header');

			$header.click(function() {
				$this     = $(this);
				$content  = $this.siblings('div.content');
				$panel_id = $(this).parent('div').attr('id');
				$this.parent('div').toggleClass(classes);
				if($content.is(':visible')) {
					jQuery.cookie(o.cookie_prefix + $panel_id, o.closed_class);
				} else {
					jQuery.cookie(o.cookie_prefix + $panel_id, o.open_class);
				}
				$content.slideToggle(o.speed, o.easing);
			}).css('cursor','pointer');
			
			// init panels
			$panel_id = $this.attr('id');
			$content  = $this.children('div.content');
			switch($.cookie(o.cookie_prefix + $panel_id)) {
				case 'closed':
					$header.removeClass(o.open_class).addClass(o.closed_class);
					$content.hide();
					break;

				case 'open':
					$header.removeClass(o.closed_class).addClass(o.open_class);
					break;

				default:
					if($this.hasClass('closed')) {
						$content.hide();
					}
					break;
			}
		});

	};

})(jQuery);