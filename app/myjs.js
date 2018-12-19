var dots = document.getElementsByClassName('dot');
var slides = document.getElementsByClassName('img-slide');
var content = document.getElementsByClassName('content-slide');
var album = document.getElementsByClassName('img-album');
console.log(album);
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
    var menu = document.getElementsByClassName('menu')[0];
    if(menu.style.visibility === 'visible'){
        menu.style.visibility = 'hidden'
    }
    else menu.style.visibility = 'visible'
}
