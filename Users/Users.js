

$(document).ready(function() {

	$("#form_1").submit(function() {
		var val = $("#first_name").val();
		var val2 = $("#last_name").val();
		var val3 = $("#email").val();
		var val4 = $("#contact_no").val();		

			$("#tbody_id").append("<tr><td>" + val + "</td><td>" + val2 + "</td><td>" + val3 + "</td><td>" + val4 + "</td></tr>");
			return false;
	});
		
});
