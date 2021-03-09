@@include('./partials/jquery.min.js')
@@include('./partials/burger.js')
@@include('./partials/slick.js')
@@include('./partials/remodal.js')
@@include('./partials/tabs.js')
@@include('./partials/jquery.fancybox.min.js')
@@include('./partials/jquery.formstyler.min.js')


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


    $('.js-slider-accompany').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.accompany__next'),
        prevArrow: $('.accompany__prev'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });

    /*$('.menu-big__list').masonry({
        itemSelector: '.menu-big__item',
    });*/


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

    $('.js-select-delivery').on('click', function () {
        $('.select-city').toggleClass('active');
    })

    /*Подставляем высоту карточки*/
    let cartItemHeight = $('.card__item').outerHeight(false);
    $('.card__item').css({'height': cartItemHeight + 'px'})


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

    $('.menu__button, .js-menu-open').on('click', function () {
        $('.main__menu-big').toggleClass('active')
    })
    $('.js-menu-more').on('click', function () {
        $(this).find('ul').addClass('active');
        $(this).addClass('disable-img');
        $('.menu__more>a').hide();
        return false;
    })




    $('.js-menu-dropdown').on('click', function (){
        $('.menu-header__down').toggleClass('active');
        $(this).toggleClass('active');
        return false;
    })

    setTimeout(function() {
        $('.js-select').styler();
    }, 100)

    var nav = $('.header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });


    $tabs('.tabs');
})
