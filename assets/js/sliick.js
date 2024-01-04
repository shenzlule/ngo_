$(document).ready(function() {
    // Slick Carousel
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000, // Set the duration between slides in milliseconds
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, // Set the duration between slides in milliseconds
      autoplayHoverPause: true
    });
  });
  