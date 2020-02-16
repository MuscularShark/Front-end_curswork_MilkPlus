var spanLitr = document.getElementById('litr').innerText;
var img = document.getElementsByClassName('imgs');
var eng = document.getElementById('eng');

function levelMilk(spanLitr, img){
    if(spanLitr >= 21){
       return img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle-all.png';
    }
    else if(spanLitr >= 19){
      return  img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle.png';
    }
    else{
      return  img["0"].src = 'file:///C:/Users/Muscular_Shark/Desktop/Front/img/bottle-small.png';
    }
}

levelMilk(spanLitr, img);

eng.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN'){
        document.getElementById('date').innerText = 'Date:';
        document.getElementById('titleP').innerText = 'Analiz of Milk';
        document.getElementById('giveMilk').innerText = 'Milk Cow';
        document.getElementById('litrs').innerText = 'Litrs:';
        document.getElementById('weight').innerText = 'Weight:';
        document.getElementById('temperature').innerText = 'Temperature:';
        document.getElementById('pl').innerText = 'Pl. Weight:';
        document.getElementById('btn-check').innerText = 'Check';
        document.getElementById('mainH').innerText = 'MAIN';
        document.getElementById('cormH').innerText = 'CORM';
        document.getElementById('cowsH').innerText = 'COWS';
        document.getElementById('textRec').innerText = 'In order to increase the milk yield, you need to increase the cow diet with any feed for the specified amount of feed units';
        
    }
})
