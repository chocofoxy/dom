  document.getElementById('play').onclick = function() {
    var audio = document.getElementById('music');
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
