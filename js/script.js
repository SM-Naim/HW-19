$(document).ready(function(){
	alert("Page load alert");
	// alert
	$('#btn').click(function(){
		alert("Welcome to my page")
	});
	// Hide
	$('#btn1').click(function(){
		$('h2').hide();
	});
	// show
	$('#btn2').click(function(){
		$('h2').show();
	});
	// toggle
	$('#btn3').click(function(){
		$('#t-1').toggle();
	});
	// toggle
	$('#btn4').click(function(){
		$('#f-t-1').fadeToggle("slow");
	});
	$('.click').click(function(){
		$('.text').slideToggle();
	});
});
$('document').ready(function(){
	$('#text-change').click(function(){
		$('.text-change').text('Hi, This is naim');
	});
	$('#append-method').click(function(){
		$('.append-method').append(' Hi, This is Naim.');
	});
	$('#prepend-method').click(function(){
		$('.prepend-method').prepend('Hi, This is Naim. ');
	});
	$('#a1').remove('href');
	$('#single-css').click(function(){
		$('.single-css').css('color','orange');
	});
	$('#multiple-css').click(function(){
		$('.multiple-css').css({'color':'green','font-size':'20px'});
	});
	$('#val-method').click(function(){
		var value1 = $('#inputField').val();
		$('.val-method').text('inputField vlaue is ' + value1);
	});
	$('#fadeto-method').click(function(){
		$('.fadeto-method').fadeTo(1000, 0.4);
	});
	$('#slideup-method').click(function(){
		$('.slideup-method').slideUp(1000);
	});
	$('#animate-method').click(function(){
		$('.animate-method').animate({opacity:'0.5', fontSize: '20px'},1000);
	});
});
