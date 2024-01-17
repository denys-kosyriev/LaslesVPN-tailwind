document.addEventListener('DOMContentLoaded', function () {

    // Work modal Sign In form

    const modal = document.getElementsByClassName('modal-js');
    const modalContent = document.getElementsByClassName('modal-content-js');
    const body = document.getElementsByTagName('body')[0];
    const signInBtn = document.getElementsByClassName('sign-in-btn-js')[0];
    const signUpBtn = document.getElementsByClassName('sign-up-btn-js')[0];

    signInBtn.addEventListener('click', () => {
        modal[0].classList.remove('hidden');
        modal[0].classList.add('flex');
        body.classList.add('overflow-hidden');
    })

    signUpBtn.addEventListener('click', () => {
        modal[1].classList.remove('hidden');
        modal[1].classList.add('flex');
        body.classList.add('overflow-hidden');
    })

    for (let i = 0; i < modalContent.length; i++) {
        modal[i].addEventListener('click', (e) => {
            const closeModal = e.composedPath().includes(modalContent[i]);
            if (!closeModal || e.target.classList.contains('modal-icon-close')) {
                modal[i].classList.add('hidden');
                modal[i].classList.add('flex');
                body.classList.remove('overflow-hidden');
            }
        })
    }

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

    const burger = document.getElementsByClassName('burger')[0];
    burger.addEventListener('click', () => {
        body.classList.toggle('overflow-hidden');
        header.classList.toggle('burger-active');
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
