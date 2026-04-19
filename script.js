function startExperience() {
    const song = document.getElementById('bg-music');
    
    // Play music at low volume
    if(song) {
        song.volume = 0.2;
        song.play();
    }

    // AI Voice
    const text = "Happy Birthday, Sheela. I was deep in my terminal today, but the logic kept leading back to you. I accidentally scripted something that reminded me of you today. Consider this a digital mark of a vibe I haven’t been able to clear from my cache.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.85;
    window.speechSynthesis.speak(speech);

    // Swap screens
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

