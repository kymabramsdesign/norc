jQuery(function() {
	var width = 960;
	var height = 380;
	var padding = 11;
	var maxRadius = 15;
	var radius = 6; // radius of drawn circle
	var dataSource = 'bubbleChart.csv';
	//var dataSource = 'small.csv';

	d3.select("#bubbleChart").append("svg")
		.attr("viewBox", '0 0 ' + width + ' ' + height)
		.attr("id", "primarySVG");
		
	initProgram(dataSource);

	function initProgram(data) {
		d3.csv(dataSource, function(error, data) {
			var svg = d3.select("#primarySVG");

			for (var j = 0; j < data.length; j++) {
				data[j].radius = radius;
				data[j].x = Math.random() * width;
				data[j].y = Math.random() * height;
			}

			var getCenters = function(vname, size) {
				//size is an array of [width,height]
				//vname is an attribute like 'reset' or 'CNN'
				if (vname != 'reset') {
					var centers = [
						{name: "Yes", value: 1},
						{name:"No", value: 1}
					];
				} else {
					var centers = [
						{name: "", value: 1}
					];
				}
				var map = d3.layout.pack().size(size);
				map.nodes({children: centers});

				if (centers.length == 2) {
					centers[0].x -= 150;
					centers[1].x += 150;
				}

				return centers;
			};
	
			var nodes = svg.selectAll("circle")
				.data(data);

		
			nodes.enter().append("circle")
				.attr("class", function(d) {
					return d.Pol;
				})   
				.attr("cx", function(d) {
					return d.x;
				})
				.attr("cy", function(d) {
					return d.y;
				})
				.attr("r", 2)
				.attr("id", function(d){return d.objectName;});

			var force = d3.layout.force(); 

			draw('reset'); 

			jQuery("#chart-types label").click(function() {
				draw(this.id);
			});

			function draw(varname) {
				show_statistics(data, varname);
				d3.selectAll("circle").attr("r",10);

				var centers = getCenters(varname, [width, height]);//seperates the bubble blobs

				force.on("tick", tick(centers, varname));

				nodes.attr("class", function(d) {
					return d.Pol;
				});
				force.start();
			}

			function tick (centers, varname) {
				var foci = {};
				for (var i = 0; i < centers.length; i++) {
					foci[centers[i].name] = centers[i];
				}

				return function (e) {
					for (var i = 0; i < data.length; i++) {
						var o = data[i];
						var f = foci[o[varname]];

						o.y += (f.y - o.y) * e.alpha;
						o.x += (f.x - o.x) * e.alpha;
					}
					nodes.each(collide(.1))
						.attr("cx", function (d) { return d.x; })
						.attr("cy", function (d) { return d.y; });

				}

			} // end tick()


			function collide(alpha) {
				var quadtree = d3.geom.quadtree(data);

				return function(d) {
					var r = d.radius + maxRadius + padding,
						nx1 = d.x - r,
						nx2 = d.x + r,
						ny1 = d.y - r,
						ny2 = d.y + r;

					quadtree.visit(function(quad, x1, y1, x2, y2) {
						if (quad.point && (quad.point !== d)) {
							var x = d.x - quad.point.x,
								y = d.y - quad.point.y,
								l = Math.sqrt(x * x + y * y),
								r = d.radius + quad.point.radius + padding;
							if (l < r) {
								l = (l - r) / l * alpha;
								d.x -= x *= l;
								d.y -= y *= l;
								quad.point.x += x;
								quad.point.y += y;
							}
						}
						return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
					});
				};
			}
			nodes.exit().remove();
		}); // end of csv

	} //end of initProgram


	function show_statistics(data, varname) {
		function format_value(val) {
			return Math.round(val*100);
		}
		if (varname != 'reset') {
			var total_yes = 0;
			var total_no = 0;
			var total = 0;
			var yes_types = {
				Democrat: 0,
				Independent: 0,
				Republican: 0
			};
			var no_types = {
				Democrat: 0,
				Independent: 0,
				Republican: 0
			};
			
			for(var i in data) {
				var item = data[i];
				var cat = item['ratingCategory'];
				total++;
				if (item[varname] == 'Yes') {
					total_yes++;
					if (typeof yes_types[cat] == 'undefined') {
						yes_types[cat] = 0;
					}
					yes_types[cat]++;
				} else {
					total_no++;
					if (typeof no_types[cat] == 'undefined') {
						no_types[cat] = 0;
					}
					no_types[cat]++;
				}
			}

			var result = {
				total: total,
				total_yes: total_yes,
				total_no: total_no,
				yes_types: yes_types,
				no_types: no_types
			};
			
			jQuery('.yes-label span').html(format_value(result.total_yes / result.total));
			jQuery('.no-label span').html(format_value(result.total_no / result.total));
			
			jQuery('.party-yes-label .d span').html(format_value(result.yes_types.Democrat / 100));
			jQuery('.party-yes-label .r span').html(format_value(result.yes_types.Republican / 100));
			jQuery('.party-yes-label .i span').html(format_value(result.yes_types.Independent / 100));

			jQuery('.party-no-label .d span').html(format_value(result.no_types.Democrat / 100));
			jQuery('.party-no-label .r span').html(format_value(result.no_types.Republican / 100));
			jQuery('.party-no-label .i span').html(format_value(result.no_types.Independent / 100));

			jQuery('#bubbleChart .yes-no-label, #bubbleChart .party-label').show();
		}

		return false;
	}
});