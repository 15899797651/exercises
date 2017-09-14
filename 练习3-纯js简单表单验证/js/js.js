function createcode () {
	var code = parseInt(Math.random()*9000+1000) ;
	var codespan = document.getElementById("codespan");
	codespan.innerHTML = code;
}
	
function check (id,rel) {
	var obj = document.getElementById(id);
	var val = obj.value;
	var span = document.getElementById(id+"span");
	if(val == "" || val == null ) {
		span.innerHTML = obj.alt +"不能为空";
		span.style.color = "red";
	}else if(rel.test(val)){
		span.innerHTML = "OK";
		span.style.color = "greenyellow";
		return true;
	}else {
		span.innerHTML = obj.alt +"格式不符合规则";
		span.style.color = "red";
	}
}
function testuname () {
	var rel1 = /^\w{5,15}$/;
	return check("uname",rel1);
}
function testpwd (){
	testpwd2 ();
	var rel2 = /^\w{8,12}$/;
	return check("pwd",rel2);
}
function testmail () {
	var rel3 = /^\w{8,12}$/;
	return check("mail",rel3);
}
function testphone () {
	var rel4 = /^\w{8,12}$/;
	return check("phone",rel4);
}
function testpwd2 () {
	var pwdval1 = document.getElementById("pwd").value;
	var pwdval2 = document.getElementById("pwd2").value;
	var pwd2span = document.getElementById("pwd2span")
	if (pwdval2=="" ||pwdval2==null) {
		pwd2span.innerHTML="确认密码不能为空";
		pwd2span.style.color="red";
	}else if (pwdval1==pwdval2) {
		pwd2span.innerHTML="OK";
		pwd2span.style.color="greenyellow";
		return true;
	}else {
		pwd2span.innerHTML="两次输入密码不一致";
		pwd2span.style.color="red";
	}
}
function testfav () {
	var fav = document.getElementsByName("fav");
	var favspan = document.getElementById("favspan")
	for (var i = 0;i < fav.length ; i++ ) {
		if(fav[i].checked==true){
			favspan.innerHTML="OK";
			favspan.style.color = "greenyellow";
			return true;
			break;
		}else {
			favspan.innerHTML="至少选择一个爱好";
			favspan.style.color = "red";
		}
	}
}
function createcode2 () {
	var textcode=document.getElementById("textcode").value;
	var codeval=document.getElementById("codespan").innerHTML;
	var codeval2=document.getElementById("codespan2")
	if(textcode=="" ||textcode==null){
		codeval2.innerHTML="验证码不能为空"
		codespan2.style.color = "red";
	}else if(textcode==codeval) {
		codeval2.innerHTML="OK"
		codespan2.style.color = "greenyellow";
		return true;
	}else{
		codeval2.innerHTML="验证码不一致"
		codespan2.style.color = "red";
	}
}
function testaddress () {
	var addspan = document.getElementById("addressspan");
	var address = document.getElementById("address");
	if (address.value==0) {
		addspan.innerHTML="请选择籍贯";
		addspan.style.color = "red";
	}else {
		addspan.innerHTML="OK"
		addspan.style.color = "greenyellow";
		return true;
	}
}
function testintro () {
	var intro = document.getElementById("intro").value;
	var introspan = document.getElementById("introspan");
	if (intro==""|| intro==null) {
		introspan.innerHTML="个人介绍不能为空";
		introspan.style.color = "red";
	}else if(intro.length>500) {
		introspan.innerHTML="个人介绍不能大于500个字";	
		introspan.style.color = "red";
	}else if(intro.length<50) {
		introspan.innerHTML="个人介绍不能小于50个字";
		introspan.style.color = "red";
	}else{
		introspan.innerHTML="OK";
		introspan.style.color = "greenyellow";
		return true;
	}
}
function testagree () {
	document.getElementById("sub").disabled=!document.getElementById("agree").checked;
}
function checkAll () {
	testuname ();
	testpwd ();
	testmail ();
	testphone ();
	testfav ();
	createcode2 ();
	testaddress ();
	testintro ();
	if(testuname ()==true & testpwd ()==true & testpwd2 ()==true & testmail ()==true & testphone ()==true & testfav ()==true& createcode2 ()==true& testaddress ()==true& testintro ()==true){
		return true;
	}else{
		return false;
	}
}