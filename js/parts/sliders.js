$(document).ready(function() {

    if($('.slider-single').length) {
        $('.slider-single').slick({

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: true,

            fade: true,

            autoplay: true,

            autoplaySpeed: 5000,

            cssEase: 'linear'

        });
    }

    if($('.slider-product').length) {
        $('.slider-product').slick({


            centerMode: false,

            variableWidth: true,

            infinite: true,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.5
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    if($('.slider-propose').length) {
        $('.slider-propose').slick({

            slidesToShow: 4,

            centerMode: false,

            variableWidth: true,

            infinite: true,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.5
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    if($('.slider-brands').length) {
        $('.slider-brands').slick({

            infinite: true,

            slidesToShow: 4,

            centerMode: false,

            variableWidth: true,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.5
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    if($('.add-more_slider').length) {
        $('.add-more_slider').slick({

            slidesToShow: 3,

            slidesToScroll: 1,

            centerMode: false,

            variableWidth: false,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.5
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    if($('.slider-clients').length) {
        $('.slider-clients').slick({

            slidesToShow: 4,

            slidesToScroll: 1,

            infinite: true,

            centerMode: false,

            variableWidth: true,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear'

        });
    }

    if($('.reviews-slider').length) {
        $('.reviews-slider').slick({

            slidesToShow: 2,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>    </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            responsive: [
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    if($('.work-examples-slider').length) {
        $('.work-examples-slider-wrap').each(function () {
            const sliderId = $(this).data('slider-id');

            $(this).find('.work-examples-slider').slick({

                slidesToShow: 1,

                slidesToScroll: 1,

                arrows: false,

                dots: true,

                customDots: false,

                appendDots: $(this).parent().find('.sliderdots'),

                fade: true,

                autoplay: true,

                cssEase: 'linear'

            });

            $(this).find('.slider_arrow_p').click(function () {
                $('[data-slider-id="' + sliderId + '"] .work-examples-slider').slick('slickPrev');
            });

            $(this).find('.slider_arrow_n').click(function () {
                $('[data-slider-id="' + sliderId + '"] .work-examples-slider').slick('slickNext');
            });
        });
    }

    if($('.compare-slider').length){
        $('.compare-slider').slick({

            slidesToShow: 3,

            slidesToScroll: 1,

            centerMode: false,

            variableWidth: true,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>\n' +
                '        </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            infinite: false,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.5
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]


        });
    }

    if($('.slider-examples').length) {
        $('.slider-examples').slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: false,

            dots: false,

            fade: true,

            asNavFor: '.slider-examples-img',

            cssEase: 'linear'

        });
    }

    if($('.slider-examples-img').length) {
        $('.slider-examples-img').slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>    </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            asNavFor: '.slider-examples',

            fade: true,

            cssEase: 'linear'

        });
    }

    if($('.show_room_slider').length) {
        $('.show_room_slider').slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>    </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            autoplay: true,

            cssEase: 'linear'

        });
    }

    if($('.product-img-slider').length) {
        $('.product-img-slider').slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: true,

            prevArrow: '<button class="slick-prev">\n' +
                '            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"></path></svg>    </button>', // customize the previous arrow button

            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"></path></svg></button>', // customize the next arrow button

            dots: false,

            cssEase: 'linear',

            asNavFor: '.product-img-slider-nav',

        });
    }

    if($('.product-img-slider-nav').length) {
        $('.product-img-slider-nav').slick({

            slidesToShow: 5,

            slidesToScroll: 1,

            arrows: false,

            dots: false,

            cssEase: 'linear',

            asNavFor: '.product-img-slider',

            centerMode: false,

            variableWidth: true,

        });
    }

    if ($('.product-img-slider-nav').length) {
        $('.product-img-slider-nav .slick-slide').removeClass('slick-active');
        $('.product-img-slider-nav .slick-track').children().eq(0).addClass('slick-active');
        $('.product-img-slider-nav').on('click', '.slick-slide', function (e) {
            e.preventDefault();
            var index = $(this).data("slick-index");
            $('.product-img-slider').slick('slickGoTo', index);
            $('.product-img-slider-nav .slick-slide').removeClass('slick-active');
            $(this).addClass('slick-active');
        });
        $('.product-img-slider').on('afterChange', function (event, slick, currentSlide) {
            $('.product-img-slider-nav .slick-slide').removeClass('slick-active');
            $('.product-img-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]').addClass('slick-active');
        });
    }

})