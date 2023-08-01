$(document).ready(function() {


    function openModal(modalID) {
        let modalElement = document.querySelector(".modal#" + modalID);

        if (modalElement) {
            modalElement.classList.add("in");
        }
        document.body.classList.add('modal-open');
    }

    const modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        const closeButton = modal.querySelector('.btn-close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                closeModal(modal);
            });
        }

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    function closeModal(modal) {
        modal.classList.remove('in');
        document.body.classList.remove('modal-open');
    }
    
    if(document.querySelectorAll('.header-cart-top.full').length){
        document.querySelector('.header-cart-top.full').addEventListener('click', function (event) {
            event.preventDefault();
            openModal('modal-cart');
        });
    }


    if(document.querySelectorAll('.call-btn.modal-btn').length) {
        const callInput = document.querySelectorAll('.request-call-top input');
            const maskOptions = {
                mask: "+38(099) 9999 999"
            };
            Inputmask(maskOptions).mask(callInput);
        document.querySelector('.call-btn.modal-btn').addEventListener('click', function (event) {
            event.preventDefault();
            openModal('request-call-top');
        });
    }

    if(document.querySelectorAll('.request-a-call.modal-btn').length) {
        document.querySelector('.request-a-call.modal-btn').addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.menu-mobile').classList.remove('active-nav');
            openModal('request-call-top');
        });
    }

    if(document.querySelectorAll('.city-select.modal-btn').length) {
        document.querySelector('.city-select.modal-btn').addEventListener('click', function (event) {
            event.preventDefault();
            openModal('modal-city-select');
        });
    }

    if(document.querySelectorAll('.guarantee').length){
        document.querySelectorAll('.guarantee-link').forEach(function (link){
            link.addEventListener('click', function (event){
                event.preventDefault();
                const elemId=link.getAttribute('data-modal');
                openModal(elemId);
            })
        })
    }

    if(document.querySelectorAll('.product-cart').length){
        document.querySelectorAll('.product-modal-link').forEach(function (link){
            link.addEventListener('click', function (event){
                event.preventDefault()
                const elemId=link.getAttribute('data-modal');
                openModal(elemId);
                if(elemId==='modal-credit'){

                    const modalCredit = document.querySelector('.modal-credit');
                    const tabs = modalCredit.querySelectorAll('.nav-tab-modal');

                    tabs.forEach(function(tab) {
                            tab.addEventListener('click', function(e) {
                                tabs.forEach(function (item){
                                    item.classList.remove('active');
                                })
                                e.preventDefault();
                                tab.classList.add('active');
                                const tabId = this.dataset.tab;
                                const activeTab = modalCredit.querySelector('.tab-pane-modal.active');
                                const newActiveTab = modalCredit.querySelector(`.tab-pane-modal[data-tab="${tabId}"]`);
                                activeTab.classList.remove('active');
                                newActiveTab.classList.add('active');
                            });
                        });
                }
            })
        })
    }

    if(document.querySelectorAll('.shipping_payment').length){
        document.querySelectorAll('.modal-link').forEach(function (link){
            link.addEventListener('click', function (event){
                event.preventDefault();
                const elemId=link.getAttribute('data-modal');
                openModal(elemId);
            })
        })
    }


})