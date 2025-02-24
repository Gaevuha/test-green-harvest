$(document).ready(function() {
  $('.your-class').slick({
    dots: true,
    dotsClass: "my-dots",
  });
});


// $(document).ready(function () {
//     function initSlider() {
//         if ($(window).width() < 1280) { // Якщо ширина менше 1280px
//             if (!$('.your-class').hasClass('slick-initialized')) {
//                 $('.your-class').slick({
//                     dots: true,
//                     infinite: true,
//                     speed: 500,
//                     autoplay: false,          // Автоматичне прокручування слайдів
//                     autoplaySpeed: 4500,     // Час (в мілісекундах) між авто-прокруткою
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     responsive: [
//                         {
//                             breakpoint: 768,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]
//                 });
//             }
//         } else { 
//             if ($('.your-class').hasClass('slick-initialized')) {
//                 $('.your-class').slick('unslick'); // Видаляємо слайдер
//             }
//         }
//     }

//     initSlider(); // Викликаємо функцію при завантаженні
//     $(window).resize(initSlider); // Викликаємо при зміні розміру вікна
// });