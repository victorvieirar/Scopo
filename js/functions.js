$(function() {
    $('#menu').click(toggleMenu);
});

function toggleMenu() {
    let menu = $(this);
    menu.toggleClass('active fa-bars fa-times');
    $('#wrap').toggleClass('active');
    if(menu.hasClass('active')) $('#top-logo').attr('src', './assets/logo.svg');
    else $('#top-logo').attr('src', './assets/logo.white.svg');
}