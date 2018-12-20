var dots = document.getElementsByClassName('dot');
var slides = document.getElementsByClassName('img-slide');
var content = document.getElementsByClassName('content-slide');
var album = document.getElementsByClassName('img-album');
var kmd = document.getElementsByClassName('kmd-menu')[0];
var menuTop = document.getElementsByClassName('menu')[0];
var d_menu = document.getElementsByClassName('p-d-menu');
var drop_menu = document.getElementsByClassName('drop-menu');
var icon_exit = document.getElementsByClassName('icon-exit');
var a = 0;
var i;
function currentSlide(n) {

    a=n;
    for (i=0 ; i<slides.length ; i++){
        slides[i].classList.add('display');
        content[i].classList.add('display');
        dots[i].classList.remove('active');
    }
    slides[n].classList.remove('display');
    content[n].classList.remove('display');
    dots[n].classList.add('active');
}
var w=0;
function windowWidth() {
    w = window.innerWidth
    // setTimeout(windowWidth,1000)
}
windowWidth();

function auto() {

    if (a>2){
        a=0;
    }
    currentSlide(a);
    a++;
    setTimeout(auto,6000);
}
auto();
var b=0;
function plusSlides(n) {
    b = b + n;
    for (i=0;i<album.length;i++){
        album[i].classList.add('display');
    }
    if(b<0){
        b = album.length - 1;
    }
    if(b > album.length-1){
        b=0;
    }
    album[b].classList.remove('display')
}

function menu() {
    menuTop.style.visibility = 'visible';
    kmd.classList.remove('display')
}
function hiddenMenu() {
    menuTop.style.visibility = 'hidden';
    kmd.classList.add('display')
}
function hover_link(x) {
    x.parentElement.classList.add('hover-link')

}
function leave(x) {
    x.parentElement.classList.remove('hover-link')
}
function dropMenu(x) {
    if (w<1200){
        x.children[1].classList.remove("display");
        icon_exit[0].classList.remove('display')
    }
}
function hiddenDropMenu() {
    for (i = 0; i< drop_menu.length; i++ ){
        drop_menu[i].classList.add('display')
    }
    icon_exit[0].classList.add('display')
}
function reponsiveMenu() {
    if(w<1200){
        for (i = 0; i< d_menu.length; i++ ){
            d_menu[i].classList.remove('d-menu')
            drop_menu[i].classList.add('display')
        }
    }
    if(w>=1200){
        for (i = 0; i< d_menu.length; i++ ){
            d_menu[i].classList.add('d-menu')
            drop_menu[i].classList.remove('display')
        }
    }
}
reponsiveMenu();
console.log(window.screen)