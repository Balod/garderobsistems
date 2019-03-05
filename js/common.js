$(document).ready(function () {

    $(".calculate").click(function(){
        Marquiz.showModal('5c7281172357a00044bb11fe');
    });

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

    $(".call-back").magnificPopup({
        items: [
            {
                src: '<div class="call-back-form"><h2>Оставьте заявку<br>и мы вам перезвоним</h2><input id="call-back-input" type="text" placeholder="Ваш контактный телефон"><label class="phone-ico" for="call-back-input"></label><div class="button call-back-btn"><span>Заказать звонок</span></div><span class="test-check">Я принимаю условия <span>передачи информации</span></span></div>',
                type: 'inline'
            }
        ],
        closeBtnInside: true,
        closeOnBgClick: true,
        fixedContentPos: true,
        type: 'image'
    });
    
    $(".play").magnificPopup({
        items: [
            {
                src: "https://www.youtube.com/watch?time_continue=24&v=FZDUXenLgcs",
                type: "iframe"
            },
        ],
    });

    function widthDetect() {
        if($(window).width()<1900) {
            $(".gal-btn-wrap").removeClass("hidden");
        } else {
            $(".gal-btn-wrap").addClass("hidden");
        };
        if($(window).width()<=1182) {
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
        if($(window).width()<992) {
            $(".mat-item-2, .mat-item-3, .mat-item-4, .mat-item-5, .mat-item-6").addClass("hidden ");
            $(".material-photo .left-arrow, .material-photo .right-arrow, .material-photo .dots-wrap").removeClass("hidden");
        } else {
            $(".mat-item-1, .mat-item-2, .mat-item-3, .mat-item-4, .mat-item-5, .mat-item-6").removeClass("hidden");
            $(".material-photo .left-arrow, .material-photo .right-arrow, .material-photo .dots-wrap").addClass("hidden");
        };
        if($(window).width()<975) {
            $(".mob-bg").removeClass("hidden");
        } else {
            $(".mob-bg").addClass("hidden");
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

    var materials = [".mat-item-1", ".mat-item-2", ".mat-item-3", ".mat-item-4", ".mat-item-5", ".mat-item-6"]
    var material = 0;
    var matDots = [".material-photo .dot-1", ".material-photo .dot-2", ".material-photo .dot-3", ".material-photo .dot-4", ".material-photo .dot-5", ".material-photo .dot-6"];
    var matDot = 0;
    $(".material-photo .right-arrow").click(function () {
        if (material < 5) {
            $(matDots[matDot]).toggleClass("select");
            $(matDots[matDot+1]).toggleClass("select");
            $(materials[material]).fadeOut(1000).toggleClass("hidden");
            $(materials[material + 1]).fadeIn(1000).toggleClass("hidden");
            material++;
            matDot++;
        } else {
            material = 0;
            matDot = 0;
            $(materials[5]).fadeOut(1000).toggleClass("hidden");;
            $(materials[material]).fadeIn(1000).toggleClass("hidden");
            $(matDots[5]).toggleClass("select");
            $(matDots[matDot]).toggleClass("select");
        }
    });
    $(".material-photo .left-arrow").click(function () {
        material--;
        matDot--;
        $(matDots[matDot]).toggleClass("select");
        $(matDots[matDot+1]).toggleClass("select");
        $(materials[material]).fadeIn(1000).toggleClass("hidden");
        $(materials[material + 1]).fadeOut(1000).toggleClass("hidden");
        if (material < 0) {
            material = 5;
            matDot = 5;
            $(materials[material]).fadeIn(1000).toggleClass("hidden");
            $(materials[material + 1]).fadeOut(1000).toggleClass("hidden");
            $(matDots[matDot]).toggleClass("select");
            $(matDots[matDot+1]).toggleClass("select");
        }
    });

    $(".gal-btn").click(function() {
        $(".gallery-wrap").toggleClass("twist");
    })
})