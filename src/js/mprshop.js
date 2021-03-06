@@include('./partials/jquery.min.js')
@@include('./partials/burger.js')
@@include('./partials/slick.js')
@@include('./partials/remodal.js')
@@include('./partials/tabs.js')
@@include('./partials/jquery.fancybox.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/jquery.mask.js')
@@include('./partials/dinamicAdap.js')


@@include('./components/slider-promo.js')
@@include('./components/slider-accompany.js')
@@include('./components/slider-catalog.js')
@@include('./components/card-slider.js')
@@include('./components/promocode.js')
@@include('./components/header-scroll.js')
@@include('./components/sort.js')
@@include('./components/menu-header.js')
@@include('./components/search-form.js')
@@include('./components/header-burger.js')
@@include('./components/card__item.js')
@@include('./components/card__basket.js')


$(function () {
    //Стилизация селектов
    setTimeout(function() {
        $('.js-select').styler({
            selectSmartPositioning: false,
        });
    }, 100)

    //Маска для телефона
    $('.js-phone').mask('+7 (000) 000 00 00');


    $('.menu-catalog__list-li').on('click', function (){
        var text = $(this).find('.menu-catalog__text').text();
        $(this).find('.menu-catalog__level2').addClass('active');
        $('.menu-catalog__back').addClass('active');
        console.log(text);
        $('.menu-catalog__title-text').text(text);
    })

    $('.menu-catalog__list-li2').on('click', function (){
        $(this).find('.menu-catalog__level3').toggleClass('active');
    })

    $('.menu-catalog__back').on('click', function (){
        $('.menu-catalog__back').removeClass('active');
        $('.menu-catalog__title-text').text('Каталог');
        $('.menu-catalog__level2').removeClass('active');
    })


    $('.js-menu-catalog').on('click', function (){
        $('.menu-catalog').addClass('active');
    })
    $('.js-menu-catalog-close').on('click', function (){
        $('.menu-catalog').removeClass('active');
    })



    $('.js-card-like').on('click', function (){
        $(this).toggleClass('active');
    })


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    $('.js-select-delivery').on('click', function () {
        $('.select-city').toggleClass('active');
    })




    $('.js-input-key').on('keyup', function () {
        $(this).parents('form').find('.search-form__drop').show();
        $(this).parents('form').find('.js-drop').show();
        if (this.value === '') {
            $(this).parents('form').find('.search-form__drop').hide();
            $(this).parents('form').find('.js-drop').hide();
        }
    })

    $('.js-login-drop').on('click', function () {
        $('.menu__list--drop').toggleClass('active');
        $(this).toggleClass('active');
    })

    $('.js-modal-subscribe').on('click', function (e) {
        $('.modal-subscribe').addClass('open');
        setTimeout(function () {
            $('.modal-subscribe').removeClass('open');
        }, 3000)
        return false;
    })


    //показ менб
    $('.menu__item').on('mouseover', function (e) {
        var id = $(this).attr('id');
        $('.main__menu-big').addClass('active');
        menuShow(id);
    })

    function menuShow(id) {
        $('.menu-big').each(function () {
            var dataId = $(this).data('id');
            $(this).removeClass('active');
            if (dataId === id) {
                $(this).addClass('active');
                $('.menu').addClass('open');
            }

        });
        $('.menu-big__close').on('click', function () {
            $('.main__menu-big').removeClass('active');
            $('.js-menu-more').find('ul').removeClass('active');
            $('.menu__more>a').show();
            $('.menu').removeClass('open');
        })
    }
    //end

    $('.menu__button, .js-menu-open').on('click', function () {
        $('.main__menu-big').toggleClass('active')
    })
    $('.js-menu-more').on('click', function () {
        $(this).find('ul').addClass('active');
        $(this).addClass('disable-img');
        $('.menu__more>a').hide();
        return false;
    })

    $('.receiving-order__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.receiving-order__tabs').find('.receiving-order__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.js-key-empty').on('keyup', function () {
        $(this).parents('form').find('.btn').removeClass('disabled');
        if (this.value === '') {
            $(this).parents('form').find('.btn').addClass('disabled');
        }
    })

    $tabs('.tabs');
})
