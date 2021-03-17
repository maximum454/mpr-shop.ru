$('.header__burger').on('click', function (){
    $('.menu-mobile').addClass('active');
    $('body').addClass('lock');
})
$('.js-mobile-close').on('click', function (){
    $('.menu-mobile').removeClass('active');
    $('body').removeClass('lock');
})