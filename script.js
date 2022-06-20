const button = document.getElementById("button");

button.onclick = function() {
  if (document.getElementById("username").value == "chris" && document.getElementById("password").value == "iloveyou") {
    document.location = ("https://chris-present.herokuapp.com/home");
  } else {
    alert("Incorrect username/password. Please try again.");
  }

};
function folder() {
  alert("yes");
}
function meow() {
  var meow = document.getElementById("meow");
  var meowAudio = document.getElementById("meowAudio");
  audio.play();
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
function notes() {
  var notes = document.getElementById("notes");
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  if (notes.style.display === "none") {
    notes.style.display = "block";
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
  } else {
    notes.style.display = "none";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
  }
}
function page1() {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  if (page2.style.display === "none") {
    page2.style.display = "block";
    page1.style.display = "none";
    page3.style.display = "none";
  } else {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
  }
}
function page2(){
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  if (page3.style.display === "none") {
    page3.style.display = "block";
    page1.style.display = "none";
    page2.style.display = "none";
  } else {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
  }
}
function photos() {
  var gallery = document.getElementById("gallery");
  if (gallery.style.display === "none") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "none";
  }
}

const cursor = document
    .querySelector(".custom-cursor");

window.addEventListener("mousedown", (event) => {
    if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");

        setTimeout(() => {
            cursor.classList.remove("click");
        }, 800);
    }
});

window.addEventListener("mousemove", (event) => {
    let x = event.pageX - cursor.offsetWidth / 2,
        y = event.pageY - cursor.offsetHeight / 2;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});
