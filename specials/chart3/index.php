
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>SDR Sankey</title>
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="solid-bar"></div>
	<div id="intro">
		<div class="intro-left">
			<h1>What occupations do STEM doctorates pursue?</h1>
		</div>
		<div class="intro-right">
			<p>Data from the Survey of Doctorate Recipients, sponsored by the National Science Foundation and the National Institutes of Health, shows a significant amount of career flexibility among on U.S.-trained, science, engineering, and health doctorate holders.</p>
		</div>
	</div>
	<div class="graph-wrap column-labels">
		<div>Field of Degree</div>				 
		<div>Field of Occupation</div>
	</div>

	<div id="sankey" class="graph-wrap"></div>

	<script src="ext/raphael.js"></script>
	<script src="ext/jquery.js"></script>
	<script src="ext/sankey.js"></script>  
	<script src="ext/script.js"></script>
</body>
</html>