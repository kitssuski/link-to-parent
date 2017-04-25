# LINK TO PARENT

### Web Page
	https://kitssuski.github.io/link-to-parent/

### Requirements
	Jquery Library

### Getting Started

It only takes a few simple steps to start:

1. Add the linkToParent.js file after the JQuery library
2. Call the function and pass the parameter to a class element


```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>link to parent</title>
</head>
<body>
	<div class="wrapper">
		<div class="g-achor yellow">
			<div class="text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, molestias. Saepe, tempora illo, aspernatur error eveniet placeat totam maxime sed?
			</div>
			<a class="link" href="links/link1.html">I am link</a>
		</div>
		<div class="g-achor blue">
			<div class="text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deleniti, molestiae. Maxime sint nostrum possimus aspernatur! Quidem, rerum porro unde.
			</div>
			<a class="link" href="links/link2.html">I am link</a>
		</div>
		<div class="g-achor red">
			<div class="text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem autem, aut consequuntur facilis dolorum provident voluptas. Voluptas, iure eum facere?
			</div>
			<a class="link" href="links/link3.html">I am link</a>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<script src="../js/linkToParent.js"></script>
	<script>
		$(function(){
			linkToParent('.g-achor');
		});
	</script>
</body>
</html>

```