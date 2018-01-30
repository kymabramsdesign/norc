jQuery(function() {
	var bubble_popup_src = 'specials/bubble/index.php';
	var bubble_popup_source = '*Data come from the Media Insight Project (2,199 American adults) and a study of people’s trust in news from the media (2,036 American adults). Distribution of Respondents by Political Identification: 35% Democrat | 24% Republican | 41% independent';
	var line_popup_src = 'line/index.html';
	var line_popup_source = '*Groups within each demographic category are comparable, for example, Black to White within Race. However, when selecting groups across demographic categories, the groups will not change. That is, selecting Black and Midwest will produce results for all Blacks compared to all respondents from the Midwest. Data are limited to 1998-2016. Number of respondents range from a low of 430 in 2004 to a high of 896 respondents in 2006. We did not control for current employment due to sample size.';
	var graph3_src = 'chart3/index.php';
	var graph4_src = 'chart4/index.php';

	//delay load fontawesome
	setTimeout(function() {
		jQuery('body').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">');
	}, 250);
	
	function show_popup(iframe_src, source, theme, data) {
		function hide_popup() {
			if (!hidden) {
				hidden = true;
				popup_background.fadeOut(250, function() {
					popup_background.remove();
				});
				popup.fadeOut(250, function() {
					popup.remove();
				});
			
				jQuery('body').css('overflow','');
			}
		}
		jQuery('body').css('overflow','hidden');

		var ifr = '<iframe src="' + iframe_src + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe>';

		var popup_background = jQuery('<div class="graph-popup-background" />');
		var popup = jQuery('<div class="graph-popup-foreground" />');
		popup.addClass('theme-' + theme);
		var hidden = false;

		popup.append(ifr);

		popup.append('<div class="graph-popup-source">' + source + '</div>');

		var btn_close = jQuery('<div class="graph-popup-close"><span></span></div>');

		popup.append(btn_close);

		var facebook_url = data.shareUrlFacebook;
		var twitter_url = data.shareUrlTwitter;
		var linkedin_url = data.shareUrlLinkedin;

		if (facebook_url || twitter_url || linkedin_url) {
			var social_container = jQuery('<div class="graph-popup-social-links">');

			if (facebook_url) {
				social_container.append('<a class="gps-facebook" href="' + facebook_url + '" target="_blank" rel="noopener"></a>');
			}
			if (twitter_url) {
				social_container.append('<a class="gps-twitter" href="' + twitter_url + '" target="_blank" rel="noopener"></a>');
			}
			if (linkedin_url) {
				social_container.append('<a class="gps-linkedin" href="' + linkedin_url + '" target="_blank" rel="noopener"></a>');
			}

			social_container.on('click', 'a', function() {
				var href = jQuery(this).attr('href');
				window.open(href,'socialshare','width=600,height=400');
				return false;
			});

			popup.append(social_container);
		}		

		jQuery('body').append(popup, popup_background);

		btn_close.click(function() {
			hide_popup();
		});
		popup_background.click(function() {
			hide_popup();
		})
	}

	jQuery('.bubble-graph-popup').click(function() {

		show_popup(bubble_popup_src, bubble_popup_source, 'light', jQuery(this).data());

		return false;
	});
	jQuery('.line-graph-popup').click(function() {

		show_popup(line_popup_src, line_popup_source, 'dark', jQuery(this).data());

		return false;
	});
	jQuery('.graph3-popup').click(function() {

		show_popup(graph3_src, '', 'light', jQuery(this).data());

		return false;
	});
	jQuery('.graph4-popup').click(function() {

		show_popup(graph4_src, '', 'dark', jQuery(this).data());

		return false;
	});
});
