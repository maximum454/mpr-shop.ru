$(function () {
    $('.js-slider-card').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});