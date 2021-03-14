$(function () {
    var nav = $('.header');
    var headerHeight = $(".header").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 52) {
            nav.addClass("f-nav");

            $('.alert').css({'margin-bottom': headerHeight + 'px'});
        } else {
            nav.removeClass("f-nav");
            $('.alert').css({'margin-bottom': 0});
        }
    });
});