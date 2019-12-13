var audio = document.getElementById('music');


function Music(name, path) {
  this.name = name;
  this.path = path;
}

var lib = [ new Music('Adelle - Rolling in the Deep', 'Rolling in the Deep.mp3'),
            new Music('Eminem - Headlights ft. Nate Ruess', 'eminem-headlights-ft-nate-ruess-official-music-video.mp3'),
            new Music('NF - Remember This', 'nf-remember-this-audio.mp3') ];

var num = 0 ;
audio.src = lib[num].path;
document.getElementById('music_name').innerHTML = lib[num].name;

document.getElementById('next').onclick = function() {
  num ++ ;
  num = (num == lib.length) ? 0 : num;

  if (!audio.paused) {
    document.getElementById('playIcon').style.display = "block";
    document.getElementById('pauseIcon').style.display = "none"; }

  audio.src = lib[num].path;
  document.getElementById('music_name').innerHTML = lib[num].name;




}

document.getElementById('play').onclick = function() {

  if (audio.paused) {
    audio.play();
    document.getElementById('playIcon').style.display = "none";
    document.getElementById('pauseIcon').style.display = "block";
  } else {
    audio.pause();
    document.getElementById('playIcon').style.display = "block";
    document.getElementById('pauseIcon').style.display = "none";
  }

}
