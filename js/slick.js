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
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows: false,
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
    mobileFirst: true,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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

// $('#feedback-card').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     // slidesToShow: 4,
//     // slidesToScroll: 2,
//     mobileFirst: true,
//     responsive: [
//         {
//             breakpoint: 2000,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 2,
//                 infinite: true,
//                 dots: false,
//                 mobileFirst: false,
//             }
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
//     });

$('#feedback-card').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    //   autoplay: true,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
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
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                nextArrow: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,

            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows: false,
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
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",

    // slidesToShow: 4,
    // slidesToScroll: 2,
    responsive: [{
            breakpoint: 2000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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


// $(document).ready(function(){
//     $('#news-card').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         // slidesToShow: 4,
//         // slidesToScroll: 2,
//         mobileFirst: true,
//         responsive: [
//             {
//                 breakpoint: 2000,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 2,
//                     infinite: true,
//                     dots: false,
//                     mobileFirst: false,
//                 }
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//         });

// });

$('#book-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left slick-prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right slick-next"></i>',

});