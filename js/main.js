$(document).ready(function(){

    $('.mobile_btn').click(function () {
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });



    if($('.main_slider > div').length > 2){
        $('.main_slider').slick({
            dots: true,
            fade:true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }



    if($('.specialists_slider > div').length > 3){
        $('.specialists_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() > 575 && $('.specialists_slider > div').length > 1){
        $('.specialists_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }




    $('.type_review').each(function(){
        var show_more=$(this).find('.show_more');
        var more=$(this).find('.more');
        $(show_more).on('click', function(){
           if($(more).is(':visible')){
               $(more).slideUp();
               $(show_more).text('Читать далее');
           }else {
               $(more).slideDown();
               $(show_more).text('Свернуть');
           }
        });
    });


    if($(window).innerWidth() < 575){
        $('.reviews_list').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }


    var header_height = $('header').height();
    $('header').next().css({'margin-top': header_height+'px'});
    $(window).scroll(function(){
        if ($(this).scrollTop() > header_height) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });



    if($('.serv_slider > div').length > 2){
        $('.serv_slider').slick({
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.serv_slider > div').length > 1){
        $('.serv_slider').slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }



    if($('.slider_before-after > div').length >4){
        $('.slider_before-after').slick({
            dots: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.slider_before-after > div').length > 1){
        $('.slider_before-after').slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }



    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.745508, 37.435225],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        });

        // Добавим на карту схему проезда
        // от улицы Крылатские холмы до станции метро "Кунцевская"
        // через станцию "Молодежная" и затем до станции "Пионерская".
        // Точки маршрута можно задавать 3 способами:
        // как строка, как объект или как массив геокоординат.
        ymaps.route([
            'Москва, улица Крылатские холмы',
            {
                point: 'Москва, метро Молодежная',
                // метро "Молодежная" - транзитная точка
                // (проезжать через эту точку, но не останавливаться в ней).
                type: 'viaPoint'
            },
            [55.731272, 37.447198], // метро "Кунцевская".
            'Москва, метро Пионерская'
        ]).then(function (route) {
            myMap.geoObjects.add(route);
            // Зададим содержание иконок начальной и конечной точкам маршрута.
            // С помощью метода getWayPoints() получаем массив точек маршрута.
            // Массив транзитных точек маршрута можно получить с помощью метода getViaPoints.
            var points = route.getWayPoints(),
                lastPoint = points.getLength() - 1;
            // Задаем стиль метки - иконки будут красного цвета, и
            // их изображения будут растягиваться под контент.
            points.options.set('preset', 'islands#redStretchyIcon');
            // Задаем контент меток в начальной и конечной точках.
            points.get(0).properties.set('iconContent', 'Точка отправления');
            points.get(lastPoint).properties.set('iconContent', 'Точка прибытия');

            // Проанализируем маршрут по сегментам.
            // Сегмент - участок маршрута, который нужно проехать до следующего
            // изменения направления движения.
            // Для того, чтобы получить сегменты маршрута, сначала необходимо получить
            // отдельно каждый путь маршрута.
            // Весь маршрут делится на два пути:
            // 1) от улицы Крылатские холмы до станции "Кунцевская";
            // 2) от станции "Кунцевская" до "Пионерская".

            var moveList = 'Трогаемся,</br>',
                way,
                segments;
            // Получаем массив путей.
            for (var i = 0; i < route.getPaths().getLength(); i++) {
                way = route.getPaths().get(i);
                segments = way.getSegments();
                for (var j = 0; j < segments.length; j++) {
                    var street = segments[j].getStreet();
                    moveList += ('Едем ' + segments[j].getHumanAction() + (street ? ' на ' + street : '') + ', проезжаем ' + segments[j].getLength() + ' м.,');
                    moveList += '</br>'
                }
            }
            moveList += 'Останавливаемся.';
            // Выводим маршрутный лист.
            $('#list').append(moveList);
        }, function (error) {
            alert('Возникла ошибка: ' + error.message);
        });
    }



/*
    $('.mobile_btn').click(function () {
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');

        $('.main_menu .close').click(function () {
            $('.main_menu').removeClass('open');
            $('body').removeClass('m_menu_active');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("body").removeClass('m_menu_active');
        }
        e.stopPropagation();
    });


    $('.slick_serv_prev').click(function(){
        $('.serv_slider').slick('slickPrev');
    });

    $('.slick_serv_next').click(function(){
        $('.serv_slider').slick('slickNext');
    });

    if($('.serv_slider > div').length > 3){
        $('.serv_slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() > 575 && $('.serv_slider > div').length > 1){
        $('.serv_slider').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }


    if($('.reviews_slider > div').length > 2){
        $('.reviews_slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() > 575 && $('.reviews_slider > div').length > 1){
        $('.reviews_slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }



    $(function () {
        var containerEl = document.querySelector('.mixitup_grid');
        var mixer = mixitup(containerEl);
    });

    $(function () {
        var containerE2 = document.querySelector('.mixitup_gallery');
        var mixer2 = mixitup(containerE2);
    });

*/






});


