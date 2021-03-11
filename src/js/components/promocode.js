$(function () {
    $('.js-promocode').on('click', function () {
        var input = $('.promocode__input').val();
        if (input != '') {
            $('.promocode__open').show();
            $('.promocode__input').hide();
            $(this).hide();
        }
        return false;
    })
    $('.js-promocode-close').on('click', function () {
        $('.promocode__open').hide();
        $('.promocode__input').show();
        $('.promocode__link').show();
        return false;
    })
});