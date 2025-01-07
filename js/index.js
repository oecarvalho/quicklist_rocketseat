var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
});

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
});


const allfilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');



allfilters.forEach((filter, index) =>{
    filter.addEventListener('click', (event) =>{
        event.preventDefault();

        allfilters.forEach(item => {
            item.classList.remove('active');
        });

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active')
    });
})