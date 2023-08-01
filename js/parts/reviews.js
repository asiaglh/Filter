if(document.querySelectorAll('.reviews-page').length){
    const sendReview = document.getElementById('reviews-add-form');
    const reviewsWrap = document.querySelector('.reviews-add-form');

    sendReview.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.add('send');
        document.querySelector('.add-review-btn-wrap').style.display="none";
    })

    const closeSend = document.getElementById('close-send');
    closeSend.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.remove('send');
        document.querySelector('.add-review-btn-wrap').style.display="flex";
    })

    const sendReviewForm = document.getElementById('send-review-form');
    sendReviewForm.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.add('success');
        reviewsWrap.querySelector('form').style.display='none';
    })

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
}

