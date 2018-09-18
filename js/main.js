$(document).ready(function(){

    $('.mobile_btn').click(function () {
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });



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


