const playSound = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.code}"`);
    const key = document.querySelector(`.key[data-key="${event.code}"`);
    if(!audio) 
    return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
};

const transitionRemove = function (event) {
    if (event.propertyName !== 'transform') return; //this means if property is not transform, skip it.
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", transitionRemove);
});

window.addEventListener("keydown",playSound);