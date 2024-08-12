$(document).ready(function(){
    $("#hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000, // Time in milliseconds before switching to the next slide
        autoplayHoverPause: true, // Pause on hover
        nav: true,
        dots: false,
    });
});
