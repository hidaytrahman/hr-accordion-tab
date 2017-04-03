//     hr-accordion.js 2.0.0
//     (c) 2016 Md Hidaytullah Rahmani
//     hr-accordion may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/hidaytrahman/hr-content-popup

$.fn.hrAccordion = function(option){
	var custom = $.extend({
		multiple : true, //true,false
		title : true,
		event : 'click', // click, mouseover or any JS events
		speed : 800 // slow, medium, fast, or in milliseconds
	},option)
	
	var parentWrap,accTitle,iconClass,eachRow, active;
		parentWrap= ".hr-accordion-wrapper";
		accTitle = ".accordion-title";
		iconClass = "collapse-icon";
		eachRow = ".each-acc-row";
		active = "active-acc";
		
		// Add icon dynamically
		$(parentWrap+" "+accTitle+" span.title").after('<span class='+iconClass+'></span>');
		
		// When active Class is added in html
		if($(eachRow).hasClass(active)) {
			$('.'+active).children().next().show();
		}
		
		// For Multiple (false)
		if(custom.multiple==false){
			$(parentWrap).on(custom.event,accTitle+" span."+iconClass, function(e){
				$(this).parents(eachRow).toggleClass(active);
				// Hide All tabs
				$(this).parents(eachRow).parent().find('.accordion-content').hide();
				// Except current clicked tabs
				$(this).parent().next().slideToggle(custom.speed);
				
				// Check if it has active class
				if($(this).parents(eachRow).hasClass(active)){
					// remove active class from all the row
					$(this).parents(eachRow).parent().find(eachRow).removeClass(active);
					// add only on clicked row
					$(this).parents(eachRow).addClass(active);
					//$(this).parent().next().slideDown(custom.speed)
				} 
				else {
					$(this).parents(eachRow).removeClass(active);
					$(this).parents(eachRow).parent().find('.accordion-content').hide();
				}
			});
			
		// For Multiple (true)
		} else {
			$(parentWrap).on(custom.event,accTitle+" span."+iconClass, function(){
				$(this).parents(eachRow).toggleClass(active);
				$(this).parent().next().slideToggle(custom.speed);
			});
		}
}	