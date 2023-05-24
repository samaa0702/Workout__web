const pageName = document.getElementsByTagName('title');
let headerLinks = document.querySelectorAll('.menu__link');

headerLinks.forEach( function(element) {
    if (element.innerText === pageName[0].innerText) {
        element.classList.add('link__active');
    }
});