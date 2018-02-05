<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>NORC's Global Portfolio</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html, body {
			height: 100%;
		}
		body {
			background: #603063;
			touch-action: none;
			font: 14px/1.2 'Roboto', Helvetica, Arial, sans-serif;
		}
		#norc-map {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			box-sizing: border-box;
			padding: 0 !important;
		}
		#norc-map > svg {
			width: 100%;
			height: 100%;
			will-change: viewBox;
		}
		circle {
			pointer-events: none;
		}
		#map-controls .zoom-in, #map-controls .zoom-out {
			width: 34px;
			height: 34px;
			background: none;
			border: none;
			display: block;
			position: relative;
			margin-bottom: 12px;
			-webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
		}
		#map-controls button:focus {
			outline: none;
		}
		#map-controls [disabled] {
			opacity: 0.5;
		}
		#map-controls .zoom-in span, #map-controls .zoom-out span {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		
		#map-controls .zoom-in span:before,
		#map-controls .zoom-in span:after,
		#map-controls .zoom-out span:before {
			display: block;
			content: ' ';
			background: rgba(255,255,255,0.8);
			position: absolute;
			top: 0;
			left: 0;
		}
		#map-controls .zoom-in span:before,
		#map-controls .zoom-out span:before {
			width: 100%;
			height: 3px;
			top: 50%;
			margin-top: -2px;
		}
		#map-controls .zoom-in span:after {
			height: 100%;
			width: 3px;
			left: 50%;
			margin-left: -2px;
		}
		#map-controls {
			position: absolute;
			z-index: 10;
			left: 22px;
			bottom: 120px;
		}
		.zoom-indicator {
			-webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

			width: 13px;
			border-radius: 7px;
			height: 100px;
			border: solid 2px rgba(255,255,255,0.8);
			position: absolute;
			z-index: 10;
			bottom: 20px;
			left: 31px;
			overflow: hidden;
			cursor: pointer;
		}
		.zoom-indicator, .zoom-indicator:focus, .zoom-indicator:active {
			outline: none !important;
			-webkit-tap-highlight-color: transparent !important;
		}
		.zoom-indicator span {
			position: absolute;
			z-index: 10;
			transition: top 0.25s;
			width: 11px;
			height: 11px;
			border-radius: 50%;
			display: block;
			top: 100%;
			left: 1px;
			background: rgba(255,255,255,0.8);
			margin-top: -12px;
		}
		.zoom-indicator div {
			transition: height 0.25s;
			width: 9px;
			height: 0px;
			display: block;
			position: absolute;
			z-index: 9;
			bottom: 2px;
			left: 2px;
			background: rgba(255,255,255,0.4);
			border-radius: 5px;
		}
		.zoom-indicator.zoom-2 div {
			height: 25%;
		}
		.zoom-indicator.zoom-3 div {
			height: 50%;
		}
		.zoom-indicator.zoom-4 div {
			height: 75%;
		}
		.zoom-indicator.zoom-5 div {
			height: 92px;
		}
		.zoom-indicator.zoom-2 span {
			top: calc(75% + 6px);
		}
		.zoom-indicator.zoom-3 span {
			top: calc(50% + 6px);
		}
		.zoom-indicator.zoom-4 span {
			top: calc(25% + 6px);
		}
		.zoom-indicator.zoom-5 span {
			top: 13px;
		}
		#norc-popup {
			position: absolute;
			z-index: 11;
			background: rgba(255,255,255,0.9);
			width: 412px;
			border-radius: 5px;
			max-height: 80%;
			overflow: scroll;
			overflow-x: hidden;
			touch-action: pan-up pan-down;
		}
		#norc-popup a {
			text-transform: uppercase;
			font-size: 11px;
			letter-spacing: 0.02em;
			color: #a6a0a6;
			position: absolute;
			top: 10px;
			right: 10px;
			text-decoration: none;
		}
		@media screen and (max-width: 420px) {
			#norc-popup {
				width: 300px;
			}
		}
		#norc-popup > div {
			padding: 20px;
		}
		#norc-popup ul {
			list-style: none;
		}
		#norc-popup h3 {
			font-size: 13px;
			font-weight: 400;
			text-transform: uppercase;
			margin-bottom: 0.6em;
			letter-spacing: 0.02em;
		}
		#norc-popup strong {
			font-weight: 400;
			color: black;
		}
		#norc-popup h2 {
			font-weight: 400;
			margin-bottom: 0.8em;
			font-size: 16px;
		}
		#norc-popup li {
			position: relative;
			padding-left: 1em;
			margin-bottom: 1em;
			font-weight: 300;
			color: #60606b;
		}
		#norc-popup li:last-child {
			margin-bottom: 0;
		}
		#norc-popup li span,
		#norc-popup li span:before,
		#norc-popup li span:after {
			background: #dd7334;
			display: block;
			position: absolute;
		}
		#norc-popup li span:first-child {
			top: 0;
			left: 0;
			width: 1px;
			height: 7px;
		}		
		#norc-popup li span:nth-child(2) {
			top: 6px;
			left: 0;
			width: 9px;
			height: 1px;
		}
		#norc-popup li span:nth-child(2):before,
		 #norc-popup li span:nth-child(2):after {
			content: ' ';
			top: 0;
			right: 0;
			width: 5px;
			height: 1px;
			transform-origin: 100% 0%;
		}
		#norc-popup li span:nth-child(2):before {
			transform: rotate(-45deg);
		}
		#norc-popup li span:nth-child(2):after {
			transform: rotate(45deg);
		}
		.bubbles circle {
			stroke:#dd7334 !important;
			stroke-opacity: 0.4 !important;
			vector-effect: initial !important;
		}
		#header {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
			background: rgba(97,48,100,0.9);
			height: 160px;
			color: white;
			padding-top: 46px;
			box-sizing: border-box;
		}
		#header > div {
			padding: 0 20px;
			max-width: 980px;
			margin: 0 auto;
			position: relative;
		}
		#header h1 {
			font-size: 23px;
			font-weight: normal;
			margin-bottom: 9px;
		}
		#header p {
			position: absolute;
			width: calc(100% - 485px);
			top: 0;
			right: 20px;
			font-size: 14px;
			line-height: 1.4;
		}
		@media screen and (max-width: 760px) {
			#header {
				height: auto;
				padding-bottom: 8px;
			}
			#header p {
				position: relative;
				width: auto;
				right: 0;
				margin-bottom: 10px;
			}
			#header h1 {
				margin-bottom: 10px;
			}
			#map-legend {
				text-align: center;
			}
			#map-legend label {
				display: block;
				margin: 16px 0 8px 0;
				top: 0;
			}
			#norc-popup {
				max-height: calc(100% - 240px);
			}
		}
		@media screen and (max-width: 520px) {
			#norc-popup {
				left: 10px !important;
				right: 10px !important;
				width: auto !important;
				bottom: 0 !important;
				top: auto !important;
				background: white;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
			.mobile-hidden {
				display: none;
			}
			#map-controls button {
				width: 26px !important;
				height: 26px !important;
			}
			.zoom-indicator {
				left: 27px;
			}
		}
		#map-legend {
			display: block;
		}
		#map-legend label {
			text-transform: uppercase;
			font-size: 12px;
			letter-spacing: 0.05em;
			margin-right: 14px;
			position: relative;
			top: -4px;
		}
		#map-legend-scale {
			display: inline-block;
			vertical-align: top;
		}
		#map-legend-scale > div {
			text-align: center;
			width: 34px;
			font-weight: 300;
			float: left;
		}
		#map-legend-scale > div:before {
			width: 100%;
			height: 10px;
			content: ' ';
			display: block;
			margin-bottom: 5px;
			box-sizing: border-box;
		}
		#map-legend-scale .n2:before { background: #876087; }
		#map-legend-scale .n4:before { background: #9b7c9e; }
		#map-legend-scale .n6:before { background: #b299b2; }
		#map-legend-scale .n8:before { background: #c6b7c9; }
		#map-legend-scale .n10:before { background: #ddd3dd; }
		#map-legend-scale .n12:before { background: #f4eff4; }
		#map-legend-scale .n14:before { background: #ffffff; }

		svg.datamap g.datamaps-subunits path:not([data-info]) {
			stroke: #91708d !important;
			stroke-opacity: 1 !important;
			stroke-width: 1px !important;
		}
		svg.datamap g.datamaps-subunits path[data-info] {
			cursor: pointer;
		}
	</style>
