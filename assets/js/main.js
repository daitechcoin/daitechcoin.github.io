new WOW().init();

(function($) {
    "use strict";

    $(document).ready(function($) {

        $(".video-list,.post-list").owlCarousel({
            margin: 10,
            autoWidth: true,
            autoPlay: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
            responsive: {
                480: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        });

    });

}(jQuery));