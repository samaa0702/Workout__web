let videoButton = document.querySelector('.videoarea__playbtn');
let video = document.getElementById('motivation-video');

if (document.querySelector('.main__videoarea')) {
    videoButton.onclick = function() {
        if (video.paused) {
            video.play();
            videoButton.classList.add('none');
        }
    };
    video.onclick = function() {
        if (video.paused) {
            video.play();
            videoButton.classList.add('none');
        }
        else {
            video.pause();
            videoButton.classList.remove('none');
        }
    };
}