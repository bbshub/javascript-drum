

const playSound = (e) => {
    const pressedKeyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${pressedKeyCode}"]`);
    const key = document.querySelector(`.key[data-key="${pressedKeyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener('transitionend', removeKeyTransition);
});

function removeKeyTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
}