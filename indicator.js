const btn = document.getElementById('indicator');
    const sound = document.getElementById('indicatorSound');
    let isPlaying = false;

    btn.addEventListener('click', () => {
        if (!isPlaying) {
            // Start blinking and play sound in loop
            btn.classList.add('blinking');
            sound.currentTime = 0;
            sound.loop = true;
            sound.play().catch(err => console.error("Audio play error:", err));
            isPlaying = true;
        } else {
            // Stop blinking and sound
            btn.classList.remove('blinking');
            sound.pause();
            isPlaying = false;
        }
    });