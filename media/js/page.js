jQuery(document).ready(function($) {
		function load(page) {
			$('#content').load(page +".html");
		}

		$.history.init(function(url) {
				load(url == "" ? "home" : url);
				$(document).scrollTop(0); 
			});

		$("a[rel='page']").live('click', function(e) {
				var url = $(this).attr('href');
				url = url.replace(/^.*#/, '');
				load(url);
				$.history.load(url);
				return false;
			});
	});