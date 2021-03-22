const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');

/*piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }
});*/
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
    audio.currentTime=0;
    audio.play();
    key.classList.add('piano-key-active', 'piano-key-active-pseudo');
});
window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
    key.classList.remove('piano-key-active');
});

const startSound = (event) => {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
}

const stopSound = (event) => {
    event.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
}

const startCorrespondOver = (event) => {
    if(event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    pianoKeys.forEach((el)=>{
        el.addEventListener('mouseover', startSound);
        el.addEventListener('mouseout', stopSound);
    });
}
}

const stopCorrespondOver = () => {
    pianoKeys.forEach((el)=>{
        el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
        el.removeEventListener('mouseover', startSound);
        el.removeEventListener('mouseout', stopSound);
    });
}
piano.addEventListener('mousedown', startCorrespondOver);
piano.addEventListener('mouseup', stopCorrespondOver);


const btnLet = document.querySelector('.btn-letters');
const btnNot = document.querySelector('.btn-notes');
btnLet.addEventListener('click', ()=>{
    btnLet.classList.add('btn-active');
    pianoKeys.forEach((el)=>{
        el.classList.add('piano-key-letter');
    });
    btnNot.classList.remove('btn-active');
})
btnNot.addEventListener('click', ()=>{
    btnNot.classList.add('btn-active');
    pianoKeys.forEach((el)=>{
        el.classList.remove('piano-key-letter');
    });
    btnLet.classList.remove('btn-active');
})

const btnFullScreen = document.querySelector('.openfullscreen');
function toggleScreen() {
    if(!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if(document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}
btnFullScreen.addEventListener('click', toggleScreen);