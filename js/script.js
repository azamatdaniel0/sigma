$(document).ready(function () {
    $("#owl-carousel__first").owlCarousel({
        margin: 10,
        loop:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4.2
            }
        }
    });
    $("#owl-carousel__week").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4.2
            }
        }
    });
    $("#owl-carousel__pakets").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4.2
            }
        }
    });
});

