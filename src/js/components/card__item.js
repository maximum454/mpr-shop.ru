$(function () {

    heightTitle('.card__body','.card__item');
    // при изменении размера
    $( window ).resize(function () {
        heightTitle('.card__body','.card__item');
    });

})


function heightTitle(parent, el){
    var height = 0;
    $(parent).find(el).css('height','auto');
    setTimeout(function(){
        $(parent).find(el).each(function(){
            if($(this).height() > height){
                height = $(this).height();
            }
        });
        $(parent).find(el).height(height);
    },300);
}
