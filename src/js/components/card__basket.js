$(function () {
    $('.card__basket').on('click', function () {
        var text = $(this).text();
        $(this).toggleClass('in').text(text == "В корзину" ? "В корзине" : "В корзину");
        console.log(text);
        return false;
    })
});