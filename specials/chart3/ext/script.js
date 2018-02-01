jQuery(function() {
/*
	var raw_data = [			 
["Biological, Agricultural & Environmental Life Sciences", 15.2, "Biological, Agricultural & Other Life Scientists"],
["Biological, Agricultural & Environmental Life Sciences", 0.69, "Computer & Mathematical Scientists"],
["Biological, Agricultural & Environmental Life Sciences", 0.23, "Engineers"],
["Biological, Agricultural & Environmental Life Sciences", 2.83, "Health-Related Occupations"],
["Biological, Agricultural & Environmental Life Sciences", 3.84, "Non-S & E Occupations"],
["Biological, Agricultural & Environmental Life Sciences", 0.77, "Physical & Related Scientists"],
["Biological, Agricultural & Environmental Life Sciences", 0.03, "Psychologists"],
["Biological, Agricultural & Environmental Life Sciences", 1.6, "S & E Related Occupations"],
["Biological, Agricultural & Environmental Life Sciences", 0.24, "Social & Related Scientists"],
["Computer & Mathematical Sciences", 0.05, "Biological, Agricultural & Other Life Scientists"],
["Computer & Mathematical Sciences", 5.9, "Computer & Mathematical Scientists"],
["Computer & Mathematical Sciences", 0.25, "Engineers"],
["Computer & Mathematical Sciences", 0.04, "Health-Related Occupations"],
["Computer & Mathematical Sciences", 0.89, "Non-S & E Occupations"],
["Computer & Mathematical Sciences", 0.03, "Physical & Related Scientists"],
["Computer & Mathematical Sciences", 0, "Psychologists"],
["Computer & Mathematical Sciences", 0.35, "S & E Related Occupations"],
["Computer & Mathematical Sciences", 0.05, "Social & Related Scientists"],
["Engineering", 0.59, "Biological, Agricultural & Other Life Scientists"],
["Engineering", 1.96, "Computer & Mathematical Scientists"],
["Engineering", 11.09, "Engineers"],
["Engineering", 0.15, "Health-Related Occupations"],
["Engineering", 2.76, "Non-S & E Occupations"],
["Engineering", 0.82, "Physical & Related Scientists"],
["Engineering", 0.01, "Psychologists"],
["Engineering", 1.13, "S & E Related Occupations"],
["Engineering", 0.04, "Social & Related Scientists"],
["Health", 0.77, "Biological, Agricultural & Other Life Scientists"],
["Health", 0.14, "Computer & Mathematical Scientists"],
["Health", 0.03, "Engineers"],
["Health", 2.23, "Health-Related Occupations"],
["Health", 0.98, "Non-S & E Occupations"],
["Health", 0.07, "Physical & Related Scientists"],
["Health", 0.02, "Psychologists"],
["Health", 0.2, "S & E Related Occupations"],
["Health", 0.23, "Social & Related Scientists"],
["Physical & Related Sciences", 1.49, "Biological, Agricultural & Other Life Scientists"],
["Physical & Related Sciences", 0.87, "Computer & Mathematical Scientists"],
["Physical & Related Sciences", 1.29, "Engineers"],
["Physical & Related Sciences", 0.22, "Health-Related Occupations"],
["Physical & Related Sciences", 2.55, "Non-S & E Occupations"],
["Physical & Related Sciences", 9.38, "Physical & Related Scientists"],
["Physical & Related Sciences", 0, "Psychologists"],
["Physical & Related Sciences", 1.08, "S & E Related Occupations"],
["Physical & Related Sciences", 0.04, "Social & Related Scientists"],
["Psychology", 0.3, "Biological, Agricultural & Other Life Scientists"],
["Psychology", 0.29, "Computer & Mathematical Scientists"],
["Psychology", 0.06, "Engineers"],
["Psychology", 0.34, "Health-Related Occupations"],
["Psychology", 3.19, "Non-S & E Occupations"],
["Psychology", 0.01, "Physical & Related Scientists"],
["Psychology", 6.9, "Psychologists"],
["Psychology", 0.35, "S & E Related Occupations"],
["Psychology", 3.11, "Social & Related Scientists"],
["Social & Related Sciences", 0.18, "Biological, Agricultural & Other Life Scientists"],
["Social & Related Sciences", 0.32, "Computer & Mathematical Scientists"],
["Social & Related Sciences", 0.04, "Engineers"],
["Social & Related Sciences", 0.26, "Health-Related Occupations"],
["Social & Related Sciences", 3.97, "Non-S & E Occupations"],
["Social & Related Sciences", 0.18, "Physical & Related Scientists"],
["Social & Related Sciences", 0.04, "Psychologists"],
["Social & Related Sciences", 0.16, "S & E Related Occupations"],
["Social & Related Sciences", 7.14, "Social & Related Scientists"],
	];*/

var raw_data = [			 
	["Biological, Agricultural & Environmental Life Sciences", 15.2, "Biological, Agricultural & Other Life Scientists"],
	["Biological, Agricultural & Environmental Life Sciences", 0.69, "Computer & Mathematical Scientists"],
	["Biological, Agricultural & Environmental Life Sciences", 0.23, "Engineers"],
	["Biological, Agricultural & Environmental Life Sciences", 2.83, "Health-Related Occupations"],
	["Biological, Agricultural & Environmental Life Sciences", 3.84, "Non-S & E Occupations"],
	["Biological, Agricultural & Environmental Life Sciences", 0.77, "Physical & Related Scientists"],
	["Biological, Agricultural & Environmental Life Sciences", 1.6, "S & E Related Occupations"],
	["Biological, Agricultural & Environmental Life Sciences", 0.24, "Social & Related Scientists"],
	["Computer & Mathematical Sciences", 5.9, "Computer & Mathematical Scientists"],
	["Computer & Mathematical Sciences", 0.25, "Engineers"],
	["Computer & Mathematical Sciences", 0.89, "Non-S & E Occupations"],
	["Computer & Mathematical Sciences", 0.35, "S & E Related Occupations"],
	["Engineering", 0.6, "Biological, Agricultural & Other Life Scientists"],
	["Engineering", 2, "Computer & Mathematical Scientists"],
	["Engineering", 11.1, "Engineers"],
	["Engineering", 0.15, "Health-Related Occupations"],
	["Engineering", 2.8, "Non-S & E Occupations"],
	["Engineering", 0.82, "Physical & Related Scientists"],
	["Engineering", 1.13, "S & E Related Occupations"],
	["Health", 0.77, "Biological, Agricultural & Other Life Scientists"],
	["Health", 0.14, "Computer & Mathematical Scientists"],
	["Health", 2.23, "Health-Related Occupations"],
	["Health", 0.98, "Non-S & E Occupations"],
	["Health", 0.2, "S & E Related Occupations"],
	["Health", 0.23, "Social & Related Scientists"],
	["Physical & Related Sciences", 1.49, "Biological, Agricultural & Other Life Scientists"],
	["Physical & Related Sciences", 0.87, "Computer & Mathematical Scientists"],
	["Physical & Related Sciences", 1.29, "Engineers"],
	["Physical & Related Sciences", 0.22, "Health-Related Occupations"],
	["Physical & Related Sciences", 2.55, "Non-S & E Occupations"],
	["Physical & Related Sciences", 9.38, "Physical & Related Scientists"],
	["Physical & Related Sciences", 1.08, "S & E Related Occupations"],
	["Psychology", 0.3, "Biological, Agricultural & Other Life Scientists"],
	["Psychology", 0.3, "Computer & Mathematical Scientists"],
	["Psychology", 0.34, "Health-Related Occupations"],
	["Psychology", 3.2, "Non-S & E Occupations"],
	["Psychology", 6.9, "Psychologists"],
	["Psychology", 0.35, "S & E Related Occupations"],
	["Psychology", 3.11, "Social & Related Scientists"],
	["Social & Related Sciences", 0.18, "Biological, Agricultural & Other Life Scientists"],
	["Social & Related Sciences", 0.32, "Computer & Mathematical Scientists"],
	["Social & Related Sciences", 0.26, "Health-Related Occupations"],
	["Social & Related Sciences", 3.97, "Non-S & E Occupations"],
	["Social & Related Sciences", 0.18, "Physical & Related Scientists"],
	["Social & Related Sciences", 0.16, "S & E Related Occupations"],
	["Social & Related Sciences", 7.14, "Social & Related Scientists"],
	];


// var raw_data = [			 
// 	["Biological, Agricultural & Environmental Life Sciences", 15.2, "Biological, Agricultural & Other Life Scientists"],
// 	["Biological, Agricultural & Environmental Life Sciences", 0.69, "Computer & Mathematical Scientists"],
// 	["Biological, Agricultural & Environmental Life Sciences", 2.83, "Health-Related Occupations"],
// 	["Biological, Agricultural & Environmental Life Sciences", 3.84, "Non-S & E Occupations"],
// 	["Biological, Agricultural & Environmental Life Sciences", 0.77, "Physical & Related Scientists"],
// 	["Biological, Agricultural & Environmental Life Sciences", 1.6, "S & E Related Occupations"],
// 	["Computer & Mathematical Sciences", 5.9, "Computer & Mathematical Scientists"],
// 	["Computer & Mathematical Sciences", 0.89, "Non-S & E Occupations"],
// 	["Engineering", 0.59, "Biological, Agricultural & Other Life Scientists"],
// 	["Engineering", 1.96, "Computer & Mathematical Scientists"],
// 	["Engineering", 11.09, "Engineers"],
// 	["Engineering", 2.76, "Non-S & E Occupations"],
// 	["Engineering", 0.82, "Physical & Related Scientists"],
// 	["Engineering", 1.13, "S & E Related Occupations"],
// 	["Health", 0.77, "Biological, Agricultural & Other Life Scientists"],
// 	["Health", 2.23, "Health-Related Occupations"],
// 	["Health", 0.98, "Non-S & E Occupations"],
// 	["Physical & Related Sciences", 1.49, "Biological, Agricultural & Other Life Scientists"],
// 	["Physical & Related Sciences", 0.87, "Computer & Mathematical Scientists"],
// 	["Physical & Related Sciences", 1.29, "Engineers"],
// 	["Physical & Related Sciences", 2.55, "Non-S & E Occupations"],
// 	["Physical & Related Sciences", 9.38, "Physical & Related Scientists"],
// 	["Physical & Related Sciences", 1.08, "S & E Related Occupations"],
// 	["Psychology", 3.19, "Non-S & E Occupations"],
// 	["Psychology", 6.9, "Psychologists"],
// 	["Psychology", 3.11, "Social & Related Scientists"],
// 	["Social & Related Sciences", 3.97, "Non-S & E Occupations"],
// 	["Social & Related Sciences", 7.14, "Social & Related Scientists"],
// 	];
	

	//order of the bars 
	var sankey = new Sankey();

	var first_column = [
"Health",
"Computer & Mathematical Sciences",
"Social & Related Sciences",
"Psychology",
"Physical & Related Sciences",
"Engineering",  
"Biological, Agricultural & Environmental Life Sciences"
	];
	var second_column = [
"S & E Related Occupations",
"Health-Related Occupations",
"Psychologists",
"Computer & Mathematical Scientists",
"Social & Related Scientists",
"Physical & Related Scientists",
"Engineers",
"Non-S & E Occupations",
"Biological, Agricultural & Other Life Scientists"
	];

	sankey.stack(0, first_column);			

	sankey.stack(1, second_column);			

	// once the boxes are positioned, allow for custom movements
	// currently set so the first column is spread out evenly and will match the size of the second column
	sankey.nudge_boxes_callback = function() {
		var key1 = first_column[first_column.length - 1];
		var key2 = second_column[second_column.length - 1];

		var start_y = sankey.boxes[key1].y;
		sankey.boxes[key1].y = sankey.boxes[key2].y + sankey.boxes[key2].size() - sankey.boxes[key1].size();

		//calculate space between each item
		var total_height = 0;
		for(var i=1; i<=first_column.length-2; i++) {
			total_height += sankey.boxes[first_column[i]].size();
		}

		var available_height = sankey.boxes[key1].y - sankey.boxes[first_column[0]].y;

		var remaining_height = available_height - total_height;
		var space_per_box = remaining_height / (first_column.length);

		var y = sankey.boxes[first_column[0]].y + sankey.boxes[first_column[0]].size();
		for(var i=1; i<=first_column.length-2; i++) {
			y += space_per_box;
			sankey.boxes[first_column[i]].y = y;
			y += sankey.boxes[first_column[i]].size();
		}

		// var delta_y = sankey.boxes[key1].y - start_y;
		// var delta_per_box = delta_y / (first_column.length - 2);

		// for(var i=1; i<=first_column.length-2; i++) {
		// 	sankey.boxes[first_column[i]].y += delta_per_box;
		// }
	}

	// Colours
	sankey.setColors({
		"Biological, Agricultural & Environmental Life Sciences":"#862633",
		"Computer & Mathematical Sciences":"#bddbed", 
		"Engineering":"#cf8895",
		"Physical & Related Sciences":"#b89530", 
		"Health":"#5c7dad",
		"Social & Related Sciences":"#157763", 
		"S & E Related Occupations":"#CA6F1E",    
		"Psychology":"#b07148",       
	});
	
	sankey.y_space = 13;
	sankey.right_margin = 225;
	sankey.left_margin = 173;
				
	sankey.convert_flow_values_callback = function(flow) {
		return flow * 2; // Pixels per percent
	};
	
	//rounds number to remove deciamls
	sankey.convert_flow_labels_callback = function(flow) {
		return ""; //Math.round(flow)+"%";
	};  
	sankey.convert_box_value_labels_callback = function(flow) {
		return (""+Math.round(flow)+"%");
	};
	
	sankey.setData(raw_data);
	sankey.draw();

	var is_mobile = false;
	var mobile_width = 580;
	var desktop_width = 800;
	var jq_win = jQuery(window);
	jq_win.resize(function() {
		var change = false;

		if (jq_win.width() < 800) {
			if (!is_mobile) {
				is_mobile = change = true;
			}
		} else if (is_mobile) {
			is_mobile = false;
			change = true;
		}

		if (change) {
			if (is_mobile) {
				var w = mobile_width;
				jQuery('body').addClass('mobile');
			} else {
				var w = desktop_width;
				jQuery('body').removeClass('mobile');
			}
			sankey.r.clear();

			jQuery('#sankey svg').get(0).removeAttribute('width');
			jQuery('#sankey svg').get(0).removeAttribute('height');
			jQuery('#sankey svg').get(0).setAttribute('viewBox','0 0 ' + w + ' 780');

			sankey.display_width = w;
			sankey.draw();
		}
	}).resize();
});