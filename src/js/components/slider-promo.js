$(function () {
    $('.js-slider-promo').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>' + (i + 1) + '</a>';
        },
    });
});