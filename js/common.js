$(document).ready(function () {
    function gallery() {
        var item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < item.length; i++) {
            if (item[i] < 10) {
                $(".img-" + item[i]).css("background-image", "url(../public_html/img/gallery/0" + item[i] + ".jpg");    
            } else {
                $(".img-" + item[i]).css("background-image", "url(../public_html/img/gallery/" + item[i] + ".png");
            }
        }
    }
    gallery();

    $(".gallery-wrap").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
})