$(document).ready(function() {
	$('.ld-hover, .ld-scroll').hide();
	var w = $(window);
	var text = "";
	w.scroll(function() {
		$('.ld-scroll').each(function() {
			var lf = $(this).attr("ld-for");
			var to = $(this).offset().top - w.scrollTop;
			console.log(to);
			$(lf).each(function() {
				var offset = $(this).offset();
				var top = offset.top + to;
				if(top <= w.scrollTop()) {
					text = $(this).attr('ld-info');
				}
			});
			$(this).html(text);
		});
	});

	$('.ld-hover').each(function() {
		var to = $(this);
		var lf = $(this).attr("ld-for");
		var ofs = 0;
		if(to.attr("ld-offset") != undefined) {
			ofs = to.attr("ld-offset");
		}
		$(lf).mousemove(function(evt) {
			to.children('p').html($(this).attr("ld-info"));
			if(to.hasClass("ld-follow-mouse")) {
				to.css('top', evt.pageY + parseInt(ofs));
			} else {
				to.css('top', $(this).offset().top + ofs);
			}
			to.show();
		});
		$(lf).mouseout(function(evt) {
			to.hide();
		});
	});
});