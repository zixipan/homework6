var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML=video.volume *100+"%";
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid=document.getElementById("myVideo");
	vid.playbackRate *= 0.8;
  	console.log("Speed is "+vid.playbackRate);
} 

function increaseSpeed() {
	var vid=document.getElementById("myVideo");
	vid.playbackRate *= 1.25;
	console.log("Speed is "+vid.playbackRate);
} 

function skipAhead() {
	var vid=document.getElementById("myVideo")
	video.currentTime += 60;
	// console.log("Current location is "+ video.currentTime);
	if (video.currentTime >= video.duration){
		// console.log("Bring to start.")
		video.currentTime = 0;
		vid.playbackRate = 1;
	}
	playVid()
	console.log("Current location is "+ video.currentTime);
	console.log("Speed is "+vid.playbackRate);
} 

function mute() { 
  		if (video.muted){
  			console.log("Changing to Unmuted");
  			video.muted = false;
  			document.getElementById("mute").innerHTML = "Mute";
  		}else{
  			console.log("Changing to Muted");
  			video.muted = true;	
  			document.getElementById("mute").innerHTML = "Unmute";
  		}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volume/100;
	let vol = document.querySelector("#volume")
	vol.innerHTML=video.volume *100+"%";
	// vol.innerHTML=volume+"%";
	console.log("Volume is "+volume+"%");



}
       

function gray() { 
	document.querySelector("#myVideo").classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	document.querySelector("#myVideo").classList.remove("grayscale");
	console.log("In color");
}
