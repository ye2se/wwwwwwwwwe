$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
})


$(function () {
    $('.main_hall .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();

        $('.main_hall .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on')
    })
})

$(function () {
    const MainHall = new Swiper('.tab_slide', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        speed: 600,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    const MainSpecial = new Swiper('.main_special_slide', {
        slidesPerView: "4",
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_special .arrows .next',
            prevEl: '.main_special .arrows .prev',
        },
        loop: true,
    })
})