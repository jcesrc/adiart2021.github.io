
var scrollTop = 0;
var galleries;
var found = false;
$(document).ready(function () {

    galleries = $(".gallery");

    $(document).on("scroll", function () {

        scrollTop = window.pageYOffset;

        found = false;
        $(galleries).each(function (n, o) {

            if ($(o)[0].getBoundingClientRect().top <= 0) {
                var i = $(o).attr("img");
                $(".background").css("background-image", "url('" + i + "')")
                found = true;
            }
            else {
                $(o).removeClass("fadeout");
                if (!found) {
                    var i = $(".bgimage").attr("img");
                    $(".background").css("background-image", "url('" + i + "')")
                }

            }
        });



    })



});