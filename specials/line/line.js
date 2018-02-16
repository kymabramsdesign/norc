(function() {
	jQuery('.filter-reset button').click(function() {
		jQuery('.filter-items input:checked').click();
	});

var margin = {top: 20, right: 20, bottom: 100, left: 50},
		width = 760 - margin.left - margin.right,
		height = 320 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d").parse;
var bisectDate = d3.bisector(function(d) { return d.date; }).left;

var xScale = d3.time.scale()
		.range([0, width]);

	//	xScale2 = d3.time.scale()
	//	.range([0, width]); // Duplicate xScale for brushing ref later

var yScale = d3.scale.linear()
        .range([height, 0]);
        

// 40 Custom DDV colors 
/*
 Original colors
"#943126", //Overall
"#633974", //Female
"#1A5276", //Male
"#A9CCE3", //Age 18-34
"#117864", //35-49
"#196F3D", 	//50-64
"#B7950B",  //65+
"#935116",  //Blask
"#7EC4CF", 	//White
"#797D7F", 	//Other
"#5F6A6A", 	//< High School
"#C0392B", //High School
"#8E44AD", //College+
"#1ABC9C", //Dem
"#27AE60", //Ind
"#9788CD", //Rep
"#EB984E", //Midwest
"#AA81C5", //Northeast
"#F8C471", //South
"#C280B7", //West
"#CE80B0",  //Lower
"#D3779F", //Working
"#D76D8F", //Middle
"#DC647E", //Upper
*/
var color = d3.scale.ordinal().range([
"#943126", //Overall
"#196F3D", //Female
"#935116", //Male
"#A9CCE3", //Age 18-34
"#117864", //35-49
"#633974", 	//50-64
"#B7950B",  //65+
"#F8C471",  //Blask
"#AA81C5", 	//White
"#797D7F", 	//Other
"#5F6A6A", 	//< High School
"#d75f24", //High School
"#8E44AD", //College+
"#25498a", //Dem
"#a4c4fe", //Ind
"#C0392B", //Rep
"#EB984E", //Midwest
"#1ABC9C", //Northeast
"#dce8ff", //South
"#C280B7", //West
"#1A5276",  //Lower
"#7EC4CF", //Working
"#27AE60", //Middle
"#DC647E", //Upper
"#E05A6D",
"#E16167", 
"#E26962",
"#E2705C",
"#E37756",
"#E38457",
"#E39158", 
"#E29D58",
"#E2AA59",
"#E0B15B",
"#DFB95C",
"#DDC05E", 
"#DBC75F",
"#E3CF6D",
"#EAD67C",
"#F2DE8A"
]);  


var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
        .tickSize(1)
        .tickPadding(20)
		.ticks(10);

		// xAxis2 = d3.svg.axis() // xAxis for brush slider
		// .scale(xScale2)
		// .orient("bottom");    

var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(7)
		.tickSize(1)
        .tickPadding(10)
        .tickFormat(function(d) {
            if (d == '60') {
                return '60%';
            } else {
                return d; // + "\u00A0\u00A0";
            }
        });
		


var line = d3.svg.line()
		.interpolate("basis")
		.x(function(d) { return xScale(d.date); })
		.y(function(d) { return yScale(d.rating); })
		.defined(function(d) { return d.rating; });  // Hiding line value defaults of 0 for missing data

var svg = d3.select("#line-graph").append("svg")
        .attr('viewBox','0 0 760 260')
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("gssformatted3.tsv", function(error, data) { 
	color.domain(d3.keys(data[0]).filter(function(key) { // Set the domain of the color ordinal scale to be all the csv headers except "date", matching a color to an issue
		return key !== "date"; 
	}));

	data.forEach(function(d) { // Make every date in the csv data a javascript date object format
		d.date = parseDate(d.date);
	});

    var categories = color.domain().map(function(name) { // Nest the data into an array of objects with new keys
		return {
			name: name, // "name": the csv headers except date
			values: data.map(function(d) { // "values": which has an array of the dates and ratings
				return {
					date: d.date, 
					rating: +(d[name]),
					};
			}),
			visible: false
		};
	});

	xScale.domain(d3.extent(data, function(d) { return d.date; })); // extent = highest and lowest points, domain is data, range is bouding box

	yScale.domain([0, 60]);

	//xScale2.domain(xScale.domain()); // Setting a duplicate xdomain for brushing reference later
 

	// draw line graph
	svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
			.style("font-size","10px")
			.call(function(g) {
                g.selectAll('line')
					.attr('y1', 13)
					.attr('y2', 23)
					.attr('x1', 40)
					.attr('x2', 40)
					.style('stroke', '#9c97a7');
			})
			.selectAll("text")	
						.style("text-anchor", "middle")
						.attr("dx", "0")
						.attr("dy", ".15em");

//y axis details
	svg.append("g")
			.attr("class", "y axis")
			.style("font-size","10px")
			.style("align", "left")
            .call(yAxis)
            .call(function(g) {
                g.selectAll('line')
                    .attr('y2', 1)
					.attr('x2', width)
					.style('stroke', function(a,b,c) {
						/* not sure what each function argument means */
						if (b == 0) {
							return '#9c97a7';
						}
					});
			})
			.selectAll("text")	
			.style("text-anchor", "start")
			.attr("dx", "-2em");

	var issue = svg.selectAll(".issue")
			.data(categories) // Select nested data and append to new svg group elements
		.enter().append("g")
			.attr("class", "issue");   

	issue.append("path")
			.attr("class", "line")
			.style("pointer-events", "none") // Stop line interferring with cursor
			.attr("id", function(d) {
                return data_element_id(d);
			})
			.attr("d", function(d) { 
				return d.visible ? line(d.values) : null; // If array key "visible" = true then draw line, if not then don't 
			})
			.attr("clip-path", "url(#clip)")//use clip path to make irrelevant part invisible
			.style("stroke", function(d) { return color(d.name); });

	var filter_categories = {
		'Female' : 1,
		'Male' : 1,
		'Age 18-34' : 2,
		'Age 35-49' : 2,
		'Age 50-64' : 2,
		'Age 65+' : 2,
		'Black' : 3,
		'White' : 3,
		'Other Race' : 3,
		'Less than high school' : 4,
		'High school or some college' : 4,
		'Bachelor\'s or more' : 4,
		'Democrat' : 5,
		'Independent' : 5,
		'Republican' : 5,
		'Midwest' : 6,
		'Northeast' : 6,
		'South' : 6,
		'West' : 6,
		'Lower' : 7,
		'Working' : 7,
		'Middle' : 7,
		'Upper' : 7
	}

	function create_input(d) {
		if (typeof filter_categories[d.name] != 'undefined') {
			var cat = filter_categories[d.name];
			var inp = jQuery('<label><input type="checkbox"><span></span> <strong>' + d.name + '</strong></label>');
			jQuery('#filter-' + cat + ' .filter-items').append(inp);

			inp.find('span').css('background-color', color(d.name));

			inp.find('input').change(function() {
				if (this.checked) {
					d.visible = true;
				} else {
					d.visible = false;
				}

				check_active_filter_category();

				issue.select("path")
					.transition()
					.attr("d", function(d){
						return d.visible ? line(d.values) : null; // If d.visible is true then draw line for this d selection
					});
			});
			inp.hover(function() {
				d3.select('#' + data_element_id(d))
					.transition()
					.style("stroke-width", 2.5);  
			}, function() {
				d3.select('#' + data_element_id(d))
				.transition()
				.style("stroke-width", 1.5);  
			});
		}
	}

	issue.each(function(d) {
		create_input(d);
	}); 

	jQuery('.filter-name input').change(function() {
		var first_input = jQuery(this);
		if (first_input.is(':checked')) {
			jQuery(this).parents('.filter').find('input:not(:checked)').click();
		} else {
			jQuery(this).parents('.filter').find('input:checked').click();
		}
		check_active_filter_category();
	});

	function check_active_filter_category() {
		jQuery('.filter').each(function() {
			var unchecked = jQuery(this).find('.filter-items input:not(:checked)');
			if (unchecked.length == 0) {
				jQuery(this).addClass('active-filter');
				jQuery(this).find('.filter-name input').get(0).checked = true;
			} else {
				jQuery(this).removeClass('active-filter');
				
				jQuery(this).find('.filter-name input').get(0).checked = false;
			}
		});
	}

}); // End Data callback function

function data_element_id(d) {
    return "line-" + btoa(d.name).replace(/=/g,'');
}

if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
	jQuery('body').addClass('ios');
}

})();
