import Vimeo from "@vimeo/player"
import throttle from "lodash.throttle"
 const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
    const LOCAL = "videoplayer-current-time"

player.on('timeupdate', throttle(timeUPD, 1000));
function timeUPD(data) {
    let seconds = data.seconds;
    localStorage.setItem("videoplayer-current-time", seconds)
   
}

 player.setCurrentTime(localStorage.getItem(LOCAL));

       
    
   