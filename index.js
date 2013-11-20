var i;
function cache(){
	var appCache = window.applicationCache;
	appCache.update();
	switch (appCache.status) {
		case appCache.UNCACHED: // UNCACHED == 0
			return 'UNCACHED';
		case appCache.IDLE: // IDLE == 1
			return 'IDLE';
		case appCache.CHECKING: // CHECKING == 2
			return 'CHECKING';
		case appCache.DOWNLOADING: // DOWNLOADING == 3
			return 'DOWNLOADING';
		case appCache.UPDATEREADY:  // UPDATEREADY == 4
			return 'UPDATEREADY';
		case appCache.OBSOLETE: // OBSOLETE == 5
			return 'OBSOLETE';
		default:
			return 'UKNOWN CACHE STATUS';
	}
	if (appCache.status == window.applicationCache.UPDATEREADY) {
		appCache.swapCache();  // The fetch was successful, swap in the new cache.
	}
	window.addEventListener('load', function(e) {
		window.applicationCache.addEventListener('updateready', function(e) {
		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
			// Browser downloaded a new app cache.
			// Swap it in and reload the page to get the new hotness.
			window.applicationCache.swapCache();
			window.alert("Nova versão disponível! A página será atualizada automaticamente, para a nova versão!");
			window.location.reload();
		} else {
		// Manifest didn't changed. Nothing new to server.
		}
		}, false);
	}, false);
}
function about(){
	window.alert("Sobre...\n\tCleber Matheus WebSite v0.9.8");
}
function css(){
	location.href="/webdesign/css";
}
function html(){
	location.href="/webdesign/html";
}
function js(){
	location.href="/webdesign/js";
}
function assembly(){
	location.href="/programacao/assembly";
}
function c(){
	location.href="/programacao/c";
}
function cpp(){
	location.href="/programacao/cpp";
}
function csharp(){
	location.href="/programacao/csharp";
}
function java(){
	location.href="/programacao/java";
}
function submitenter(myfield,e){
	var keycode;
	if(window.event){
		keycode = window.event.keyCode;
	}
	else{
		if(e){
			keycode = e.which;
		}
		else{
			return true;
		}
	}
	if (keycode == 13){
		myfield.form.submit();
		return false;
		}
	else{
		return true;
	}
}
var opt1 = document.getElementById('opt2');
var opt3 = document.getElementById('opt2').style.dsiplay="none";
if(opt1==opt3){
	document.getElementById('option').style.display="block";
}
if(document.body.clientWidth>700){
	document.getElementById('lateral').style.display="block";
	document.getElementById('opt2').style.display="block";
}
else{
	document.getElementById('lateral').style.display="none";
	document.getElementById('option').style.display="block";
}
function opt(){
	document.getElementById('lateral').style.display="block";
	document.getElementById('opt2').style.display="block";
	if(screen.width>700){
		document.getElementById('conteudo').style.width="84.5%";
		document.getElementsByTagName('h1')[0].style.width="84.5%";
	}
}
function opt2(){
	document.getElementById('lateral').style.display="none";
	document.getElementById('opt2').style.display="none";
	if(screen.width>700){
		document.getElementById('conteudo').style.width="100%";
		document.getElementsByTagName('h1')[0].style.width='100%';
	}
}
function optMenu(){
	document.getElementById('HoverMenu').style.display="block";
	document.getElementById('lateral').style.display="none";
	document.getElementById('optMenu').style.display="none";
}