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
$(document).on('click', '.anketa__select--option > .anketa__select--trigger', function (event) {
    event.preventDefault();
    var optionName = $(this).text(),
        optionPlace = $(this).closest('.anketa__form').find('.anketa__select');
    optionPlace.val(optionName);//меняем имя
    $('.js-search-option').removeClass('open');
    $('.anketa__select--option').slideUp('400');
});
/*close anketa select*/
