$(document).ready(function ($) {
  $('.slider').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 0,
    arrows: false,
    buttons: true,
    pauseOnHover: false,
  });
});