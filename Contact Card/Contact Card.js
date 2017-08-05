$(document).ready(function() {

	$("#form_1").submit(function(){
		var firstn = $('#first_name').val();
		var lastn = $('#last_name').val();
		var email = $('#email').val();
		var contactno = $('#contact_no').val();
		var desc = $('#description').val();
		//var show = "<p class='showhide'>"+desc+"</p>"
		//var words = '<div class="value1"><p>'+firstn+'</p><p>'+lastn+'</p><p>'+email+'</p><p>'+contactno+'</p></div';
		
	$('#cards_container').append('<div class="value1"><h1>'+firstn+' '+lastn+'</h1><p>'+email+'</p><p>'+contactno+'</p><p class="switchback">'+desc+'</p><p>Click to See Description</p></div>');
	
	$("#first_name").val("");
	$("#last_name").val("");
	$("#email").val("");
	$("#contact_no").val("");
	$("#description").val("");		
		
		return false;
	});


	$(document).on('click', '.value1', function(){
		$(this).children().toggle();
	});


});
	
		

		
// $(document).ready(function() {

// 	$("#form_1").submit(function() {
// 		var val = $("#first_name").val();
// 		var val2 = $("#last_name").val();
// 		var val3 = $("#email").val();
// 		var val4 = $("#contact_no").val();		

// 			$("#tbody_id").append("<tr><td>" + val + "</td><td>" + val2 + "</td><td>" + val3 + "</td><td>" + val4 + "</td></tr>");
// 			return false;
// 	});
		
// });
