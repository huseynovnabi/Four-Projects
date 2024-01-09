"use strict";

$(document).ready(function () {

    $("#hamburgerMenuOpen").click(function (e) {
        e.preventDefault();

        if ($(this).attr('src') === 'assets/x2.png') {
            $("nav").css({
                "right": "-100%",
                "transition": "1s"
            });
            $(this).attr('src', 'assets/menuNEW.png');
        } else {
            $(this).attr('src', 'assets/x2.png');
            $("nav").css({
                "right": "0",
                "transition": "1s"
            });
        }
    });



    $(".homeLink, nav a").click(function () {
        $("nav").css({
            "right": "-100%",
            "transition": "0.5s"
        });
        $("#hamburgerMenuOpen").attr('src', 'assets/menuNEW.png');
    });



    let languageMappings;

    $.getJSON('translate.json', data => (languageMappings = data, changeLanguage('AZ')));

    function changeLanguage(code) {
        $('[data-translate]').each(function () {
            const key = $(this).data('translate');
            if (languageMappings && languageMappings[code] && languageMappings[code][key]) {
                $(this).text(languageMappings[code][key]);
            }

            if ($(this).is('input')) {
                $(this).attr("placeholder", languageMappings[code][key]);
            }
            if ($(this).is('textarea')) {
                $(this).attr("placeholder", languageMappings[code][key]);
                $(this).val('');
            }
            if ($(this).is('input[type="submit"]')) {
                $(this).val(languageMappings[code][key]);
            }
        });
    }

    $('#language').click(function (e) {
        e.preventDefault();
        const current = $(this).text();
        const next = current === 'AZ' ? 'EN' : (current === 'EN' ? 'RU' : 'AZ');
        $(this).text(next);
        changeLanguage(next);
    });

 

    // $('.menu nav div a').hover(function () {
    //     $(this).css('position', 'relative');
    //     $(this).css('color', 'white');
    //     $(this).css('text-decoration', 'none');
    //     $(this).css('margin-right', '50px');
    //     $(this).css('font-size', '17px');
    //     $(this).css('position', 'relative');
    //     // $(this).append('<span class="underline"></span>');
    //     $('.underline', this).width($(this).width());
    // }, function () {
    //     $('.underline', this).width(0);
    // });
});






