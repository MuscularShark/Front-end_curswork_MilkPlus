var emailL = document.getElementById('email');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    fetch('http://localhost:3000/login', {
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
		.then(response => response.json())
		.then(tasks => {
			if(tasks.email == 'serhii.hnid@nure.ua' && tasks.password == '1234567'){
				document.location.href = "index.html";
			}else{
				alert('Email or Password wrong');
			}
		})
})