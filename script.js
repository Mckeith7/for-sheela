const maryPhotos = ["mary1.jpg", "mary2.jpg", "mary3.jpg", "mary4.jpg"];
const displayMessage = `Happy Birthday, Mary! 🎂✨ 

Since I'm becoming a bit of a tech wizard lately, I figured I’d put those skills to use. I coded this page specifically so a computer could tell you how great you are (though I’m sure you already knew that! 💅).

Honestly, when we first met, I didn't think we could ever become this close. But now, I can't imagine things any other way. I’m so grateful to have you in my life; you challenge me to be better every day, and I don't take that for granted. 🙌

I haven't bought that Audi RS7 yet 🚗, but keep that space in your schedule open—I promise soon I'll be pulling up to pick you up in one. 💨

Thanks for putting up with me and for all the memories captured in these photos. Let’s make this year the best one yet. Now, enough talk... let's go eat some cake! 🍰🎈`;

const speechMessage = displayMessage.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

const startBtn = document.getElementById('start-btn');
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const maryImg = document.getElementById('mary-slideshow');
const textEl = document.getElementById('typing-text');
const music = document.getElementById('bday-music');

startBtn.addEventListener('click', () => {
    music.volume = 1.0;
    music.play();
    introScreen.style.opacity = 0;
    
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => { mainContent.style.opacity = 1; }, 100);
        
        music.volume = 0.2; 
        playVoice();
        typeWriter();
        startSlideshow();
        setInterval(createFloatingEmoji, 400);
    }, 1500);
});

function playVoice() {
    const speech = new SpeechSynthesisUtterance(speechMessage);
    speech.rate = 0.85;
    window.speechSynthesis.speak(speech);
}

function typeWriter() {
    let i = 0;
    function typing() {
        if (i < displayMessage.length) {
            textEl.innerHTML += displayMessage.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();
}

function startSlideshow() {
    let current = 0;
    setInterval(() => {
        current = (current + 1) % maryPhotos.length;
        maryImg.style.opacity = 0;
        setTimeout(() => {
            maryImg.src = maryPhotos[current];
            maryImg.style.opacity = 1;
        }, 500);
    }, 4500);
}

function createFloatingEmoji() {
    const container = document.getElementById('emoji-container');
    const emojis = ['❤️', '✨', '🎈', '🎂'];
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    container.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
}


