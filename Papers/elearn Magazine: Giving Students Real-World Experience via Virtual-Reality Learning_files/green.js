// JavaScript Document
$(document).ready(function(){
		
		

	
	function nav_label(){
		$("div.savvynav_main_nav ul li.lev1").hover(function(){
															 $(this).addClass("hover");
															 },
													 function(){
														 	 $(this).removeClass("hover");
													 });
		
		$("div.savvynav_main_nav ul li ul li.selected, div.savvynav_left_nav ul li ul li.selected, div.savvynav_mini_nav ul li ul li.selected").parent("ul").parent("li").addClass("selected");
	}
	

	
	
	
	
	nav_label();
	
						   
});

