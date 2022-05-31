const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

//Show active menu while scrollling.

const highlightMenu =() => {
    const elem = document.querySelector('.highlight');
    const homePage = document.querySelector('#home-page');
    const aboutPage = document.querySelector('#about-page');
    const servicePage = document.querySelector('#services-page');

    const scrollPos = window.scrollY;
    console.log(scrollPos);

    //add the highlight class to my menu items

    if(window.innerWidth > 800 && scrollPos <600){
        homePage.classList.add('highlight');
        aboutPage.classList.remove('highlight');
        return 
    }else if(window.innerWidth > 800 && scrollPos <1200){
        aboutPage.classList.add('highlight');
        homePage.classList.remove('highlight');
        servicePage.classList.remove('highlight');
        return 
    }else if(window.innerWidth > 800 && scrollPos <2300){
        servicePage.classList.add('highlight');
        aboutPage.classList.remove('highlight');
        return ;
    }

    if ((elem && window.innerWidth >800 && scrollPos <600) || elem){
        elem.classList.remove('remove');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);