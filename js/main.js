var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });

var reviewSlider = new Swiper('.reviews-slider', {
// Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});

$(document).ready(function(){
  $window = $(window);
$('div[data-type="background"]').each(function(){
   var $bgobj = $(this);
$(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
  }); 
});    
}); 