const button = document.getElementById("button");

button.onclick = function() {
  if (document.getElementById("username").value == "chris" && document.getElementById("password").value == "iloveyou") {
    document.location = ("https://eliechoi2.github.io/home");
  } else {
    alert("Incorrect username/password. Please try again.");
  }

};
function folder() {
  alert("yes");
}
function meow() {
  var meow = document.getElementById("meow");
  if (meow.style.display === "none") {
    meow.style.display = "block";
  } else {
    meow.style.display = "none";
  }
}
function spotify() {
  var elieSong = document.getElementById("elieSong");
  var chrisSong = document.getElementById("chrisSong");
  if (elieSong.style.display === "none") {
    elieSong.style.display = "block";
    chrisSong.style.display = "none";
  } else {
    elieSong.style.display = "none";
    chrisSong.style.display = "none";
  }
}
function playSong() {
  var audio = document.getElementById("audio");
  audio.play();
  var play = document.getElementById("play");
  if (play.style.display === "none") {
    play.style.display = "block";
  } else {
    play.style.display = "none";
  }
}
function pauseSong() {
  var audio = document.getElementById("audio");
  audio.pause();
  var pause = document.getElementById("pause");
  var play = document.getElementById("play");
  if (pause.style.display === "none") {
    pause.style.display = "block";
  } else {
    play.style.display = "block";
  }
}
function playSongChris() {
  var audio = document.getElementById("audioChris");
  audio.play();
  var play = document.getElementById("playChris");
  if (play.style.display === "none") {
    play.style.display = "block";
  } else {
    play.style.display = "none";
  }
}
function pauseSongChris() {
  var audio = document.getElementById("audioChris");
  audio.pause();
  var pause = document.getElementById("pauseChris");
  var play = document.getElementById("playChris");
  if (pause.style.display === "none") {
    pause.style.display = "block";
  } else {
    play.style.display = "block";
  }
}
function nextSongElie() {
  var audio = document.getElementById("audio");
  audio.pause();
  var chrisSong = document.getElementById("chrisSong");
  var elieSong = document.getElementById("elieSong");
  if (chrisSong.style.display === "none") {
    chrisSong.style.display = "block";
    elieSong.style.display = "none";
  } else {
    elieSong.style.display = "block";
  }
}
function previousSongChris() {
  var audio = document.getElementById("audioChris");
  audio.pause();
  var chrisSong = document.getElementById("chrisSong");
  var elieSong = document.getElementById("elieSong");
  if (elieSong.style.display === "none") {
    elieSong.style.display = "block";
    chrisSong.style.display = "none";
  } else {
    chrisSong.style.display = "block";
  }
}
