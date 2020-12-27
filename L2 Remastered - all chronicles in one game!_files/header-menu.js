$(document).ready(function () {
    console.log('');
    console.log('');
    console.log('');
    console.log('Alex');
    console.log('');
    console.log('');
    console.log('');
    $('.menu_hider').removeClass('scroller')
});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    console.log('');
    console.log('');
    console.log('');
    console.log('Alex');
    console.log('');
    console.log('');
    console.log('');
    if (y > 600) {
        console.log('A');
        $('.menu_hider').addClass('scroller');
    } else {
        console.log('B');
        $('.menu_hider').removeClass('scroller')
    }
});