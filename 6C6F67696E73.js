function slogin(){
	var loginrec, passrec, error;
	
	//Login Beta
	var login = [];
	var password = [];
	login[0]="GoKaiger";
	password[0]="KaizokuSentaiGokaiger";
	
	loginrec = document.login.username.value;
	passrec = document.login.password.value;
	error = "/";
	
	if (loginrec=="GoKaiger" && passrec=="KaizokuSentaiGokaiger") {
		document.getElementById('login1').style.display='none';
		document.getElementById('black_overlay').style.display='none';
	}
	else{
		window.alert("Login Invalido!");
		window.location.href=error;
	}
}