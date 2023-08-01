


if(document.querySelectorAll('.product-cart').length) {

    //чекбокси
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            if (this.checked) {
                this.parentNode.classList.add('active');
            } else {
                this.parentNode.classList.remove('active');
            }
        });
    }

   //форма з відгуками
    const sendReview = document.getElementById('send-review');
    const reviewsWrap = document.querySelector('.reviews');
    sendReview.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.add('send');
    })

    const closeSend = document.getElementById('close-send');
    closeSend.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.remove('send');
    })

    const sendReviewForm = document.getElementById('send-review-form');
    sendReviewForm.addEventListener('click', function (){
        event.preventDefault()
        reviewsWrap.classList.add('success');
        reviewsWrap.querySelector('form').style.display='none';
    })


    //таби
    function Tabulation(links, panels){
        links.forEach((button) => {
            button.addEventListener('click', () => {
                event.preventDefault()
                links.forEach((item) => {
                    item.classList.remove('active')
                });

                button.classList.add('active');
                panels.forEach((item) => {
                    item.classList.remove('active');
                });
                // Отримуємо значення атрибуту data-show для цієї кнопки
                const showClass = button.getAttribute('data-tab');
                panels.forEach((item) => {
                    if (item.getAttribute('data-tab') === showClass) {
                        item.classList.add('active');
                    }
                });
            });
        });
    }
    Tabulation(document.querySelectorAll('.nav-tab2'), document.querySelectorAll('.tab-pane.accessories'))
    Tabulation(document.querySelectorAll('.nav-tab'), document.querySelectorAll('.tab-pane'))
    Tabulation(document.querySelectorAll('.nav-tab-inner'), document.querySelectorAll('.tab-pane.inner'))

}


