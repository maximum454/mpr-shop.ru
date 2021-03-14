$(function () {

    $('.catalog-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.catalog-nav'
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