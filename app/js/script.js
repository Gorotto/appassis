/*anketa select*/
$(document).on('click', '.js-search-option', function (event) {
    event.preventDefault();
    var optionBox = $(this).next('.anketa__select--option');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
        optionBox.slideUp('400');
    } else{
        $(this).addClass('open');
        optionBox.slideDown('400');
    }
});
$(document).on('click', '.anketa__select--option > a', function (event) {
    event.preventDefault();
    var optionName = $(this).text(),
        optionPlace = $(this).closest('.custom-select').find('.select');
    optionPlace.val(optionName);//меняем имя
    $('.select__trigger').removeClass('open');
    $('.anketa__select--option').slideUp('400');
});
/*close anketa select*/



$('.datepicker-here').data('datepicker')
// var dp = $('.current-day').datepicker().data('datepicker');
//
// dp.selectDate(new Date());


$(".toogle-title").click(function () {
  $(this).next(".toogle-content").slideToggle();
    if(  $(this).children().hasClass('arrow-active') ){
       $(this).parent('.toogle-row').find('.arrow').removeClass('arrow-active');
     }else{
         $(this).parent('.toogle-row').find('.arrow').addClass('arrow-active');
     }
     return false;
});


$(".category-wrap__item_title").click(function () {
  $(this).next(".category-wrap__item_row").slideToggle();

     return false;
});



jQuery(".page__tabs_target").click(function (e) {
   jQuery(".page__tabs_target").removeClass("page__tabs_active");
    jQuery(this).addClass("page__tabs_active");
    jQuery('.setting-wrap__content_item').removeClass('current');

     e.preventDefault();
   var t = jQuery(this).attr('data-tab');

   jQuery(".setting-wrap__content_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);

});

jQuery(".new-pages_target").click(function (e) {
   jQuery(".new-pages_target").removeClass("new-pages_active");
    jQuery(this).addClass("new-pages_active");
    jQuery('.new-pages__content_item').removeClass('current');

     e.preventDefault();
   var t = jQuery(this).attr('data-tab');

   jQuery(".new-pages__content_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);

});

  $(".icons__wraps").owlCarousel({
      loop: true,
      margin: 0,
      nav : true,
      // autoplay: true,
      navText: true,
      navigation:true,
      pagination : true,
      items: 4,
      dots: true,
      singleItem:false
    });


$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('.open_modal').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form')
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('.modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});

var windowWidth = $(window).width();
 if (windowWidth < 769) {

// $(document).ready(function(){
	$('.menu-anchor').on('click touchstart', function(e){
    $(".sandwich").toggleClass("active");
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
}
// })
