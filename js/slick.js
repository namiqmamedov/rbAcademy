$('#card-item').slick({
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 3000,
    prevArrow: '<i class="fa-solid fa-arrow-left slick-prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right slick-next"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

    $('#course-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<i class="fa-solid fa-arrow-left slick-prev"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right slick-next"></i>',
        responsive: [{
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

$('.home-main').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});

$('#feedback-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('#grade-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 2,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });

$('#cert-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 2,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });
    

$('#book-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left slick-prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right slick-next"></i>',

});

$('#news-card').slick({
dots: false,
infinite: true,
speed: 300,
// slidesToShow: 4,
// slidesToScroll: 2,
responsive: [
    {
        breakpoint: 2000,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});

