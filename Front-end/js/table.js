var table = document.querySelector('#table');

// При клике, передавать значения из таблицы в инпуты
table.addEventListener('click', function (e) {
	if (e.target.tagName === 'TD') 
	{
		document.getElementById("id").value = e.path['1'].cells['0'].innerText;
		document.getElementById("usname").value = e.path['1'].cells['1'].innerText;
		document.getElementById("name").value = e.path['1'].cells['2'].innerText;
		document.getElementById("e-mail").value = e.path['1'].cells['3'].innerText;
		document.getElementById("password").value = e.path['1'].cells['4'].innerText;
	}
	else{
		alert("Erorr");
	}
});