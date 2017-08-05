$(document).ready(function() {

	$("#test_click_butt").click(function() {
		alert("The .click function works!");
		});

	$("#test_hide_butt").click(function() {
		$("#test_hide").hide(function() {
		});
	});
	$("#test_show_butt").click(function() {
		$("#test_hide").show(function() {
		});
	});

	$("#test_toggle_butt").click(function() {
		$("#ninja_pic1").toggle("slow", function() {
		});
	});

	$("#test_slideUp_butt").click(function() {
		$("#ninja_pic2").slideUp("slow", function() {
	  });
	});
	$("#test_slideDown_butt").click(function() {
		$("#ninja_pic2").slideDown("slow", function() {
	  });
	});

	$("#test_slideToggle_butt").click(function() {
		$("#ninja_pic3").slideToggle("slow", function() {
	  });
	});

	$("#test_fadeIn_butt").click(function() {
	 	$("#ninja_pic4").fadeIn( "slow", function() {
	  });
	});
	$("#test_fadeOut_butt").click(function() {
	 	$("#ninja_pic4").fadeOut( "slow", function() {
	  });
	});

	$("#test_before_butt").click(function() {
	 	$("#before_after_sample").before("<p>Added a 'p' element in front</p>");
	});
	$("#test_after_butt").click(function() {
	 	$("#before_after_sample").after("<p>Added a 'p' element after</p>");
	});

	$("#test_append_butt").click(function() {
		$(".append").append("<p>the more you click the more you append</p>");
	});

	$("#test_html_butt").click(function() {
		$("#html").html("Test Successful!");
	});

	$("#test_val_butt").click(function() {
		var value = $("#test_val_input").val();
		});

	$("#test_attr_butt").click(function() {
		$("#test_attr_butt").attr();
	});
});