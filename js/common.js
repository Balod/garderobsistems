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

    function widthDetect() {
        if($(document).width()<1200) {
            $(".room-row-2, .room-row-1 .room-wrap").addClass("hidden");
            $(".room-row-1, .items-wrap").removeClass("justify-content-between");
            $(".room-row-1, .items-wrap").addClass("justify-content-center");
            $(".items-wrap>div").addClass("hidden");
            $(".rooms .left-arrow, .rooms .right-arrow, .room-row-1 .room-img-1, .dots-wrap, .items-wrap .left-arrow, .items-wrap .right-arrow").removeClass("hidden");
            $(".step-1").removeClass("hidden");
            $(".laptop-wrap").removeClass("hidden");
            $(".vlad").prepend($(".achivs>.approach-hl"));
        } else {
            $(".room-row-2, .room-row-1 .room-wrap, .room-row-1 .room-img-1, .dots-wrap").removeClass("hidden");
            $(".room-row-1, .items-wrap").removeClass("justify-content-center");
            $(".room-row-1, .items-wrap").addClass("justify-content-between");
            $(".items-wrap>div").removeClass("hidden");
            $(".rooms .left-arrow, .rooms .right-arrow, .dots-wrap, .items-wrap .left-arrow, .items-wrap .right-arrow").addClass("hidden");
            $(".laptop-wrap").addClass("hidden");
            $(".achivs").prepend($(".vlad>.approach-hl"));
        };
    }
    widthDetect();
    $(window).resize(function() {
        widthDetect();
    });

    var rooms = [".room-img-1", ".room-img-2", ".room-img-3", ".room-img-4", ".room-img-5"];
    var room = 0;
    var dots = [".dot-1", ".dot-2", ".dot-3", ".dot-4", ".dot-5"];
    var dot = 0;
    $(".room-row-1>.right-arrow").click(function () {
        if (room < 4) {
            $(rooms[room]).fadeOut(1000).toggleClass("hidden");
            $(rooms[room + 1]).fadeIn(1000).toggleClass("hidden");
            $(dots[dot]).toggleClass("select");
            $(dots[dot+1]).toggleClass("select");
            room++;
            dot++;
        } else {
            room = 0;
            dot=0;
            $(rooms[4]).fadeOut(1000).toggleClass("hidden");;
            $(rooms[room]).fadeIn(1000).toggleClass("hidden");
            $(dots[4]).toggleClass("select");
            $(dots[dot]).toggleClass("select");
        }
    });

    $(".room-row-1>.left-arrow").click(function () {
        room--;
        dot--;
        $(dots[dot]).toggleClass("select");
        $(dots[dot+1]).toggleClass("select");
        $(rooms[room]).fadeIn(1000).toggleClass("hidden");
        $(rooms[room + 1]).fadeOut(1000).toggleClass("hidden");
        if (room < 0) {
            room = 4;
            dot = 4;
            $(rooms[room]).fadeIn(1000).toggleClass("hidden");
            $(rooms[room + 1]).fadeOut(1000).toggleClass("hidden");
            $(dots[dot]).toggleClass("select");
            $(dots[dot+1]).toggleClass("select");
        }
    });

    var steps = [".step-1", ".step-2", ".step-3", ".step-4", ".step-5"];
    var step = 0;
    var stepDots = [".steps .dot-1", ".steps .dot-2", ".steps .dot-3", ".steps .dot-4", ".steps .dot-5"];
    var stepDot = 0;

    $(".items-wrap>.right-arrow").click(function () {
        if (step < 4) {
            $(steps[step]).fadeOut(1000).toggleClass("hidden");
            $(steps[step + 1]).fadeIn(1000).toggleClass("hidden");
            $(stepDots[stepDot]).toggleClass("select");
            $(stepDots[stepDot+1]).toggleClass("select");
            step++;
            stepDot++;
        } else {
            step = 0;
            stepDot=0;
            $(steps[4]).fadeOut(1000).toggleClass("hidden");;
            $(steps[step]).fadeIn(1000).toggleClass("hidden");
            $(stepDots[4]).toggleClass("select");
            $(stepDots[stepDot]).toggleClass("select");
        }
    });

    $(".items-wrap>.left-arrow").click(function () {
        step--;
        stepDot--;
        $(stepDots[stepDot]).toggleClass("select");
        $(stepDots[stepDot+1]).toggleClass("select");
        $(steps[step]).fadeIn(1000).toggleClass("hidden");
        $(steps[step + 1]).fadeOut(1000).toggleClass("hidden");
        if (step < 0) {
            step = 4;
            stepDot = 4;
            $(steps[step]).fadeIn(1000).toggleClass("hidden");
            $(steps[step + 1]).fadeOut(1000).toggleClass("hidden");
            $(stepDots[stepDot]).toggleClass("select");
            $(stepDots[stepDot+1]).toggleClass("select");
        }
    });
})