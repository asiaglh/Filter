
$(document).ready(function() {

    //синхронізація прокрутки на сторінці порівняння
    if(document.querySelectorAll('.compare').length) {
        const sliderCards = document.querySelector('.slider-cards');
        const dataItems = document.querySelectorAll('.data-items');

        sliderCards.addEventListener('scroll', synchronizeScroll);

        for (const dataItem of dataItems) {
            dataItem.addEventListener('scroll', synchronizeScroll);
        }

        function synchronizeScroll(event) {
            const target = event.target;

            if (target === sliderCards) {
                for (const dataItem of dataItems) {
                    dataItem.scrollLeft = sliderCards.scrollLeft;
                }
            } else if (dataItems.includes(target.parentNode)) {
                sliderCards.scrollLeft = target.parentNode.scrollLeft;
            }
        }
    }
    //кнопки на каталог 3
    if(document.querySelectorAll('.catalog-3').length) {
        const locationHrefButtons = document.querySelectorAll('.location-href');
        locationHrefButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();

                locationHrefButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });

                this.classList.add('active');
            });
        });

    }
    //майстер підбору на каталог3, кастомні селекти
    if($('.custom-select')) {

        $('.custom-select .selected-option').on('click', function () {
            $(this).parent().toggleClass('open');
        });

        $('.custom-select .options li').on('click', function () {
            var value = $(this).data('value');
            var text = $(this).text();
            $(this).parent().siblings('.selected-option').text(text);
            $(this).parent().parent().removeClass('open');

            var $itemSelect = $(this).closest('.item-select');
            if ($(this).index() !== 0) {
                $itemSelect.addClass('checked');
            } else {
                $itemSelect.removeClass('checked');
            }

            var isAnySelected = $('.item-select.checked').length > 0;

            // Перевірка умови активації кнопки "Підібрати"
            if (isAnySelected) {
                $('.btn-1').removeAttr('disabled').removeClass('disabled');
            } else {
                $('.btn-1').attr('disabled', 'disabled').addClass('disabled');
            }
        });

        $('.item-select .clear-selection').on('click', function () {
            var $itemSelect = $(this).closest('.item-select');
            var $selectedOption = $itemSelect.find('.selected-option');
            var $firstOption = $itemSelect.find('.options li:first-child');
            $selectedOption.text($firstOption.text());
            $itemSelect.removeClass('checked');

            var isAnySelected = $('.item-select.checked').length > 0;

            // Перевірка умови активації кнопки "Підібрати"
            if (isAnySelected) {
                $('.items-select .btn-1').removeAttr('disabled').removeClass('disabled');
            } else {
                $('.items-select .btn-1').attr('disabled', 'disabled').addClass('disabled');
            }
        });
    }

    // Застосування маски до полів вводу телефонного номеру в формах
    const forms = document.querySelectorAll('.request-call form');
    forms.forEach(form => {
        const phoneInput = form.querySelector('input[name="phone"]');
        const maskOptions = {
            mask: "+38(099) 9999 999"
        };
        Inputmask(maskOptions).mask(phoneInput);
    });

    if(document.querySelectorAll('.phone_send_form_1 .form-control').length) {
        const telForm = document.querySelector('.phone_send_form_1 .form-control');
        const maskNew = {
            mask: "+38(099) 9999 999"
        };
        Inputmask(maskNew).mask(telForm);
    }


    const cartForm=document.getElementById('formorder');
    if (cartForm) {
        cartForm.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }

    if (document.querySelectorAll('.service-single').length) {
        const orderBtn = document.querySelector('.tr .order-btn');
        orderBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = orderBtn.getAttribute('data-href');
            const targetElement = document.querySelector(targetId);
            const scrollOffset = 30;
            const targetPosition = targetElement.getBoundingClientRect().top;
            const currentPosition = window.pageYOffset;

            window.scrollTo({
                top: currentPosition + targetPosition - scrollOffset,
                behavior: 'smooth'
            });
        });
    }

    if(document.querySelectorAll(".price-slider").length) {
        const slider = document.getElementById('price-slider');
        var inputFrom = document.getElementById('price_range_slider_from');
        var inputTo = document.getElementById('price_range_slider_to');


// створити слайдер з початковими значеннями і підключити до відповідних інпутів
        noUiSlider.create(slider, {
            start: [inputFrom.value, inputTo.value],
            connect: true,
            range: {
                'min': 0,
                'max': 29440
            }
        });

// додати обробник події change до інпуту "від"
        inputFrom.addEventListener('change', function () {
            slider.noUiSlider.set([this.value, null]);
        });

// додати обробник події change до інпуту "до"
        inputTo.addEventListener('change', function () {
            slider.noUiSlider.set([null, this.value]);
        });

        slider.noUiSlider.on('update', function (values, handle) {
            // оновлюємо значення інпутів відповідно до змінених значень бігунка
            var value = Math.round(values[handle]);
            if (handle === 0) {
                inputFrom.value = value;
            } else {
                inputTo.value = value;
            }
        });
    }

    if(document.querySelectorAll('.credit-slider').length){

        const sliderCreditPrivat = document.getElementById('credit-slider-privat');

        noUiSlider.create(sliderCreditPrivat, {
            start: 0,
            step:1,
            connect: 'lower',
            range: {
                'min': 3,
                'max':6,
            }
        });




        const sliderCreditMono = document.getElementById('credit-slider-mono');

        noUiSlider.create(sliderCreditMono, {
            start: 0,
            step:1,
            connect: 'lower',
            range: {
                'min': 3,
                'max':10,
            }
        });




        const sliderCreditLater = document.getElementById('credit-slider-later');

        const stepsLater = [3,6,10];

        noUiSlider.create(sliderCreditLater, {
            start: 0,
            step:1,
            connect: 'lower',
            range: {
                'min': 3,
                'max':10,
            },
            pips: {
                mode: 'values',
                values: stepsLater,
                density: 4
            }
        });




        const sliderCreditAlfa = document.getElementById('credit-slider-alfa');

        const stepsAlfa = [1,4,8,12,16,20,24,28,32,36];

        noUiSlider.create(sliderCreditAlfa, {
            start: 0,
            step:1,
            connect: 'lower',
            range: {
                'min': 1,
                'max':36,
            },
            pips: {
                mode: 'values',
                values: stepsAlfa,
                density: 4
            }
        });

        sliderCreditAlfa.noUiSlider.on('update', function (values, handle) {
            var value = parseInt(values[handle]);
            if (!stepsAlfa.includes(value)) {
                for (var i = 0; i < stepsAlfa.length; i++) {
                    if (value < stepsAlfa[i]) {
                        sliderCreditAlfa.noUiSlider.set(stepsAlfa[i]);
                        break;
                    }
                }
            }
        });


        if(document.querySelectorAll('.modal-credit').length){

            const sliderCreditPrivatmodal = document.getElementById('credit-slider-privat-modal');

            noUiSlider.create(sliderCreditPrivatmodal, {
                start: 0,
                step:1,
                connect: 'lower',
                range: {
                    'min': 3,
                    'max':6,
                }
            });


            const sliderCreditMonomodal = document.getElementById('credit-slider-mono-modal');

            noUiSlider.create(sliderCreditMonomodal, {
                start: 0,
                step:1,
                connect: 'lower',
                range: {
                    'min': 3,
                    'max':10,
                }
            });


            const sliderCreditLatermodal = document.getElementById('credit-slider-later-modal');

            noUiSlider.create(sliderCreditLatermodal, {
                start: 0,
                step:1,
                connect: 'lower',
                range: {
                    'min': 3,
                    'max':10,
                },
                pips: {
                    mode: 'values',
                    values: stepsLater,
                    density: 4
                }
            });

            sliderCreditLatermodal.noUiSlider.on('update', function (values, handle) {
                var value = parseInt(values[handle]);
                if (!stepsLater.includes(value)) {
                    for (var i = 0; i < stepsLater.length; i++) {
                        if (value < stepsLater[i]) {
                            sliderCreditLatermodal.noUiSlider.set(stepsLater[i]);
                            break;
                        }
                    }
                }
            });


            const sliderCreditAlfamodal = document.getElementById('credit-slider-alfa-modal');

            noUiSlider.create(sliderCreditAlfamodal, {
                start: 0,
                step:1,
                connect: 'lower',
                range: {
                    'min': 1,
                    'max':36,
                },
                pips: {
                    mode: 'values',
                    values: stepsAlfa,
                    density: 4
                }
            });

            sliderCreditAlfamodal.noUiSlider.on('update', function (values, handle) {
                var value = parseInt(values[handle]);
                if (!stepsAlfa.includes(value)) {
                    for (var i = 0; i < stepsAlfa.length; i++) {
                        if (value < stepsAlfa[i]) {
                            sliderCreditAlfamodal.noUiSlider.set(stepsAlfa[i]);
                            break;
                        }
                    }
                }
            });
        }


    }

