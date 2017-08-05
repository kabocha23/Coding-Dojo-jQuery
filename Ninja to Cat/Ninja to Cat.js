$(document).ready(function() {
//  WORKS, BUT NOT EFFICIENT
// 	$("#cat0_png").click(function() {
// 		("#cat0_png", $(this).attr("src", "./images/ninja0.png"));
// });

// 	$("#cat1_png").click(function() {
// 		("#cat0_png", $(this).attr("src", "./images/ninja1.png"));
// });

// 	$("#cat2_png").click(function() {
// 		("#cat0_png", $(this).attr("src", "./images/ninja2.png"));
// });

// 	$("#cat3_png").click(function() {
// 		("#cat0_png", $(this).attr("src", "./images/ninja3.png"));
// });

// 	$("#cat4_png").click(function() {
// 		("#cat0_png", $(this).attr("src", "./images/ninja4.png"));
// });
	
//
	$("div img").click(function() {
		var temp = ($(this).attr("src"));
		$(this).attr("src", $(this).attr("data-alt-src"));
		$(this).attr("data-alt-src", temp)
	});

});

