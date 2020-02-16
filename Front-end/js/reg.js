var emailL = document.getElementById('email');
var pass = document.getElementById('pass');
var repass = document.getElementById('repass');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    if(pass.value.length == repass.value.length)
    fetch('http://localhost:3000/user-sign-up', {
		headers: {
		  "Access-Control-Allow-Origin" : "*",
		  "Access-Control-Allow-Credentials" : true,
		  'Content-Type': 'application/json',
		},
		method: 'post',
		body:  JSON.stringify({
			"email": emailL.value,
			"password": pass.value
		}) 
	  })
});