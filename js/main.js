$(function () {

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // }); Для бургера!

  $('.projects__item-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    variableWidth: true,
  });

  $('.projects__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.projects__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.projects__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
  $('.portfolio__tabs .tab-o').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.portfolio__tabs').find('.tab-item-o').removeClass('active-tab-o').hide();
    $('.portfolio__tabs .tabs-o').find('.tab-o').removeClass('active-o');
    $(this).addClass('active-o');
    $('#' + id).addClass('active-tab-o').fadeIn();
    return false;
  });
  $('.goal__tabs .tab-i').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.goal__tabs').find('.tab-item-i').removeClass('active-tab-i').hide();
    $('.goal__tabs .tabs-i').find('.tab-i').removeClass('active-i');
    $(this).addClass('active-i');
    $('#' + id).addClass('active-tab-i').fadeIn();
    return false;
  });

});