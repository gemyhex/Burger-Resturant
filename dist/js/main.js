
$('.head-sec .carousel').carousel({
    interval: 2000
});
$('.carousel').carousel({
    interval: false
});


//Shuffle
$('.shuffle-sec .shuffle-items .item .fries').parent().parent().hide();
$('.shuffle-sec .shuffle-items .item .drinks').parent().parent().hide();
$('.shuffle-list ul li').on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') === '.burgers'){
        $('.shuffle-imgs .shuffle-items .item').hide();
        $($(this).data('class')).parent().parent().show();
    }else{
        $('.shuffle-imgs .shuffle-items .item').hide();
        $($(this).data('class')).parent().parent().show();

    }
});