// для події прокручування сторінки

    const btnToTop = document.getElementById('tothetop');

    if(btnToTop){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnToTop.classList.add('visible');
        } else {
            btnToTop.classList.remove('visible');
        }
    });

    btnToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    }


    //чати
    const messengerBtn = document.querySelector('.messenger__switch');
    const messengerBlock = document.querySelector('.messenger__block');

    if(messengerBtn) {
        messengerBtn.addEventListener('click', () => {
            messengerBlock.classList.toggle('active');
        });
    }

    if(document.querySelectorAll('.btn-changer').length){
        const btnView=document.querySelectorAll('.btn-view');
        btnView.forEach(function (btnActive){
            btnActive.addEventListener('click', function (){
                event.preventDefault()
                btnView.forEach(function (btn){
                    btn.classList.remove('active');
                })
                btnActive.classList.add('active');
                const catalogs = document.querySelectorAll('.catalog-list');
                const showCatalog = btnActive.getAttribute('data-listStyle');
                catalogs.forEach(function (unActive){
                    unActive.classList.remove('visible')
                })
                catalogs.forEach((item) => {
                    if (item.getAttribute('data-listStyle') === showCatalog) {
                        item.classList.add('visible');
                    }
                });
            })
        })
    }

    //рейтинг
    $(function() {
        if ($('.reviews-stars img').length) {
            $('.reviews-stars').on('mousemove', function(e) {
                var starWidth = $(this).find('img').width();
                var offsetX = e.pageX - $(this).offset().left;
                var starIndex = Math.floor(offsetX / starWidth);

                $(this).find('img').each(function(index) {
                    if (index <= starIndex) {
                        $(this).attr('src', $(this).data('show'));
                    } else {
                        $(this).attr('src', $(this).data('off'));
                    }
                });
            });

            $('.reviews-stars').on('mouseleave', function() {
                var selectedRating = $(this).find('input[name="rating"]').val();
                if (!selectedRating) {
                    $(this).find('img').attr('src', $(this).find('img').data('off'));
                }
            });

            $('.reviews-stars').on('click', 'img', function() {
                var starIndex = $(this).index();
                $(this).siblings('input[name="rating"]').val(starIndex + 1);
                $(this).closest('.your-rating').find('.help-block').hide();
            });

            $('.reviews-stars').on('mouseleave', function() {
                var selectedRating = $(this).find('input[name="rating"]').val();
                if (!selectedRating) {
                    $(this).find('img').attr('src', $(this).find('img').data('off'));
                }
            });
        }
    });

    // вибираємо всі посилання в меню
    const links = document.querySelectorAll('.target-link a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-href');
            const targetElement = document.querySelector(targetId);
            const scrollOffset = 30;
            const targetPosition = targetElement.getBoundingClientRect().top;
            const currentPosition = window.pageYOffset;

            window.scrollTo({
                top: currentPosition + targetPosition - scrollOffset,
                behavior: 'smooth'
            });

            // Зміна класу active на посиланнях
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        const scrollOffset = 70;
        const windowTop = window.pageYOffset;

        links.forEach(link => {
            const targetId = link.getAttribute('data-href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + windowTop;

            if (targetPosition <= windowTop + scrollOffset) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    if(document.querySelectorAll('.seoText').length){
        const buttonSeoText = document.querySelector('.seoText');
        const textBlock = document.querySelector('.text-active');

        buttonSeoText.addEventListener('click', () => {
            event.preventDefault()
            if (textBlock.classList.contains('visible')) {
                textBlock.classList.remove('visible');
                buttonSeoText.textContent = buttonSeoText.getAttribute('data-show');
            } else {
                textBlock.classList.add('visible');
                buttonSeoText.textContent = buttonSeoText.getAttribute('data-hide');
            }
        });
    }

    const tabButtons = document.querySelectorAll('.tab-btn');

// Додаємо обробник подій для кожної кнопки табу
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            event.preventDefault()
            tabButtons.forEach( (item)=> {
                item.classList.remove('active')
            });

            button.classList.add('active');
            document.querySelectorAll('.tab-cnt').forEach((item) => {
                    item.classList.remove('visible');
            });
            // Отримуємо значення атрибуту data-show для цієї кнопки
            const showClass = button.getAttribute('data-show');

            document.querySelectorAll('.tab-cnt').forEach((item) => {
                if (item.getAttribute('data-show') === showClass) {
                    item.classList.add('visible');
                }
            });
        });
    });

    const tabButtons2 = document.querySelectorAll('.nav-tab');

// Додаємо обробник подій для кожної кнопки табу
    tabButtons2.forEach((button) => {
        button.addEventListener('click', () => {
            event.preventDefault()
            tabButtons2.forEach( (item)=> {
                item.classList.remove('active')
            });

            button.classList.add('active');
            document.querySelectorAll('.tab-pane').forEach((item) => {
                item.classList.remove('active');
            });
            // Отримуємо значення атрибуту data-show для цієї кнопки
            const showClass = button.getAttribute('data-tab');
           document.querySelectorAll('.tab-pane').forEach((item) => {
                if (item.getAttribute('data-tab')  === showClass) {
                    item.classList.add('active');
                }
            });
        });
    });


    const footerPhones = document.querySelector('.footerNumbers-wrap');
    if(footerPhones) {

        document.querySelector('.footer-phone-btn').addEventListener('click', function () {
            event.preventDefault()
            if (footerPhones.classList.contains('visible')) {
                footerPhones.classList.remove('visible');
            } else {
                footerPhones.classList.add('visible');
            }
        });

    }


});