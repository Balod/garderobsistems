$(document).ready(function () {

    /*----------------Запускает квиз-опросник----------------*/
    $(".calculate, .coast-btn").click(function () {
        Marquiz.showModal('5c7281172357a00044bb11fe');
    });
    /*-------------------------------------------------------*/
    /*-----------------------Переменные для галереи раздела "Комнаты"-----------------------*/
    var rooms = [".room-img-1", ".room-img-2", ".room-img-3", ".room-img-4", ".room-img-5"];
    var room = 0;
    var dots = [".rooms .dot-1", ".rooms .dot-2", ".rooms .dot-3", ".rooms .dot-4", ".rooms .dot-5"];
    var dot = 0;
    /*---------------------------------------------------------------------------------*/

    /*--------------------Переменные для галереи раздела "5 шагов"--------------------*/
    var steps = [".step-1", ".step-2", ".step-3", ".step-4", ".step-5"];
    var step = 0;
    var stepDots = [".steps .dot-1", ".steps .dot-2", ".steps .dot-3", ".steps .dot-4", ".steps .dot-5"];
    var stepDot = 0;
    /*-------------------------------------------------------------------------------*/

    /*----------------------Переменные для галереи "Материалы"----------------------*/
    var materials = [".mat-item-1", ".mat-item-2", ".mat-item-3", ".mat-item-4", ".mat-item-5", ".mat-item-6"]
    var material = 0;
    var matDots = [".material-photo .dot-1", ".material-photo .dot-2", ".material-photo .dot-3", ".material-photo .dot-4", ".material-photo .dot-5", ".material-photo .dot-6"];
    var matDot = 0;
    /*-----------------------------------------------------------------------------*/

    /*--------------------Маска для форм--------------------*/
    $("#download-phone, #test-phone, #frozen-phone, #call-back-input").mask("+7(999) 999-99-99");
    /*------------------------------------------------------*/

    /*Функция добавляет счётчик до конца акции. Устанавливает дату следующую за текущей */
    function stockDate() {
        var date = new Date();
        var day = date.getDate() + 1;
        var month = [" января", " февраля", " марта", " апреля", " мая", " июня", " июля", " августа", " сентября", " октября", " ноября", " декабря"];

        $(".stock .counter").html("до " + day + month[date.getMonth()]);
    };
    stockDate();//запускаем функию

    /*----------------------------------------------------------------------------------*/

    /*-----------------------Функция заполняет галерею контентом-----------------------*/
    function gallery() {
        var item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < item.length; i++) {
            if (item[i] < 10) {
                $(".img-" + item[i]).css("background-image", "url(../img/gallery/0" + item[i] + ".jpg");
            } else {
                $(".img-" + item[i]).css("background-image", "url(../img/gallery/" + item[i] + ".png");
            }
        }
    }
    gallery();//Запускаем функцию
    /*----------------------------------------------------------------------------*/

    /*----------------------Поп-ап раздел----------------------*/

    $(".gallery-wrap").magnificPopup({//Поп-ап для галереи
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });

    $(".call-back").magnificPopup({//Поп-ап для формы обратного звонка
        items: [
            {
                src: '<div class="call-back-form"><h2>Оставьте заявку<br>и мы вам перезвоним</h2><form action="call-back-send.php" method="POST"><input id="call-back-input" name="phone" type="text" placeholder="Ваш контактный телефон" required><label class="phone-ico" for="call-back-input"></label><input class="req-form-btn button" type="submit" value="Заказать звонок"></form><span class="test-check">Я принимаю условия <span>передачи информации</span></span></div>',
                type: 'inline'
            }
        ],
        closeBtnInside: true,
        closeOnBgClick: true,
        fixedContentPos: true,
        type: 'image'
    });

    $(".request-btn").magnificPopup({//Поп-ап для формы заказа
        items: [
            {
                src: '<div class="request-form"><h2>Оставьте заявку и мы расскажем подробнее о наших системах</h2><form action = "request-send.php" method = "post"><input id="call-back-input" name="phone" type="text" placeholder="Ваш контактный телефон" required><label class="phone-ico" for="call-back-input"></label><input class="req-form-btn button" type="submit" value="Оставить заявку"></form><span class="test-check">Я принимаю условия <span>передачи информации</span></span></div>',
                type: 'inline'
            }
        ],
        closeBtnInside: true,
        closeOnBgClick: true,
        fixedContentPos: true,
        type: 'image'
    });

    $(".privacy").magnificPopup({//Поп-ап для формы политики конфидициальности
        items: [
            {
                src: '<div class="privacy-pop"><h2>Политика конфиденциальности</h2><p>Данная Политика конфиденциальности применима к данному Сайту. После просмотра данного Сайта обязательно прочитайте текст, содержащий политику конфиденциальности используемого сайта. В случае несогласия с данной Политикой конфиденциальности прекратите использование данного Сайта. Заполнив любую из форм и используя данный Сайт, Вы тем самым выражаете согласие с условиями изложенной ниже Политики конфиденциальности. Сайт охраняет конфиденциальность посетителей сайта. Персональная информация Для того чтобы оказывать вам услуги, отвечать на вопросы, выполнять ваши пожелания и требования требуется такая информация, как ваше имя и номер телефона. САЙТ может использовать указанную информацию для ответов на запросы, а также для связи с Вами по телефону с целью предоставления информации о предлагаемых САЙТ услугах и рекламных кампаниях. При поступлении от вас обращения в виде отправки любой заполненной на сайте формы САЙТ может потребоваться связаться с Вами для получения дополнительной информации, необходимой для вашего обслуживания и ответа на интересующие вопросы. САЙТ обязуется не передавать данную информацию третьим лицам без Вашего разрешения, за исключением информации, необходимой для выполнения вашего обслуживания. Со своей стороны, Вы предоставляете САЙТ право использовать любую сообщѐнную Вами информацию для выполнения указанных выше действий.</p><p><b>Безопасность</b><br>Передача персональных данных в любой форме (лично, по телефону или через Интернет) всегда связана с определенным риском, поскольку не существует абсолютно надежных (защищенных от злонамеренных посягательств) систем, однако САЙТ принимает необходимые адекватные меры для минимизации риска и предотвращения несанкционированного доступа, несанкционированного использования и искажения Ваших персональных данных. Несовершеннолетние САЙТ не принимает никакой информации от лиц моложе 18 лет без согласия их родителей или законных опекунов. Кроме того, лица моложе 18 лет не могут совершать каких-либо покупок или иных юридических действий на данном Сайте без согласия родителей или законных опекунов, если это не допускается законодательством.</p><p><b>Модификация</b><br>САЙТ имеет право изменять данную Политику конфиденциальности, изменять и корректировать условия доступа или запрещать доступ к сайту, а также изменять его содержание в любое время без предварительного уведомления.</p></div>',
                type: 'inline'
            }
        ],
        closeBtnInside: true,
        closeOnBgClick: true,
        fixedContentPos: true,
        type: 'image'
    });

    $(".play").magnificPopup({//Поп-ап для видео
        items: [
            {
                src: "https://www.youtube.com/watch?time_continue=24&v=FZDUXenLgcs",
                type: "iframe"
            },
        ],
    });

    $(".prod-video").magnificPopup({//Поп-ап для видео
        items: [
            {
                src: "https://www.youtube.com/watch?v=WnkW0Pl9rlU",
                type: "iframe"
            },
        ],
    });
    /*-------------------Конец раздела поп-ап-------------------*/

    /*Функция изменяет видимость объектов для разных разрешений экранов, либо меняет их положение*/
    function widthDetect() {
        if ($(window).width() < 1900) {
            $(".gal-btn-wrap").removeClass("hidden");
        } else {
            $(".gal-btn-wrap").addClass("hidden");
        };
        if ($(window).width() <= 1182) {
            $(".room-row-2").addClass("hidden");
            $(".dots-wrap").removeClass("hidden");
            $(".laptop-wrap").removeClass("hidden");
            $(".vlad").prepend($(".achivs>.approach-hl"));
        } else {
            $(".room-row-2, .room-row-1 .room-wrap, .dots-wrap").removeClass("hidden");
            $(".room-row-1 .room-wrap").removeClass("visible");
            $(".items-wrap .step-1, .items-wrap .step-2, .items-wrap .step-3, .items-wrap .step-4, .items-wrap .step-5").removeClass("hidden");
            $(".items-wrap .step-1, .items-wrap .step-2, .items-wrap .step-3, .items-wrap .step-4, .items-wrap .step-5").removeClass("visible");
            $(".dots-wrap").addClass("hidden");
            $(".laptop-wrap").addClass("hidden");
            $(".achivs").prepend($(".vlad>.approach-hl"));
            $(".rooms .dot-1, .steps .dot-1").addClass("select");
            $(".rooms .dot-2, .rooms .dot-3, .rooms .dot-4, .rooms .dot-5, .steps .dot-2, .steps .dot-3, .steps .dot-4, .steps .dot-5").removeClass("select");
            room=0;
            dot=0;
            step=0;
            stepDot=0;
        };
        if ($(window).width() < 992) {
            $(".rooms").css("padding-top", "80px");
        } else {
            $(".mat-item-1, .mat-item-2, .mat-item-3, .mat-item-4, .mat-item-5, .mat-item-6").removeClass("hidden");
            $(".mat-item-1, .mat-item-2, .mat-item-3, .mat-item-4, .mat-item-5, .mat-item-6").removeClass("visible");
            $(".rooms").css("padding-top", "5px");
            $(".material-photo .dot-1").addClass("select");
            $(".material-photo .dot-2, .material-photo .dot-3, .material-photo .dot-4, .material-photo .dot-5, .material-photo .dot-6").removeClass("select");
            material=0;
            matDot=0;
        };
        if ($(window).width() < 975) {
            $(".mob-bg").removeClass("hidden");
        } else {
            $(".mob-bg").addClass("hidden");
        };
    }

    widthDetect();//Запускаем функцию

    /*---------------------------------------------------------------------------------*/


    $(window).resize(function () {//Запускает функцию видимости при ресайзе
        widthDetect();
    });

    /*---------Управляет стрелками галереи раздела "Комнаты"---------*/
    $(".room-row-1>.right-arrow").click(function () {
        if (room < 4) {
            if($(rooms[room]).hasClass("hidden")) {
                $(rooms[room]).removeClass("hidden");
            } else {
                $(rooms[room]).removeClass("visible");
                $(rooms[room]).addClass("hidden");
            }
            $(rooms[room + 1]).addClass("visible");
            $(rooms[room+1]).removeClass("hidden");
            $(dots[dot]).toggleClass("select");
            $(dots[dot + 1]).toggleClass("select");
            room++;
            dot++;
        } else {
            room = 0;
            dot = 0;
            $(rooms[4]).removeClass("visible");
            $(rooms[4]).addClass("hidden");
            $(rooms[room]).removeClass("hidden");
            $(rooms[room]).addClass("visible");
            $(dots[4]).toggleClass("select");
            $(dots[dot]).toggleClass("select");
        }
    });

    $(".room-row-1>.left-arrow").click(function () {
        room--;
        dot--;
        $(dots[dot]).toggleClass("select");
        $(dots[dot + 1]).toggleClass("select");
        $(rooms[room]).removeClass("hidden");
        $(rooms[room]).addClass("visible");
        $(rooms[room + 1]).addClass("hidden");
        $(rooms[room + 1]).removeClass("visible");
        if (room < 0) {
            room = 4;
            dot = 4;
            $(rooms[room]).removeClass("hidden");
            $(rooms[room]).addClass("visible");
            $(rooms[room + 1]).removeClass("visible");
            $(rooms[room + 1]).addClass("hidden");
            $(dots[dot]).toggleClass("select");
            $(dots[dot + 1]).toggleClass("select");
        }
    });
    /*-----------------------------------------------------*/

    /*--------Управляет стрелками галереи раздела "5 шагов"--------*/
    $(".items-wrap>.right-arrow").click(function () {
        if (step < 4) {
            if($(steps[step]).hasClass("hidden")) {
                $(steps[step]).removeClass("hidden");
            } else {
                $(steps[step]).removeClass("visible");
                $(steps[step]).addClass("hidden");
            }
            $(steps[step + 1]).addClass("visible");
            $(steps[step + 1]).removeClass("hidden");
            $(stepDots[stepDot]).toggleClass("select");
            $(stepDots[stepDot + 1]).toggleClass("select");
            step++;
            stepDot++;
        } else {
            step = 0;
            stepDot = 0;
            $(steps[4]).removeClass("visible");
            $(steps[4]).addClass("hidden");
            $(steps[step]).removeClass("hidden");
            $(steps[step]).addClass("visible");
            $(stepDots[4]).toggleClass("select");
            $(stepDots[stepDot]).toggleClass("select");
        }
    });

    $(".items-wrap>.left-arrow").click(function () {
        step--;
        stepDot--;
        $(stepDots[stepDot]).toggleClass("select");
        $(stepDots[stepDot + 1]).toggleClass("select");
        $(steps[step]).removeClass("hidden");
        $(steps[step]).addClass("visible");
        $(steps[step + 1]).addClass("hidden");
        $(steps[step + 1]).removeClass("visible");
        if (step < 0) {
            step = 4;
            stepDot = 4;
            $(steps[step]).removeClass("hidden");
            $(steps[step]).addClass("visible");
            $(steps[step + 1]).removeClass("visible");
            $(steps[step + 1]).addClass("hidden");
            $(stepDots[stepDot]).toggleClass("select");
            $(stepDots[stepDot + 1]).toggleClass("select");
        }
    });
    /*----------------------------------------------------------*/

    /*---------Управляет стрелками галереи раздела "Материалы"---------*/

    $(".material-photo .right-arrow").click(function () {
        if (material < 5) {
            $(matDots[matDot]).toggleClass("select");
            $(matDots[matDot + 1]).toggleClass("select");
            if($(materials[material]).hasClass("hidden")) {
                $(materials[material]).removeClass("hidden");
            } else {
                $(materials[material]).removeClass("visible");
                $(materials[material]).addClass("hidden");
            }
            $(materials[material + 1]).addClass("visible");
            $(materials[material + 1]).removeClass("hidden");
            material++;
            matDot++;
        } else {
            material = 0;
            matDot = 0;
            $(materials[5]).removeClass("visible");
            $(materials[5]).addClass("hidden");
            $(materials[material]).removeClass("hidden");
            $(materials[material]).addClass("visible");
            $(matDots[5]).toggleClass("select");
            $(matDots[matDot]).toggleClass("select");
        }
    });
    $(".material-photo .left-arrow").click(function () {
        material--;
        matDot--;
        $(matDots[matDot]).toggleClass("select");
        $(matDots[matDot + 1]).toggleClass("select");
        $(materials[material]).removeClass("hidden");
        $(materials[material]).addClass("visible");
        $(materials[material + 1]).addClass("hidden");
        $(materials[material + 1]).removeClass("visible");
        if (material < 0) {
            material = 5;
            matDot = 5;
            $(materials[material]).removeClass("hidden");
            $(materials[material]).addClass("visible");
            $(materials[material + 1]).removeClass("visible");
            $(materials[material + 1]).addClass("hidden");
            $(matDots[matDot]).toggleClass("select");
            $(matDots[matDot + 1]).toggleClass("select");
        }
    });
    /*------------------------------------------------------*/

    /*--------------Скрывает и показывает галерею--------------*/
    $(".gal-btn").click(function () {
        $(".gallery-wrap").toggleClass("twist");
        if ($(".gallery-wrap").hasClass("twist")) {
            $(".gal-btn").html("Скрыть");
        } else {
            $(".gal-btn").html("Показать все");
        };
    });
    /*-------------------------------------------------------*/
})