</head>
<body>
	<div id="header">
		<div>
			<h1>NORC’s Global Portfolio</h1>
			<p>
				Since 2003, NORC has partnered with governments, non-governmental organizations, and other stakeholders to conduct research, impact evaluations, and technical assistance in more than 80 countries outside of the United States. Tour the map for a snapshot of NORC’s international work.
			</p>
			<div id="map-legend">
				<label>Number of Projects</label>
				<div id="map-legend-scale">
					<div class="n2">2</div>
					<div class="n4">4</div>
					<div class="n6">6</div>
					<div class="n8">8</div>
					<div class="n10">10</div>
					<div class="n12">12</div>
					<div class="n14">14</div>
				</div>
			</div>
		</div>
	</div>
	<div id="norc-map"></div>

	<script src="../../js/d3.min.js"></script>
	<script src="../../js/jquery-3.2.1.min.js"></script>
	<script src="topojson.min.js"></script>
	<script src="datamaps.world.min.js"></script>
	
		<script>
		var norc_map = {
			DATA_FILE: 'data.csv',
			IDEAL_WIDTH: 1600,
			IDEAL_HEIGHT: 900,
			VIEW_Y_SHIFT: -100,

			BUBBLE_RADIUS: 6,
			BUBBLE_STROKE: 8,

			jq_win: null,
			country_data: null,
			fill_table: null,
			bubble_table: null,
			jq_map: null,
			map: null,		

			init: function() {
				var me = this;
				this.jq_win = jQuery(window);

				me.load_data(function() {
					me.create_tables(function() {
						delay_callback(function() {
							me.create_map();
							delay_callback(function() {
								me.setup_popups();
								me.handle_controls();
							});
						});
					});
				});
			},

			setup_popups: function() {
				var me = this;

				me.map.svg.selectAll('.datamaps-bubble')
					.attr('class', function(d) {
						return 'datamaps-bubble centered-' + d.centered;
					});


				this.jq_map.find('.datamaps-subunits path[data-info]').click(function() {
					var jqt = jQuery(this);
					var info = jqt.data('info');

					var bubble = jQuery('svg .bubbles .centered-' + info.country_code);

					var offset = bubble.offset();

					popup.show(info, offset);
				});
			},

			handle_controls: function() {
				var view_x = 0;
				var view_y = 0;
				var view_width = this.IDEAL_WIDTH;
				var view_height = this.IDEAL_HEIGHT;
				var zoom_level = 1;
				var max_zoom = 5;
				var me = this;

				var zoom_indicator = jQuery('<div class="zoom-indicator zoom-1"><span></span><div></div></div>');
				var btn_zoom_in = jQuery('<button class="zoom-in"><span></span></button>');
				var btn_zoom_out = jQuery('<button class="zoom-out" disabled><span></span></button>');

				btn_zoom_in.click(function() {
					zoom(true);
				});
				btn_zoom_out.click(function() {
					zoom(false);
				});

				jQuery('#norc-map').bind('mousewheel', function(e){
					if(e.originalEvent.wheelDelta /120 > 0) {
						zoom(true);
					} else{
						zoom(false);
					}
				});

				function zoom_to(new_zoom) {
					if (new_zoom > zoom_level) {
						if (zoom_busy) {
							zoom_busy = false;
							clearInterval(tmr_animate);
						}
						zoom(true);
					} else if (new_zoom < zoom_level) {
						if (zoom_busy) {
							zoom_busy = false;
							clearInterval(tmr_animate);
						}
						zoom(false);
					}
				}
				zoom_indicator.on('zoom_move', function(ev, new_zoom) {
					zoom_to(new_zoom);
				});

				var controls = jQuery('<div id="map-controls"></div>');
				controls.append(btn_zoom_in, btn_zoom_out);

				jQuery('body').append(controls, zoom_indicator);

				setup_zoom_indicator(zoom_indicator);

				var cur_svg = me.jq_map.children('svg').get(0);

				var zoom_busy = false;
				var tmr_animate = 0;
				function zoom(zoom_in, callback) {
					if (zoom_busy) {
						return;
					}
					var original_zoom = zoom_level;
					if (zoom_in) {
						if (zoom_level < max_zoom) {
							zoom_level++;
						} else {
							return;
						}
					} else {
						if (zoom_level > 1) {
							zoom_level--;
						} else {
							return;
						}
					}
					zoom_indicator.removeClass('zoom-1 zoom-2 zoom-3 zoom-4 zoom-5').addClass('zoom-' + zoom_level);
					zoom_busy = true;

					if (zoom_level > 1) {
						btn_zoom_out.removeAttr('disabled')
					} else {
						btn_zoom_out.attr('disabled', 'disabled');
					}
					if (zoom_level < max_zoom) {
						btn_zoom_in.removeAttr('disabled')
					} else {
						btn_zoom_in.attr('disabled', 'disabled');
					}

					var original_view_x = view_x;
					var original_view_y = view_y;
					var original_view_width = view_width;
					var original_view_height = view_height;

					jQuery('.bubbles circle').attr('r', me.BUBBLE_RADIUS / Math.pow(2,zoom_level-1)).css('stroke-width', me.BUBBLE_STROKE / Math.pow(2,zoom_level-1));

					if (zoom_level == 1) {
						view_width = me.IDEAL_WIDTH;
						view_height = me.IDEAL_HEIGHT;
						view_x = 0;
						view_y = 0;
					} else {
						if (zoom_in) {
							view_width /= 2;
							view_height /= 2;
						} else {
							view_width *= 2;
							view_height *= 2;
						}
						view_x = view_x + ((original_view_width * 0.5) - (view_width / 2));
						view_y = view_y + ((original_view_height * 0.5) - (view_height / 2));
					}

					var d1 = view_x - original_view_x;
					var d2 = view_y - original_view_y;
					var d3 = view_width - original_view_width;
					var d4 = view_height - original_view_height;
					var perc = 0;
					tmr_animate = setInterval(function() {
						if (perc >= 100) {
							perc = 100;
							zoom_busy = false;
							clearInterval(tmr_animate);
						}
						var v1 = original_view_x + (perc/100 * d1);
						var v2 = original_view_y + (perc/100 * d2);
						var v3 = original_view_width + (perc/100 * d3);
						var v4 = original_view_height + (perc/100 * d4);

						me.set_view(v1,v2,v3,v4);

						if (perc == 100) {
							perc = 0;
						} else {
							perc += 5;
						}
					}, 16);

					popup.clear();
				}

				jQuery('.bubbles circle').attr('r', me.BUBBLE_RADIUS).css('stroke-width', me.BUBBLE_STROKE);

				this.zoom = zoom;

				var is_down = false;
				var last_x_delta = 0;
				var last_y_delta = 0;
				var zoom_delta;
				track_movement(
					jQuery('#norc-map'),
					function(is_mouse) {
						//start
						if (zoom_level > 1) {
							is_down = true;
							last_x_delta = 0;
							last_y_delta = 0;

							var win_width = me.jq_win.width();
							var win_height = me.jq_win.height();
							var width_perc = win_width / me.IDEAL_WIDTH;
							var height_perc = win_height / me.IDEAL_HEIGHT;

							var ideal_ratio = me.IDEAL_WIDTH / me.IDEAL_HEIGHT;
							var cur_ratio = win_width / win_height;

							if (cur_ratio > ideal_ratio) {
								var ratio = height_perc;
							} else {
								var ratio = width_perc;
							}

							zoom_delta = Math.pow(2,zoom_level - 1) * ratio;
						}
					},
					function(x_delta, y_delta, is_mouse) {
						//move
						if (is_down) {
							//if (is_mouse) {
								//smaller = faster
								last_x_delta = x_delta / zoom_delta;
								last_y_delta = y_delta / zoom_delta;
							//} else {
							//	last_x_delta = x_delta;
							//	last_y_delta = y_delta;
							//}
							var x = view_x - last_x_delta;
							var y = view_y - last_y_delta;

							me.set_view(x,y,view_width,view_height);

							popup.clear();						
						}
					},
					function(is_mouse) {
						//release
						if (is_down) {
							is_down = false;

							view_x -= last_x_delta;
							view_y -= last_y_delta;
						}
					}
				);

				if (this.jq_win.width() < 640) {
					zoom(true);
				}
			},

			load_data: function(callback) {
				var me = this;
				d3.csv(this.DATA_FILE, function(error, data) {
					me.country_data = {};
					for(var i in data) {
						var row = data[i];
						if (typeof me.country_data[row.country] == 'undefined') {
							me.country_data[row.country] = [];
						}
						me.country_data[row.country].push({
							client: row.client.trim(),
							project: row.project.trim()
						})
					}
					delay_callback(callback);
				});
			},

			create_tables: function(callback) {
				var tmp_datamap = new Datamap({element: jQuery('<div />').get(0)});
				var country_to_code_table = {};
				
				var all_geometries = tmp_datamap.worldTopo.objects.world.geometries;

				for(var i in all_geometries) {
					var g = all_geometries[i];
					if (g.id != '-99') {
						country_to_code_table[g.properties.name] = g.id;
					}
				}

				this.fill_table = {};
				this.bubble_table = [];
				
				for(var country in this.country_data) {
					var item_count = this.country_data[country].length;

					county = this.get_internal_country_name(country);

					if (typeof country_to_code_table[country] != 'undefined') {
						var code = country_to_code_table[country];

						this.fill_table[code] = {fillKey: this.get_fill_code_for_item_count(item_count), info: this.country_data[country], country: country, country_code: code};
						this.bubble_table.push({
							centered: code,
							fillKey: 'bubble',
							radius: 12
						});
					//} else {
						//console.debug(country);
					}
				}

				callback();
			},

			get_internal_country_name: function(country) {
				/* 
					// hiries version

					if (country == 'Bosnia & Herzegovina') {
						country = 'Bosnia and Herzegovina';
					} else if (country == 'Burma') {
						country = 'Myanmar';
					} else if (country == 'Cote d’Ivoire') {
						country = 'Côte d\'Ivoire';
					} else if (country == 'Democratic Republic of Congo') {
						country = 'Congo, the Democratic Republic of the';
					} else if (country == 'West Bank and Gaza') {
						country = 'Palestinian Territories';
					} else if (country == 'Bolivia') {
						country = 'Bolivia, Plurinational State of';
					} else if (country == 'Moldova') {
						country = 'Moldova, Republic of';
					} else if (country == 'Russia') {
						country = 'Russian Federation';
					} else if (country == 'St. Kitts and Nevis') {
						country = 'Saint Kitts and Nevis';
					} else if (country == 'St. Lucia') {
						country = 'Saint Lucia';
					} else if (country == 'Syria') {
						country = 'Syrian Arab Republic';
					} else if (country == 'Tanzania') {
						country = 'Tanzania, United Republic of';
					} else if (country == 'Vietnam') {
						country = 'Viet Nam';
					}
				*/
				switch(country) {
					// case 'Cape Verde':
					// case 'Kosovo':
					// case 'St. Kitts and Nevis':
					// case 'St. Lucia':
					case 'Bosnia & Herzegovina':
						return "Bosnia and Herzegovina";
					case 'Burma':
						return "Myanmar";
					case 'Cote d’Ivoire':
						return "Ivory Coast";
					case 'Democratic Republic of Congo':
						return "Democratic Republic of the Congo";
					case 'Serbia':
						return "Republic of Serbia";
					case 'Tanzania':
						return "United Republic of Tanzania";
					case 'West Bank and Gaza':
						return "West Bank";
					default:
						return country;
				}
			},

			get_radius: function(country_code) {
				switch(country_code) {
					case 'BIH':
					case 'HRV':
					case 'BDI':
					case 'RWA':
					case 'LBN':
					case 'PSE':
					case 'TGO':
					case 'JAM':
						return 2;
					case 'SRB':
					case 'ALB':
					case 'MKD':
					case 'MNE':
					case 'VNM':
						return 3;
					case 'NIC':
					case 'GTM':
					case 'SLV':
					case 'HND':
					case 'HTI':
					case 'DOM':
					case 'SYR':
					case 'BEN':
					case 'GHA':
					case 'LBR':
					case 'GIN':
					case 'SLE':
					case 'SEN':
					case 'AZE':
					case 'GEO':
					case 'ARM':
					case 'PAN':
						return 4;
					case 'BFA':
					case 'MWI':
					case 'MDA':
					case 'BLR':
					case 'LKA':
					case 'KHM':
						return 6;
					default:
						return 8;
				}
			},

			get_fill_code_for_item_count: function(item_count) {
				if (item_count < 14) {
					return item_count;
				} else {
					return '14+';
				}
			},

			create_map: function() {
				var me = this;
				this.jq_map = jQuery('#norc-map');
				this.map = new Datamap({
					element: this.jq_map.get(0),
					projection: 'equirectangular',
					data: this.fill_table,
					width: this.IDEAL_WIDTH,
					height: this.IDEAL_HEIGHT,
					fills: {
						defaultFill: '#603063',
						1: '#7a517c',
						2: '#876087',
						3: '#917093',
						4: '#9b7c9e',
						5: '#a58ca8',
						6: '#b299b2',
						7: '#bca8bf',
						8: '#c6b7c9',
						9: '#d3c4d3',
						10: '#ddd3dd',
						11: '#e8e2e8',
						12: '#f4eff4',
						13: '#ffffff',
						'14+': '#ffffff',
						bubble: '#dd7334'

					},
					geographyConfig: {
						borderColor: '#91708d',
						popupOnHover: false,
						highlightFillColor: false,
						highlightBorderColor: '#e67326',
						highlightBorderWidth: 1
					}
				});
				this.map.bubbles(this.bubble_table, {
					borderWidth: 0,
					highlightOnHover: false,
					popupOnHover: false,
					animate: false
				});
				this.jq_win.on('resize', function() {
					me.map.resize();
				});

				this.cur_svg = this.jq_map.children('svg').get(0);
				this.set_view(0,0,this.IDEAL_WIDTH,this.IDEAL_HEIGHT);
			},

			set_view: function(x,y,width,height) {
				y += this.VIEW_Y_SHIFT;
				this.cur_svg.setAttribute('viewBox', [x,y,width,height].join(' '));
			}
		};
		jQuery(function() {
			norc_map.init();
		});

		var popup = {
			initd: false,
			jq_win: null,
			jq_popup: null,
			visible: false,

			init: function() {
				var me = this;

				this.initd = true;
				this.jq_win = jQuery(window);

				this.jq_popup = jQuery('<div id="norc-popup"></div>');
				this.jq_popup_int = jQuery('<div />');

				var btn_close = jQuery('<a href="#">Close</a>');
				btn_close.click(function() {
					me.clear();
					return false;
				});

				this.jq_popup.append(btn_close, this.jq_popup_int);

				jQuery('body').append(this.jq_popup);

				jQuery(window).resize(function() {
					me.clear();
				});
			},

			show: function(data, offset) {
				if (!this.initd)
					this.init();

				jQuery('#map-controls, .zoom-indicator').addClass('mobile-hidden');

				var country_name = data.country;
				var project_list = data.info;

				var html = '<h2>' + country_name + '</h2><h3>Projects</h3><ul>';

				var last_client = "";
				for(var i in project_list) {
					if (project_list[i].client != last_client) {
						//new client!
						if (last_client.length > 0) {
							html += '</li>';
						}
						last_client = project_list[i].client;
						html += '<li><span></span><span></span><strong>' + project_list[i].client + '</strong><br>'
					} else {
						//same as last client
						html += '<br><br>';
					}

					html += project_list[i].project;
				}
				if (last_client.length > 0) {
					html += '</li>';
				}

				html + '</ul>';				

				this.jq_popup_int.html(html);

				this.jq_popup.css({
					display: 'block',
					opacity: 0
				});

				var popup_width = this.jq_popup.outerWidth();
				var popup_height = this.jq_popup.height();
				var win_width = this.jq_win.width();
				var win_height = this.jq_win.height();

				var space_right = win_width - offset.left;

				var lr_padding = 20;

				if (space_right > offset.left) {
					//more space on right
					var l = offset.left + lr_padding;
				} else {
					var l = offset.left - popup_width;
				}

				if (popup_width + lr_padding*2 > win_width) {
					l = (win_width - popup_width) / 2;
				} else if (l < lr_padding) {
					l = lr_padding;
				} else if (l > win_width - popup_width - lr_padding) {
					l = win_width - popup_width - lr_padding;
				}

				if (l < 66)
					l = 66;

				var tb_padding = 40;
				var t = offset.top - tb_padding;

				if (t < tb_padding)
					t = tb_padding;
				else if (t + popup_height + tb_padding > win_height) {
					t = win_height - tb_padding - popup_height;
				}

				this.jq_popup.css({
					opacity: 1,
					left: l,
					top: t
				});

				this.visible = true;
			},

			clear: function() {
				if (this.visible) {
					this.visible = false;
					this.jq_popup.hide();
					jQuery('#map-controls, .zoom-indicator').removeClass('mobile-hidden');
				}
			}
		};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function delay_callback(callback) {
	requestAnimFrame(callback);
}
function track_movement(jq, start_callback, move_callback, release_callback) {
 	var is_down = false;
 	var start_x = 0;
 	var start_y = 0;
 	
	jq.on('mousedown', function(ev) {
		is_down = true;
		start_x = ev.pageX;
 		start_y = ev.pageY;
 		start_callback(start_x, start_y, true);
 		return false;
	});	
	
	jq.on('mouseup', function(ev) {
		if (is_down) {
			is_down = false;
			release_callback(true);
		}
	});	
	
	jq.on('mousemove', function(ev) {
		if (is_down) {
         	var x_delta = ev.pageX - start_x;
			var y_delta = ev.pageY - start_y;
			move_callback(x_delta, y_delta, true);
			return false;			
		}		
	});
	
	jq.on('touchstart', function(ev) {
		var touches = ev.originalEvent.touches;
		if (touches.length >= 1) {
			start_x = touches[0].clientX;
			start_y = touches[0].clientY;
			is_down = true;
			start_callback(start_x, start_y, false);
		}
	});
	jq.on('touchend', function(ev) {
		if (is_down) {
			is_down = false;
			release_callback(false);
		}
	});
	jq.on('touchmove', function(ev) {
		var touches = ev.originalEvent.touches;
		if (touches.length >= 1) {
			var x_delta = touches[0].clientX - start_x;
			var y_delta = touches[0].clientY - start_y;
			move_callback(x_delta, y_delta, false);
			ev.preventDefault();
			return false;
		}
	});
}
function setup_zoom_indicator(zoom_indicator) {
	var jq_body = jQuery('body');
	var btn_zoom = zoom_indicator.children('span');
	var btn_zoom_y = 0;
	var zoom_fill = zoom_indicator.children('div');
	var zoom_down = false;
	var zoom_down_y = 0;
	var mouse_y = 0;
	var jq_zoom_in = jQuery('button.zoom-in');
	var jq_zoom_out = jQuery('button.zoom-out');

	function zoom_move() {
		var delta_y = mouse_y - zoom_down_y;

		var new_btn_y = btn_zoom_y + delta_y;
		if (new_btn_y < 13)
			new_btn_y = 13;
		else if (new_btn_y > 100)
			new_btn_y = 100;

		var zoom_level = 5;
		if (new_btn_y > 90) {
			zoom_level = 1;
		} else if (new_btn_y > 68) {
			zoom_level = 2;
		} else if (new_btn_y > 44) {
			zoom_level = 3;
		} else if (new_btn_y > 22) {
			zoom_level = 4;
		}
		
		zoom_indicator.trigger('zoom_move', zoom_level);

		btn_zoom.css({
			top: new_btn_y,
			transition: 'none'
		});
		zoom_fill.css({
			height: (100 - new_btn_y) + 6,
			transition: 'none'
		});
	}
	function zoom_release() {
		btn_zoom.attr('style', '');
		zoom_fill.attr('style', '');
	}

	zoom_indicator.on('mousedown touchstart', function(ev) {
		if (ev.originalEvent.touches && ev.originalEvent.touches.length >= 1) {
			y_pos = ev.originalEvent.touches[0].clientY;
		} else {
			y_pos = mouse_y;
		}

		var btn_pos = btn_zoom.offset().top;

		if (y_pos < btn_pos) {
			jq_zoom_in.click();
		} else {
			jq_zoom_out.click();
		}
	});

	btn_zoom.on('mousedown', function(ev) {
		zoom_down = true;
		zoom_down_y = mouse_y;
		btn_zoom_y = btn_zoom.position().top;

		ev.stopPropagation();
	});
	jq_body.on('mousemove', function(ev) {
		mouse_y = ev.pageY;
		if (zoom_down) {
			zoom_move();
			return false;
		}
	});
	jq_body.on('mouseup', function() {
		if (zoom_down) {
			zoom_down = false;
			zoom_release();
		}
	});
	btn_zoom.on('touchstart', function(ev) {
		var touches = ev.originalEvent.touches;
		if (touches.length >= 1) {
			zoom_down = true;
			zoom_down_y = touches[0].clientY;
			btn_zoom_y = btn_zoom.position().top;
		}
		ev.stopPropagation();
	});
	btn_zoom.on('touchend', function(ev) {
		if (zoom_down) {
			zoom_down = false;
			zoom_release();
		}
	});
	btn_zoom.on('touchmove', function(ev) {
		if (zoom_down) {
			var touches = ev.originalEvent.touches;
			if (touches.length >= 1) { 
				mouse_y = touches[0].clientY;
				zoom_move();
				ev.preventDefault();
				return false;
			}
		}
	});
}

	</script>
</body>
</html>
