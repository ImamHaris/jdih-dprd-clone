// Slide Service
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.slideservices', {
        arrows  : false,
        type    : 'loop',
        perPage : 8,
        gap: 40,
        autoWidth: true,
        autoplay: true,
        autoScroll: {
            speed: 2,
            pauseOnHover: true,
        },
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
        perMove: 1,
        speed: 1000,
        interval: 3000,
        cover: false,
        rewind: true,
        pagination: false,
    }).mount();
});

// Slide Perangkat
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.slideper', {
        arrows    : false,
        type      : 'loop',
        perPage   : 5,
        gap       : 15,
        autoplay  : true,
        autoScroll: {
            speed : 2,
            pauseOnHover: true,
        },
        breakpoints: {
            1024: {
                perPage: 3,
            },
            600: {
                perPage: 2,
            },
        },
        perMove   : 1,
        speed     : 1000,
        interval  : 3000,
        cover     : false,
        rewind    : true,
        pagination: false,
    }).mount();
});

// Slide Produk
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.slidepro', {
        arrows    : false,
        type      : 'loop',
        perPage   : 4,
        gap       : 30,
        autoplay  : true,
        autoScroll: {
            speed : 2,
            pauseOnHover: true,
        },
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
        perMove   : 2,
        speed     : 1000,
        interval  : 6000,
        cover     : false,
        rewind    : true,
        pagination: false,
    }).mount();
});

// Slide Post
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.slidepost', {
        arrows    : false,
        type      : 'loop',
        perPage   : 4,
        gap       : 30,
        autoplay  : true,
        autoScroll: {
            speed : 2,
            pauseOnHover: true,
        },
        breakpoints: {
            1024: {
                perPage: 3,
            },
            600: {
                perPage: 2,
                gap    : 20,
            },
        },
        perMove   : 1,
        speed     : 1000,
        interval  : 3000,
        cover     : false,
        rewind    : true,
        pagination: false,
    }).mount();
});