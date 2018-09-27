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


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('main').css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();

    $(".phone_field").mask("+375 (99) 999-99-99");



    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


});


