<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>NORC Political Party Bubbles</title>

	<meta name="viewport" content="width=device-width">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="solid-bar"></div>
	<div class="wrap">
		<div id="intro">
			<h1 class="extra-apdding">Partisanship and the Media</h1>
			<p>There are 100 blue circles (Democrat), 100 red circles (Republican), and 100 white circles (independent). Position of dots within <span>Yes</span> or <span>No</span> category is random.</p>
			<div class="clear"></div>
		</div>
		<div id="chart-types">
			<label id="Informed">
				<input type="radio" name="options"><span>Media keeps them very well informed on important issues</span>
			</label>
			<label id="CNN">
				<input type="radio" name="options"><span>Get news from CNN</span>
			</label>
			<label id="Fox">
				<input type="radio" name="options"><span>Get news from Fox News</span>
			</label>

			<label id="Social Media">
				<input type="radio" name="options"><span>Get news on social media</span>
			</label>

			<label id="Accurate">
				<input type="radio" name="options"><span>News from media is very accurate</span>
			</label>
			
			<label id="Prevent">
				<input type="radio" name="options"><span>News organizations prevent political leaders from doing their job</span>
			</label>		   		
		</div>
		<div id="labels">
			<span class="d">Democrat</span>
			<span class="r">Republican</span>
			<span class="i">independent</span>
		</div>
	</div>

	<div id="bubbleChart">
		<div class="yes-no-label yes-label">
			<div>Yes</div>
			<span>0</span><sup>%</sup>
		</div>
		<div class="yes-no-label no-label">
			<div>No</div>
			<span>0</span><sup>%</sup>
		</div>
		<div class="party-label party-yes-label">
			<div class="d"><span>0</span><sup>%</sup></div>
			<div class="r"><span>0</span><sup>%</sup></div>
			<div class="i"><span>0</span><sup>%</sup></div>
		</div>
		<div class="party-label party-no-label">
			<div class="d"><span>0</span><sup>%</sup></div>
			<div class="r"><span>0</span><sup>%</sup></div>
			<div class="i"><span>0</span><sup>%</sup></div>
		</div>
	</div>
	<div class="source wrap">
	*Data come from the Media Insight Project (2,199 American adults) and a study of people’s trust in news from the media (2,036 American adults). Distribution of Respondents by Political Identification: 35% Democrat | 24% Republican | 41% independent
	</div>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js" charset="utf-8"></script>
<!-- 	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> -->
<script src="../../js/jquery-3.2.1.min.js"></script>
	<script src="bubbles2.js"></script>
</body>
 </html>
