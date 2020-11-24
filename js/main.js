$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    var rellax = new Rellax('.rellax');
    new WOW().init();
    //////////** heroes slider **//////////
    var heroeswiper = new Swiper('.heroes-slider .swiper-container', {
        loop: true,
        spaceBetween: 30,

        pagination: {
            el: '.heroes-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.heroes-slider .swiper-button-next',
            prevEl: '.heroes-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **menu** /////////
    if ($(window).width() <= 1199) {
        $('.menu-icon').click(function () {
            $(".menu-overlay").fadeIn(300);
            $("nav").addClass("nav-in");
            $("body").addClass("overflow");
        });
        $('.close-menu,.menu-overlay').click(function () {
            $(".menu-overlay").fadeOut(400);
            $("nav").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    ///////// **menu** /////////
    $('.user-icon,.log-a').click(function () {
        $(".modal-overlay").fadeIn(300);
        $(".modal-absolute").addClass("modal-in");
        $("body").addClass("overflow");
    });
    $('.close-modal,.modal-overlay').click(function () {
        $(".modal-overlay").fadeOut(400);
        $(".modal-absolute").removeClass("modal-in");
        $("body").removeClass("overflow");
    });
});