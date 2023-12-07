window.onscroll = function showHeader() {
    var header = document.querySelector('.header_container');
    if(window.pageYOffset > 450){
        header.classList.add('header_fixed2');
    } else{
        header.classList.remove('header_fixed2');
    }

    var header_img = document.querySelector('.header_img');
    if(window.pageYOffset > 450){
        header_img.classList.add('header_img_fixed');
    } else{
        header_img.classList.remove('header_img_fixed');
    }

    var header_number = document.querySelector('.header_number');
    if(window.pageYOffset > 450){
        header_number.classList.add('header_number_fixed');
    } else{
        header_number.classList.remove('header_number_fixed');
    }

    var header_nav = document.querySelector('.header_nav');
    if(window.pageYOffset > 450){
        header_nav.classList.add('header_nav_item_fixed');
    } else{
        header_nav.classList.remove('header_nav_item_fixed');
    }

    var logo = document.querySelector('.logo');
    if(window.pageYOffset > 450){
        logo.classList.add('logo_fixed');
    } else{
        logo.classList.remove('logo_fixed');
    }

    var logo_black = document.querySelector('.logo_black');
    if(window.pageYOffset > 450){
        logo_black.classList.add('logo_black_fixed');
    } else{
        logo_black.classList.remove('logo_black_fixed');
    }
        
    var hd_nav = document.querySelectorAll('.header_nav_item');
    if(window.pageYOffset > 450){
        hd_nav.forEach( b=>b.classList.add('header_nav_item2'));
    } else{
        hd_nav.forEach( b=>b.classList.remove('header_nav_item2'));
    }
}
