let tabs = document.querySelectorAll('.faqs__tab');
let answers = document.querySelectorAll('.faqs__ans');

tabs.forEach( function (element, index) {
    element.onclick = function() {
        element.innerHTML = '<p>-</p>';
        element.classList.toggle('active-tab');
        answers[index].classList.toggle('none');
        if (!element.classList.contains('active-tab')) {
            element.innerHTML = '<p>+</p>';
        }
    }
});
