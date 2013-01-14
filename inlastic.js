/*
* InLastic from Cloud Laboratories LTD.
* Copyright 2013 (c) Cloud Laboratories LTD.
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

(function($) {
  jQuery.fn.inlastic = function() { var inlasticButton = $(this).children(); inlasticButton.mouseenter(function() { var inlasticBoxButton = $(this); var inlasticBox = inlasticBoxButton.children(); inlasticBoxButton.addClass('bgf', 700); inlasticBoxButton.addClass('sixbr', 200); var height = inlasticBox.height(); var width = inlasticBox.width(); inlasticBoxButton.animate({ height: height + 10, width: width + 20 }, 200, function() { inlasticBox.show(); }); }); inlasticButton.mouseleave(function() { var inlasticBoxButton = $(this); var inlasticBox = inlasticBoxButton.children(); inlasticBox.hide(); inlasticBoxButton.animate({ width:30, height: 30 }, 50, function() { inlasticBoxButton.removeClass('bgf', 700); inlasticBoxButton.removeClass('sixbr',200); }); }); };
})(jQuery);
