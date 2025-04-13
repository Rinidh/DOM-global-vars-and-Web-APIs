const playPause = document.getElementById('play-pause-icon')
const videoText = document.getElementById('video-text')
const videoDiv = document.getElementById('video')
const message = document.getElementById('message')

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === "hidden") {
    playPause.classList.remove("fa-pause")
    playPause.classList.add("fa-play")

    videoText.textContent = "Your video was paused!"

    videoDiv.style.backgroundColor = 'lightpink'

    document.title = "Please wait!"
    message.textContent = "The title also changed!"
    message.style.color = "red"

    alert('Are you sure to leave this page?')
  }
})


/*
//To listen to browser-specific events:

let hidden;
let visibilityChange;
if (typeof document.hidden !== 'undefined') { // Generally any modern browser
  hidden = 'hidden'
  visibilityChange = 'visibilitychange'
} else if (typeof document.msHidden !== 'undefined') { //ms-- for Microsoft Edge, Internet Explorer. //moz-- for Firefox
  hidden = 'msHidden'
  visibilityChange = 'msvisibilitychange'
} else if (typeof document.webkitHidden !== 'undefined') { //webkit-- for Chromium-based (ie chrome, safari, iOS, latest Opera & Edge). Opera 12.10 and Firefox 18 and later support
  hidden = 'webkitHidden'
  visibilityChange = 'webkitvisibilitychange'
}
*/
