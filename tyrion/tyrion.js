$(document).ready(function() {
	var w = $(window);
	var text = "";
	w.scroll(function() {
		$('*[ld-for]').each(function() {
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
});