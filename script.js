console.log('Lets write JavaScript');
async function getsonngs() {
    let a =fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text;

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    console.log(as)
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")) {
            console.log(element.href);
        }    
    }
    return songs;
};
async function main(){
    let songs = await getsonngs();
    console.log(songs);  // print songs array

    let songUL  = document.querySelector(".songlists").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML += `<li>
                        <img class="invert" style="width: 34px; "  src="music.svg" alt="Song 1">
                        <div class="info">
                            <div>${song.replceAll("%20", " ")}</div>
                            <div>By Chris Brown</div>
                        </div>
                        <div class="playnow">
                            <img class="invert" style="cursor:pointer" src="play1.svg" alt="">
                        </div>
                    </li>`;
    }

    var audio = new Audio(songs[0])
    audio.play();

    audio.addEventListener("loadeddata", ()=>{
         console.log(audio.duration, audio.currentSrc , audio.currentTime);
    } )
}
main();
