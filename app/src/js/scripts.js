//burger
alert('f');
(function () {
    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.nav');
    var menuItemClose = document.querySelector('.nav__close');
    burgerItem.addEventListener('click', function() {
        menu.classList.add('header__active');
    });
    menuItemClose.addEventListener('click', function() {
        menu.classList.remove('header__active');
    });
}());
