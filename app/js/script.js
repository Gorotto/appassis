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



jQuery(".page__tabs_target").click(function (e) {
   jQuery(".page__tabs_target").removeClass("page__tabs_active");
    jQuery(this).addClass("page__tabs_active");
    jQuery('.setting-wrap__content_item').removeClass('current');

     e.preventDefault();
   var t = jQuery(this).attr('data-tab');

   jQuery(".setting-wrap__content_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);

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
