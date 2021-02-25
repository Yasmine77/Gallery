$(function () {
	var dark = $('.hov');
	var img = $('img');
	var content = $('.content');

	dark.hide();
	img.mouseenter(function(){
		$(this).next().fadeIn('slow');
        content.addClass ('content_hover');
	});
	dark.mouseleave (function(){
		$(this).fadeOut('slow');
		content.removeClass('content_hover');
	});

});
var button_my_button = "#btn1";
$(button_my_button).click(function(){
 window.location.href='skin care.html';
});
var button_my_button = "#btn2";
$(button_my_button).click(function(){
 window.location.href='make-up.html';
});
var button_my_button = "#btn3";
$(button_my_button).click(function(){
 window.location.href='HAIR STYLE.html';
});
var button_my_button = "#btn4";
$(button_my_button).click(function(){
 window.location.href='SPORT.html';
});
var button_my_button = "#btn5";
$(button_my_button).click(function(){
 window.location.href='JEWELLERY.html';
}); 
var button_my_button = "#btn6";
$(button_my_button).click(function(){
 window.location.href='FASHION.html';
});
var button_my_button = "#btnn";
$(button_my_button).click(function(){
	window.location.href='index.html';
   });