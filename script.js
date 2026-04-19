console.log("Haven Scripts Loaded");

function startExperience() {
    console.log("Button Clicked!");
    const music = document.getElementById('bg-music');
    
    // Play music
    if(music) {
        music.play();
    }

    // Direct swap
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-content').classList.remove('hidden');
}


