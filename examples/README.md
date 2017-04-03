# HR Accordion

HR Responsive accordion lightweight jQuery plugin less code

####Features
> Responsive  - All device compatible

> All Major Browser Compatible

> Extend Multiple Tabs / or Single Tab at a time

> Animated Accordion

> Lightweight JS only (1.6kb)

##Documentation

###HTML

######Include these files on <head>
```html
<link rel="stylesheet" href="css/hr.accordion.min.css">
<script src="js/1.11.2.jquery.min.js"> </script>
<script src="js/hr-accordion.min.js"> </script>
```
###### Add HTML Structures
```html
<div class="hr-accordion-wrapper">
	  <div class="each-acc-row">
		<div class="accordion-title"><span class="title">Your title here</span></div>
		<div class="accordion-content"> Your content here	</div>
	  </div>
	  <div class="each-acc-row">
		<div class="accordion-title"><span class="title">Your title here</span></div>
		<div class="accordion-content"> Your content here	</div>
	  </div>
</div>
```
	
###jQuery
```javascript
	$(".example1").hrAccordion({ 
		multiple : true, //true,false
		title : true,
		event : 'click', // click, 'mouseover' or any JS events
		speed : 800 // slow, medium, fast, or in milliseconds
	});
```

###### Author
About Author : [Md Hidaytullah Rahmani](https://hidaytrahman.github.io)

###### if you've any more idea please share me on hidaytrahman@gmail.com :)