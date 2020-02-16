var clickBtn = document.getElementById('clicker');
var dates = document.getElementById('datevalue');
var addcows = document.getElementById('addcows');
var age = document.getElementById('age');
var names = document.getElementById('names');
var position = document.getElementById('position');
var table = document.querySelector('#table');

function allTable(table, arr) {
    for(i = 0; i < arr.length; i++){
        var tr = document.createElement('tr');
        var date = document.createElement('td');
        var litrs = document.createElement('td');
        var weight = document.createElement('td');
        var t = document.createElement('td');
        var stat = document.createElement('td');
        date.innerHTML = arr[i].date;
        litrs.innerHTML = arr[i].litrs;
        weight.innerHTML = arr[i].weight;
        t.innerHTML = arr[i].t;
        stat.innerHTML = arr[i].stat;
        tr.appendChild(date);  
        tr.appendChild(litrs); 
        tr.appendChild(weight); 
        tr.appendChild(t); 
        tr.appendChild(stat);    
        table.appendChild(tr); 
    }
    
};


function cowTable(table, arr, filters) {
    for(i = 0; i < arr.length; i++){
        var tr = document.createElement('tr');
        var date = document.createElement('td');
        var litrs = document.createElement('td');
        var weight = document.createElement('td');
        var t = document.createElement('td');
        var stat = document.createElement('td');
        date.innerHTML = arr[i].date;
        litrs.innerHTML = arr[i].litrs;
        weight.innerHTML = arr[i].weight;
        t.innerHTML = arr[i].t;
        stat.innerHTML = arr[i].stat;
        //Условие
        if(filters == arr[i].position){
        tr.appendChild(date);  
        tr.appendChild(litrs); 
        tr.appendChild(weight); 
        tr.appendChild(t); 
        tr.appendChild(stat);    
        table.appendChild(tr); 
        }
         
    }
    
};

var select = document.getElementById('selector');

selector.addEventListener('change', function (e) {
    fetch('http://localhost:3000/all-milks', {
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true,
                    'Content-Type': 'application/json'
                },
                method: 'get'
            })
            .then(response => response.json())
            .then(tasks => {
                for(i = 0; i < tasks.length; i++){
                   if(select.value == tasks[i].position){
                    table.innerHTML = '';
                    table.innerHTML = `
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">T &deg;</th>
                    <th scope="col">Kg</th>
                    <th scope="col">Litrs</th>
                    <th scope="col">P.mass</th>
                </tr>
	        </thead>`;
					cowTable(table, tasks , select.value);
                    console.log(select.value);
                    document.getElementById('hide').classList.remove('visib');
                } 
                    else if(select.value == 'other')
                    {
                        table.innerHTML = '';
                        table.innerHTML = `
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">T &deg;</th>
                        <th scope="col">Kg</th>
                        <th scope="col">Litrs</th>
                        <th scope="col">P.mass</th>
                    </tr>
                </thead>`;
                        allTable(table, tasks);
                        document.getElementById('hide').classList.remove('visib');
                    }
                    else{
                        table.innerHTML = '';
                        table.innerHTML = `
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">T &deg;</th>
                                <th scope="col">Kg</th>
                                <th scope="col">Litrs</th>
                                <th scope="col">P.mass</th>
                            </tr>
                        </thead>`;
                        document.getElementById('hide').classList.add('visib');
                    }
                }
                console.log(tasks);               
			});
			
})


window.onload = function() {
    fetch('http://localhost:3000/all-cows', {
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true,
                    'Content-Type': 'application/json'
                },
                method: 'get'
            })
            .then(response => response.json())
            .then(tasks => {
                console.log(tasks);
                        for(i = 0; i < tasks.length; i++){
                            var options = document.createElement('option');
                            options.innerHTML = tasks[i].name;
                            options.value = tasks[i].position;
                            select.appendChild(options);
                        }
            });

            fetch('http://localhost:3000/all-milks', {
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Credentials" : true,
                    'Content-Type': 'application/json'
                },
                method: 'get'
            })
            .then(response => response.json())
            .then(task => {
                console.log(task);
                allTable(table, task)
            });
}


addcows.addEventListener('click', function(){
    fetch('http://localhost:3000/add-cow', {
		headers: {
		  "Access-Control-Allow-Origin" : "*",
		  "Access-Control-Allow-Credentials" : true,
		  'Content-Type': 'application/json',
		},
		method: 'post',
		body:  JSON.stringify({
			"name": names.value,
            "age": age.value,
            "position": position.value
        })
       
      })
 alert('Успішно');
})





