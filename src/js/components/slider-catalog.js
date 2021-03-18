$(function () {

    $('.catalog-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.catalog-nav',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.catalog-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.catalog-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
    });
});