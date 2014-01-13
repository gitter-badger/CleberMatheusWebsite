var gokaiger = document.getElementById('src1');
var govideo1 = document.getElementById('src2');
var video1 = document.getElementById('video1');
function eps(){
	video1.load();
	document.getElementById("video1").style.display="block";
	document.getElementById("player1").style.display="block";
	document.getElementById("black_overlay").style.display="block";
}
function ep1(){
	video1.poster = "ep1.jpg";
	gokaiger.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep1.mp4";
	govideo1.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep1.ogv";
	eps();
}
function ep2(){
	video1.poster = "http://static3.wikia.nocookie.net/__cb20110522012161/powerrangers/images/1/13/Shinkenboy.png";
	gokaiger.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep2.mp4";
	govideo1.src="https://googledrive.com/host/0B5QjfaSWUJ0VeGhRTThONVpPZGM/ep2.ogv";
	eps();
}
function play2(){
	document.getElementById('video1').style.display='none';
	document.getElementById('player1').style.display='none';
	document.getElementById('black_overlay').style.display='none';
}