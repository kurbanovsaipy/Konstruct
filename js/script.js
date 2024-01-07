
const navigationOnTop = document.querySelector('.navigation');
const menuBurger = document.querySelector('.menu_burger');
const body_hidden = document.querySelector('html');
const navigationTitle = document.querySelector('.navigation_title');
const navigationContainer = document.querySelector('.navigation_container');


window.addEventListener('scroll', () => {
    if(navigationOnTop.getBoundingClientRect().top <= 0 && !menuBurger.classList.contains('active')) { //определяет, когда блок коснётся верха браузера и присваивает значение 0
        navigationOnTop.classList.add('active');
    } else {
        navigationOnTop.classList.remove('active');
    }
});

/*--------Меню бургер--------*/
const navigationMobile = document.querySelector('.navigation_mobile');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    body_hidden.classList.toggle('hidden');
    navigationMobile.classList.toggle('active');
    if(navigationOnTop.getBoundingClientRect().top <= 0 && navigationOnTop.classList.contains('active')) {
        navigationOnTop.classList.remove('active');
    } else if (navigationOnTop.getBoundingClientRect().top <= 0 && !navigationOnTop.classList.contains('active')){
        navigationOnTop.classList.add('active');
    }
});


window.addEventListener('click', (e) => {
    e = e.target;
    if (e != navigationOnTop && e != menuBurger && e != navigationMobile && e != navigationTitle && e != navigationContainer){
        body_hidden.classList.remove('hidden');
        menuBurger.classList.remove('active');
        navigationMobile.classList.remove('active');
    }
})

/*-----------Скролл поверх страницы-------------*/ 
var {OverlayScrollbars} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('body'), {});

