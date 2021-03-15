$(function () {

    $('.sort__control--item').on('click', function (){
        if($('.sort__control--item').hasClass('active')){
            $('.sort__control--item, .card__tabs-content').removeClass('active');
            $(this).addClass('active');
        }else{
        }
    })
});