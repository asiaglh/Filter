$(document).ready(function() {
    // При натисканні на бургер з класом header__burger
    $('.header__burger').click(function() {
        // Додаємо клас active-nav до меню з класом menu-mobile
        $('.menu-mobile').addClass('active-nav');
    });

        $('.toggleable > span').click(function(){
            $(this).toggleClass('caretBottom');
            $(this).parent().siblings().find('ul').slideUp();
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().removeClass('active');
            return false;
        });

    // При натисканні на кнопку з id menu-mobile-close-btn
    $('#menu-mobile-close-btn').click(function() {
        // Забираємо клас active-nav з меню з класом menu-mobile
        $('.menu-mobile').removeClass('active-nav');
    });

    if(document.querySelectorAll('.search-open-btn-mobile').length) {
        document.querySelector('.search-open-btn-mobile').addEventListener('click', function () {
            const mobileSearch = document.querySelector('.mobile-search');
            mobileSearch.classList.add('active');
            mobileSearch.querySelector('.search_close').addEventListener('click', function () {
                mobileSearch.classList.remove('active');
            })
        })
    }




    $('.top-bar_select').niceSelect()

    $('.tel-select-wrap .caret').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.tel-select-wrap .options li').on('click', function() {
        var value = $(this).data('value');
        var number = $(this).find('.number').text();
        $(this).closest('.tel-select-wrap').find('.current').html(number);
        $(this).closest('.tel-select-wrap').find('select').val(value).trigger('change');
        $(this).closest('.tel-select').removeClass('open');
    });

    $(document).on('click', function(event) {
        var target = $(event.target);
        if (!target.closest('.tel-select-wrap').length) {
            $('.tel-select').removeClass('open');
        }
    });

    const menuItems = document.querySelectorAll('.menuShow-link');
    const tabContents = document.querySelectorAll('.menuShow-item');
    tabContents.forEach(function (item){
        item.classList.add('hidden');
    })

    menuItems.forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.preventDefault();
            const contentWrap=document.querySelector('.menuShow');
            contentWrap.classList.remove("hidden");

            // Hide the previously displayed tab content
            const activeTabContent = document.querySelector('.menuShow-item:not(.hidden)');
            if (activeTabContent) {
                activeTabContent.classList.add('hidden');
            }

            // Show the tab content that matches the data-tab attribute
            const tabId = item.dataset.tab;
            const tabContent = document.querySelector(`.menuShow-item[data-tab="${tabId}"]`);
            tabContent.classList.remove("hidden");
        });
    });

// Add mouseleave event to hide contentWrap and all tab contents
    const menu = document.querySelector('.menu-main');
    if(menu) {
        menu.addEventListener('mouseleave', (event) => {
            const contentWrap = document.querySelector('.menuShow');
            contentWrap.classList.add("hidden");

            const tabContents = document.querySelectorAll('.menuShow-item');
            tabContents.forEach(tabContent => {
                tabContent.classList.add('hidden');
            });
        });
    }

    const searchBtn = document.querySelector('.menuSearch-btn');
    const searchInput = document.getElementById('searchinput');
    const searchClose = document.querySelector('.search_close');
    const menuList = document.querySelector('.menu-list');
    const menuSearch = document.querySelector('.menuSearch');

    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            menuList.classList.toggle('hidden');
            menuSearch.classList.toggle('hidden');
            searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            menuList.classList.toggle('hidden');
            menuSearch.classList.toggle('hidden');
            searchInput.value = '';
        });
    }


});