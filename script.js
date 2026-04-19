et currentPhoto = 1;

function startSlideshow() {
    setInterval(() => {
        currentPhoto++;
        if (currentPhoto > 4) currentPhoto = 1;
        document.getElementById('slideshow').src = `mary${currentPhoto}.jpg`;
    }, 3000); // Swaps every 3 seconds
}

function startExperience() {
    // 1. Audio Logic
    const song = document.getElementById('bg-music');
    if(song) { song.volume = 0.2; song.play(); }

    // 2. AI Voice Logic
    const text = "Happy Birthday, Sheela. I was deep in my terminal tonight, but the logic kept leading back to you. I accidentally scripted something that reminded me of you today. Sleek, mysterious, and definitely has that birthday energy.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.85;
    window.speechSynthesis.speak(speech);

    // 3. Launch Slideshow & UI
    startSlideshow();
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

