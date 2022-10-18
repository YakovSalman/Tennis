const body = document.querySelector('#body');
const trainers = document.querySelector('.trainers');
const services = document.querySelector('.services');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const swiperPhotos = document.querySelector('.swiper-photos');
const denotationLink = document.querySelectorAll('#denotation__link');
const nested = document.querySelectorAll('.nested');
const photos = document.querySelectorAll('.photos');

const swiper = new Swiper('.trainers', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        445: {
            slidesPerView: 2,
        },
        615: {
            slidesPerView: 2,
        },
        799: {
            slidesPerView: 3,
        },
        1051: {
            slidesPerView: 4,
        },
        1258: {
            slidesPerView: 5,
        },
        1258: {
            slidesPerView: 6,
        },
    },
});

const swiper2 = new Swiper('.services', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,


    navigation: {
        nextEl: '.swiper-button-next-services',
        prevEl: '.swiper-button-prev-services',
      },
});

const swiper3 = new Swiper('.swiper-photos', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,


    navigation: {
        nextEl: '.swiper-button-next-services',
        prevEl: '.swiper-button-prev-services',
      },
});

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    list.classList.toggle('active');
    body.classList.toggle('active');
    for(let item of photos) {
        item.classList.toggle('active');
    }


});


for (let item of denotationLink) {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        for (let item of denotationLink) {
            item.classList.remove('active');
        }
        for (let item of nested) {
            item.classList.remove('active');
        }

        item.classList.add('active');
        currentTab.classList.add('active');
    })
}