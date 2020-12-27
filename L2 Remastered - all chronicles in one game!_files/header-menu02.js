$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1300) {
        $('.menu_hider02').addClass('scroller02');
    } else {
        $('.menu_hider02').removeClass('scroller02')
    }
});