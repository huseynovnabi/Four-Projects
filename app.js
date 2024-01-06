"use strict";

$(document).ready(function () {

    $("#hamburgerMenuOpen").click(function (e) {
        e.preventDefault();

        if ($(this).attr('src') === 'assets/x.png') {
            $("nav").css({
                "right": "-100%",
                "transition": "1s"
            });
            $(this).attr('src', 'assets/menu.png');
        } else {
            $(this).attr('src', 'assets/x.png');
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
        $("#hamburgerMenuOpen").attr('src', 'assets/menu.png');
    });
});
