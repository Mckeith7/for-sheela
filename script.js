function startExperience() {
    const song = document.getElementById('bg-music');
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-content');

    // 1. Play Music
    if (song) {
        song.volume = 0.25;
        song.play();
    }

    // 2. AI Voice Reading (No file needed)
    const text = "Happy Birthday, Sheela. I was deep in my terminal today, but the logic kept leading back to you. I accidentally scripted something that reminded me of you today. Consider this a digital mark of a vibe I haven’t been able to clear from my cache.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);

    // 3. Switch View
    intro.style.display = 'none';
    main.style.display = 'block';
    main.classList.remove('hidden');
}


