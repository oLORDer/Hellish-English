import $ from 'jquery';
import 'slick-carousel';

$('.slider__list').slick({
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider__nav',
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        arrows: true,
      },
    },
  ],
});
$('.slider__nav').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider__list',
  focusOnSelect: true,
  // arrows: false,
  // centerMode: true,
  // centerPadding: '5px',
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 7,
        arrows: true,
        dots: false,
        // centerPadding: '15px',
      },
    },
  ],
});
