var select = document.getElementById('selector');

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
      
 var sumMilk = 0;
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
            for(i = 0; i < task.length; i++){
               
                document.getElementById('datevalue').innerText = task[i].date;
                document.getElementById('litr').innerText = task[i].litrs;
                document.getElementById('spanWeight').innerText = task[i].weight;
                document.getElementById('temperatureS').innerText = task[i].t;
                document.getElementById('stat').innerText = task[i].stat;
                sumMilk += task[i].litrs;
            }
            document.getElementById('allMilks').innerText = ' ' + sumMilk +' ';
            
        }); 
     }
     let idCow = -1;
     function showInfo(tasks){
        if(idCow == -1){
            document.getElementById('datevalue').innerText = '-';
            document.getElementById('spanWeight').innerText = '-';
            document.getElementById('temperatureS').innerText = '-';
            document.getElementById('stat').innerText = '-'; 
            document.getElementById('litr').innerText = '-';
        }
        else{
            let element = tasks[idCow];
            console.log(tasks);
            document.getElementById('datevalue').innerText = element.date;
            document.getElementById('spanWeight').innerText = element.weight;
            document.getElementById('temperatureS').innerText = element.t;
            document.getElementById('stat').innerText = element.stat; 
            document.getElementById('litr').innerText = element.litrs;  
        }
       
        
     }
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
                        idCow = -1;
                        tasks.forEach((element, index) => {
                            if(select.value == element.position)
                                idCow = index;
                        });
                        showInfo(tasks);
                        var img = document.getElementsByClassName('imgs');
                            function levelMilk(img){
                                if(document.getElementById('litr').innerText > 25){
                                      return img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle-all.png';
                                }
                                else if(document.getElementById('litr').innerText <= 25 && document.getElementById('litr').innerText > 15){
                                      return  img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle.png';
                                }
                                else{
                                      return  img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle-small.png';
                                }
                            }
        
                        if(document.getElementById('litr').innerText >= 27){
                            levelMilk(img);
                            document.getElementById('vale').innerText = 'Молоко в нормі';
                        }else if(document.getElementById('litr').innerText < 27){
                            levelMilk(img);
                            document.getElementById('vale').innerText = Math.floor(((30 - document.getElementById('litr').innerText) * 30 ))/100 + ' кормових одиниць';
                        }else{
                            levelMilk(img);
                            document.getElementById('vale').innerText = '-';
                        }

                        
                });
                
    })