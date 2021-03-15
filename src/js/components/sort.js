$(function () {



    $('.sort__control').on('click', 'a:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.card').find('.card__tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    })
});