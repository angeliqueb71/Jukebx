function Jukebox(){
  this.audioList = [];
  this.nameList = [];
  this.coverList = [];
}

Jukebox.prototype.addTrack = function(track,name,cover){
  this.audioList.push(track);
  this.nameList.push(name);
  this.coverList.push(cover);
};

var jukebox = new Jukebox();
jukebox.addTrack("Twentyone.mp3", "Blurry Face", "Blurryface.png");
jukebox.addTrack("HardTimes.mp3","Hard Times", "hardTimes.jpg");
jukebox.addTrack("Sing_Street.mp3", "Drive it like you stole", "sing_street.jpeg");

var i=0;

Jukebox.prototype.play = function(){
  document.getElementById("cover").src = this.coverList[i];
  document.getElementById("name").innerText = this.nameList[i];
  song.play();
};

song.src=jukebox.audioList[i];

Jukebox.prototype.pause = function(){
  song.pause();
};

Jukebox.prototype.prev = function(){
  i--;
  if(i>=0){
    song.pause();
    song.src = jukebox.audioList[i];
    document.getElementById("cover").src = this.coverList[i];
    document.getElementById("name").innerText = this.nameList[i];
    song.play();
  } else{
    i = jukebox.audioList.length-1;
    song.pause();
    song.src = jukebox.audioList[i];
    song.play();
  }
}

Jukebox.prototype.next = function(){
  i++;
  if (i<jukebox.audioList.length){
    song.pause();
    song.src = jukebox.audioList[i];
    document.getElementById("cover").src = this.coverList[i];
    document.getElementById("name").innerText = this.nameList[i];
    song.play();
  } else {
    i = 0;
    song.pause();
    song.src = jukebox.audioList[i];
    song.play();
  }
}

play.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.play();
})

pause.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.pause();
})

prev.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.prev();
})

next.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.next();
})
