const music = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

// Check if Playing
let isPlaying = false;

// Play
const playSong = function () {
  isPlaying = true;
  music.play();
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
};
// Pause
const pauseSong = function () {
  isPlaying = false;
  music.pause();
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
};

// console.dir(music.paused);
playBtn.addEventListener("click", () =>
  !isPlaying ? playSong() : pauseSong()
);
