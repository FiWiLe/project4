// Carousel

$(document).ready(function(){
    $('.interface-carousel__inner').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});