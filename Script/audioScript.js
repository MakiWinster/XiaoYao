document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    const playButton = document.getElementById('play-button');

    // Automatically try to play the audio
    audio.play().catch(function(error) {
        console.log('Auto-play was prevented. Please click the button to play the music.');
    });

    // Add event listener for button click to play audio
    playButton.addEventListener('click', function () {
        audio.play().then(() => {
            playButton.style.display = 'none'; // Hide button after successful play
        }).catch(function(error) {
            console.log('Error playing audio:', error);
        });
    });
});
