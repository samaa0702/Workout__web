$(document).ready(function(){
    $('.slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: false,
        dots: true,
        arrows: true,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><div class="_icon-arrow"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="_icon-arrow"></div></button>'
    });
  });