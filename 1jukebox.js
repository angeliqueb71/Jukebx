var playBtn = document.querySelector("#play")
var pauseBtn = document.querySelector("#pauseBtn")
var stopBtn = document.querySelector("#stopBtn")
var backBtn = document.querySelector("#backBtn")
var forwardBtn = document.querySelector("#forwardBtn")

var songBtn = document.querySelector("#songBtn")

function Jukebox () {
 this.songArray = []
}

Jukebox.prototype.start = function () {
  songBtn.play()
}

var jukebox = new Jukebox()

playBtn.addEventListener("click", function(event){
   event.preventDefault
   jukebox.start()
   console.log("i was clicked");
 })

 Jukebox.prototype.pause = function(){
   songBtn.pause()
}

 pauseBtn.addEventListener("click", function(event){
   event.preventDefault
  jukebox.pause()
  console.log("i was clicked")

 })

 Jukebox.prototype.stop = function(){
   songBtn.stop()
}

 stopBtn.addEventListener("click", function(event){
   event.preventDefault
  jukebox.stop()
  console.log("i was clicked")

 })

 Jukebox.prototype.songBtn = function(){
   this.songArray.push()
}

 // Jukebox.prototype.pauseBtn = function(){
 //   audio.pause()
 // }
 backBtn.addEventListener("click", function(event){
   event.preventDefault
  jukebox.stop()
  console.log("i was clicked")
})

 Jukebox.prototype.backBtn= function(){
     i++
     if(i < jukebox.songArray.length){
       audio.pause()
       audio.src=jukebox.songArray[i]
       audio.play()
     }
     else {
        i = 0;
        audio.pause()
        audio.src=jukebox.songArray[i]
        audio.play()
     }
   }

   forwardBtn.addEventListener("click", function(event){
     event.preventDefault
    jukebox.next()
    console.log("i was clicked")
  })

   Jukebox.prototype.forwardBtn = function(){
    i--
    if (i >= 0 ){
      audio.pause()
      audio.src=jukebox.songArray[i]
      audio.play()
    }
    else {
      i = jukebox.songArray.length -1
      audio.pause()
      audio.src=jukebox.songArray[i]
      audio.play()
    }
  }


  //  Jukebox.prototype.nextBtn = function(){
  //     i--
  //     if (i >= 0 ){
  //       audio.pause()
  //       audio.src=jukebox.songArray[i]
  //       audio.play()
  //     }
  //     else {
  //       i = jukebox.songArray.length -1
  //       audio.pause()
  //       audio.src=jukebox.songArray[i]
  //       audio.play()
  //     }
  //  }
