$(function () {
    $('.js-slider-accompany').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $('.accompany__next'),
        prevArrow: $('.accompany__prev'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });
});