document.addEventListener('DOMContentLoaded', function () {

    // Add shadow of header then scroll

    const header = document.getElementsByTagName('header')[0];
    header.classList.remove('page-scroll');
    window.addEventListener("scroll", () => {
        if (window.scrollY < 60) {
            header.classList.remove('page-scroll');
        } else {
            header.classList.add('page-scroll');
        }
    });

    // Work burger menu

    const body = document.getElementsByTagName('body')[0];
    const burger = document.getElementsByClassName('burger')[0];
    header.classList.remove('burger-active');
    body.classList.remove('burger-active');
    burger.addEventListener('click', () => {
        body.classList.toggle('burger-active');
    })

    // Connection swiper-comments

    const swiper = new Swiper('.swiper-comments', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 19,
            },
        }
    });

})
