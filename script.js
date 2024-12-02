const splash = document.querySelector('.splash-screen');

splash.addEventListener('click', () => {
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
    }, 1000);
});

const audio = document.getElementById('bgMusic');
const volumeBtn = document.querySelector('.volume-control');
let isPlaying = false;

const playAudio = () => {
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play()
            .then(() => {
                isPlaying = true;
                volumeBtn.innerHTML = `<path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>`;
            })
            .catch(e => console.log("Play failed:", e));
    }
};

document.addEventListener('click', function initAudio() {
    playAudio();
    document.removeEventListener('click', initAudio);
}, { once: true });

volumeBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        volumeBtn.innerHTML = `<path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"/>`;
        isPlaying = false;
    } else {
        playAudio();
    }
});

document.querySelector('.search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-icon').addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = document.querySelector('.search-bar').value;
    if (searchTerm.trim() !== '') {
        console.log('Searching for:', searchTerm);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById('bgMusic');
    const songUrls = [
        "https://api.fabdl.com/spotify/download-mp3/41539b97ad2dce41a25f3b856e51d2bc",
        "blob:https://www.musicverter.com/5371f79e-b06a-431e-9d67-891579a094e7",
        "https://api.fabdl.com/spotify/download-mp3/e42db725aafe61b2181b1daaceb12812",
        "https://api.fabdl.com/spotify/download-mp3/620f674fcc2a3e27e944f590f83b9e53",
        "https://api.fabdl.com/spotify/download-mp3/1e11989b50a60f357cf4b90caf07f217",
        "https://api.fabdl.com/spotify/download-mp3/ca3885b7053acfa1c2dfd2ccfcb5f3a5",
        "https://api.fabdl.com/spotify/download-mp3/ce4c0c635a1d1a868f6d42dbe83e16d9",
        "https://dl1.cloudmp3.cc/file/soundcloud1925844422128.mp3?fn=Raindrops.mp3",
        "https://api.fabdl.com/spotify/download-mp3/8bb31b6930020999ff8badf7a06c2a25",
        "https://api.fabdl.com/spotify/download-mp3/b4ef58a1924de74f4d5cf0562cdcfa21"
    ];

    const randomSong = songUrls[Math.floor(Math.random() * songUrls.length)];
    audioElement.src = randomSong;
    audioElement.play();
}); 
