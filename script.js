const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

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
  pauseSong();
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = `./img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
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

playBtn.addEventListener("click", () =>
  !isPlaying ? playSong() : pauseSong()
);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
