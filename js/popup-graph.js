jQuery(function() {
	var bubble_popup_src = 'specials/bubble/index.php';
	var bubble_popup_source = '*The interactive includes 100 blue circles (Democrat), 100 red circles (Republican), and 100 white circles (independent). Once dots are sorted into Yes or No category, their position is random. Distribution of respondents by Political Identification: 35% Democrat, 24% Republican, 41% Independent.';
	var line_popup_src = 'specials/line/index.html';
	var line_popup_source = '*Rates are comparable within each demographic category (e.g. Female to Male within Gender), but not across categories (e.g. Female to Republican). Number of respondents range from 430 (2004) to 896 (2006). Data are weighted. We did not control for current employment due to sample size.';
	var graph3_src = 'specials/chart3/index.php';
	var graph4_src = 'specials/chart4/index.php';

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

		show_popup(graph4_src, '', 'mid', jQuery(this).data());

		return false;
	});
});
