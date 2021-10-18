
const image = document.querySelector('img');
const title = document.getElementById('title')
const artist = document.getElementById('artist');


const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Seven y (Remix)',
    artist: 'Jacgn',
  },
  {
    name: 'metric-1',
    displayName: 'Seven y    mix)',
    artist: 'Jac   gn',
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong(){
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong(){
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
playBtn.setAttribute('title', 'Play');

  music.pause();
}

// Eventlisteners
playBtn.addEventListener('click',()=>(isPlaying?pauseSong():playSong()));

// Update DOM
function loadSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Currnt song
let songIndex = 0;

// Prev
function prevSong(){
  songIndex--;
  if (songIndex < 0){
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  playSong();
  
}

// Nextsong
function nextSong(){
  songIndex++;
  if (songIndex > songs.length -1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
  
}




function updateProgressBar(e){
  if (isPlaying) {
    const {duration, currentTime} = e.srcElement;
    // update progress bar width
    const progressPercent = (currentTime / duration) *100 ;
    progress.style.width = `${progressPercent}%`;
    // caLCULATE display for duration
    const durationMinutes = Math.floor(duration/60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds<10){
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration element to avoid NaN
    if(durationSeconds){
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // caLCULATE display for current
    const currentMinutes = Math.floor(currentTime/60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds<10){
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;

    
  }
}

function setProgressBar(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const {duration} = music;
  music.currentTime = (clickX / width) * duration;
}

function controlKeys(e){
  // Next /prev with arrow keys
  if (e.keyCode == 37){prevSong();}
  if (e.keyCode == 39){nextSong();}
  // Play/pause
  if (e.keyCode == 32){if(isPlaying == false) {playSong();} else if (isPlaying == true) {pauseSong()}}
}



// On load - Select first song
// loadSong(songs[songIndex]);

// Eventlisteners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar)


