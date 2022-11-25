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

var titleText = [ "d", "dn", "dny","dny#","dny#0","dny#00","dny#000", "dny#0007", "dny#0007","dny#0007"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}