$(window).scroll(function() {
    //фиксированные видео на странице спора при прокрутке
    if ( $(this).scrollTop() > $(".basket").height() ) {
        $(".basket .btn").removeClass("fixed");
    } else  {
        $(".basket .btn").addClass("fixed");
    }
});