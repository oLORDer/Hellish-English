import $ from 'jquery';
import 'slick-carousel';

$('.slider__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider__nav',
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});
$('.slider__nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider__list',
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: '500px',
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1679.98,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: '45px',
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: '15px',
      },
    },
  ],
});
