let hints = document.querySelectorAll('.hint');

hints.forEach((element) => {
    element.onmouseover = function() {
        element.innerHTML += '<p class="hint-answer">Description of row-title.... bla bla bla</p>';
    }
    element.onmouseout = function() {
        element.innerHTML = '!';
    }
})