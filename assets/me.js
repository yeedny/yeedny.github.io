if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "d", "dn", "dny","dny#","dny#0","dny#00","dny#006", "dny#0065", "dny#0065","dny#0065"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}