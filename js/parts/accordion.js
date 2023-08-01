
if(document.querySelectorAll(".question-item").length){
    document.querySelectorAll(".question-item").forEach(function (item){
        item.addEventListener('click', function (){
            item.classList.toggle('active');
        })
    })
}

if(document.querySelectorAll(".accordion").length){
    document.querySelectorAll(".parent").forEach(function (item){
        item.addEventListener('click', function (){
            event.preventDefault()
            item.classList.toggle('active');
        })
    })
}

if(document.querySelectorAll(".accordion").length){
    document.querySelectorAll(".accordion-header").forEach(function (item){
        item.addEventListener('click', function (){
            event.preventDefault();
            document.querySelectorAll(".accordion").forEach(function (acc){
                if(acc!==item.parentNode) {
                    acc.classList.remove('active');
                }
            })
            item.parentNode.classList.toggle('active');
        })
    })
}

if(document.querySelectorAll(".filters").length){
    document.querySelectorAll(".filter-title").forEach(function (item){
        item.addEventListener('click', function (){
            event.preventDefault();
            const parent = item.parentNode;
            const moreBtn = parent.querySelector('.more');
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }
            moreBtn.addEventListener('click', function (){
                event.preventDefault();
                const textList=parent.querySelector('.text-h');
                if (textList.classList.contains('active')) {
                    textList.classList.remove('active');
                    moreBtn.textContent = moreBtn.getAttribute('data-show');
                } else {
                    textList.classList.add('active');
                    moreBtn.textContent = moreBtn.getAttribute('data-hide');
                }
            })



        })
    })

    //checkboxes
    document.querySelectorAll(".item-group").forEach(function (item){
        var checkboxes = item.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener('change', function() {

                if (this.checked) {
                    this.parentNode.classList.add('active');
                } else {
                    this.parentNode.classList.remove('active');
                }
            });
        }
    })

    //send review
}


if (window.innerWidth < 992) {
    if(document.querySelectorAll('.catalog-3').length){
        accordionBlocks=document.querySelectorAll('.filter-accordion');
        accordionBtns=document.querySelectorAll('.filter-open-btn');
        accordionBlocks.forEach(function (block){
            block.querySelector('.filter-open-btn').addEventListener('click', function (){
                event.preventDefault()
                block.classList.toggle('open');
            })
        })
    }
}






