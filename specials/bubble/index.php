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
			<div class="intro-left">
				<h1>News Media Sources and Attitudes Vary by Political Party</h1>
				<h2>Data come from a 2017 study of people’s trust in news media (2,036 American adults).</h2>
			</div>
			<div class="intro-right">
				<p>The AP-NORC Center and the American Press Institute investigates how Americans of different partisan stripes get their news and their attitudes toward the news media. Click on the buttons to interact with the data.</p>
			</div>
		</div>
		<div class="clear"></div>

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
	*The interactive includes 100 blue circles (Democrat), 100 red circles (Republican), and 100 white circles (independent). Once dots are sorted into Yes or No category, their position is random. Distribution of respondents by Political Identification: 35% Democrat, 24% Republican, 41% Independent.
	</div>
	
	<script src="../../js/d3.min.js"></script>
	<script src="../../js/jquery-3.2.1.min.js"></script>
	<script src="bubbles2.js"></script>
</body>
 </html>
