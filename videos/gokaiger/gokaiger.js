var gokaiger = document.getElementById('src1');
var govideo1 = document.getElementById('src2');
var video1 = document.getElementById('video1');
function ep1(){
	//gokaiger.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep1.mp4";
	//govideo1.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep1.ogv";
	video1.load();
	document.getElementById("video1").style.display="block";
	document.getElementById("player1").style.display="block";
	document.getElementById("black_overlay").style.display="block";
}
function play2(){
	document.getElementById('video1').style.display='none';
	document.getElementById('player1').style.display='none';
	document.getElementById('black_overlay').style.display='none';
}