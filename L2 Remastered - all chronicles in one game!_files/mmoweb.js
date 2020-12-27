
$(document).ready(function(){

    if($.cookie('lang') != null){
        var lang = "#lang_"+$.cookie('lang');

        $(lang).addClass('active');


    }
    $('body').on('click', '[lang]', function () {
        $.cookie('lang', $(this).attr('lang'), {
            expires: 5,
            path: '/'
        });


        location.reload();
    });
	
	$('.btn-generate-pref').click(function(){

        $.get("/data/prefix/get", function (data) {
            $('.show-prefix').html(data);
        });


    });

});
