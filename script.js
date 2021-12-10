const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const durationDisplay = document.querySelector("#duration");
const currentTimeDisplay = document.querySelector("#current-time");
// Check if Playing
let isPlaying = false;

const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Jacinto",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Jacinto",
  },
];

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
// Load Song
const loadSong = function (song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `./img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
  playSong();
};
// Current Song
let currentSong = 0;
// Prev Song
const prevSong = function () {
  if (currentSong === 0) {
    currentSong = songs.length - 1;
    loadSong(songs[currentSong]);
  } else {
    currentSong = currentSong - 1;
    loadSong(songs[currentSong]);
  }
};
// Next Song
const nextSong = function () {
  if (currentSong === songs.length - 1) {
    currentSong = 0;
    loadSong(songs[currentSong]);
  } else {
    currentSong = currentSong + 1;
    loadSong(songs[currentSong]);
  }
};

// Update Progress Bar & time
const updateProgressBar = function (e) {
  if (!isPlaying) return;
  const { duration, currentTime } = e.srcElement;
  // Update progress bar width
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  // Update duration display
  const durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  // Delayed switching duration
  if (durationSeconds) {
    durationDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
  }
  // Update current time display
  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  if (currentSeconds) {
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds}`;
  }
};
// Set Progress Bar
const setProgressBar = function (e) {
  const width = this.clientWidth;
  const clickedWidth = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickedWidth / width) * duration;
};

playBtn.addEventListener("click", () =>
  !isPlaying ? playSong() : pauseSong()
);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);
