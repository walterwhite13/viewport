$(document).ready(function() {

function nav(){

	$(".topline ul li").mouseover(function() {
		$(this).find("ul:first").show();
	});
	$(".topline ul li").mouseleave(function() {
		$(".topline ul li ul").hide();
	});
	$(".topline ul li ul").mouseleave(function() {
		$(".topline ul li ul").hide();
	});
};
nav();

function nav2(){

	$(".main-nav-ul li").mouseover(function() {
		$(this).find("ul:first").show();
	});
	$(".main-nav-ul li").mouseleave(function() {
		$(".main-nav-ul li ul").hide();
	});
	$(".main-nav-ul li ul").mouseleave(function() {
		$(".main-nav-ul li ul").hide();
	});
};
nav2();

 $('.slider').slick({
 	slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    asNavFor: '.slider-control',
  });


 $('.slider-control').slick({
 	slidesToShow: 5,
 	slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    centerMode: true,
	centerPadding: "40px",
	 prevArrow: '<i class="prev-custom fa fa-chevron-left" aria-hidden="true"></i>',
    nextArrow: '<i class="next-custom fa fa-chevron-right" aria-hidden="true"></i>'
//	prevArrow: '<div class="arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
   // nextArrow: '<div class="arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
   
  });


});

