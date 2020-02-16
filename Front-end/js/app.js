function urlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results)
        return results[1] || 0;
    else
        return "ua"
}



let lang = urlParam('lang');
const translate = {
    ru: {
        milk: 'Молоко'
    },
    ua: {
        milk: 'Молоко',
        date: 'Дата:',
        titleP: 'Аналіз молока',
    },
    en: {
        date: 'Date:',
        titleP: 'Analise of Milk',
        titleС: 'Catalog of feeds',
        giveMilk: 'Milk Cow',
        litrs: 'Litrs:',
        weight: 'Weight:',
        temperature: 'Temperature:',
        pl: 'Pl. Weight:',
        check: 'Check',
        mainH: 'MAIN',
        cormH: 'CORM',
        cowsH: 'COWS',
        textRec: 'In order to increase the milk yield, you need to increase the cow diet with any feed for the specified amount of feed units:',
        userN: 'serhii.hnid',
        userCow: 'Cows:',
        userMilk: 'All milk:',
        clicker:  'Sign Out',
        value1: 'Potato',
        value2: 'Hay',
        value3: 'Oat',
        value4: 'Wheat',
        value5: 'Feat Cake',
        value6: 'Beet',
        value7: 'Corn',
        value8: 'Barley',
        value9: 'Pulp',
        value10: 'Treacle',
        value11: 'Carrot',
        value12: 'Grass',
        nam: 'Name:',
        ag: 'Age:',
        po: 'Position',
        addcows: 'Add',
        addCCow: 'Add your cow',
        titleN: 'Accounting for a dime',
        titleCorm: 'Pick up feeds available to you:',
        aboutTitle: 'Here you will be able to pick up the number of feeds so that the amount of feed units and protein coincides point to the point with the norm.'
    }
}
function translatePage(){
    $("#date").text(translate[lang].date);
    $("#titleP").text(translate[lang].titleP);
    $("#giveMilk").text(translate[lang].giveMilk);
    $("#litrs").text(translate[lang].litrs);
    $("#weight").text(translate[lang].weight);
    $("#temperature").text(translate[lang].temperature);
    $("#pl").text(translate[lang].pl);
    $("#btn-check").text(translate[lang].check);
    $("#mainH").text(translate[lang].mainH);
    $("#cormH").text(translate[lang].cormH);
    $("#cowsH").text(translate[lang].cowsH);
    $("#textRec").text(translate[lang].textRec);
    $("#userN").text(translate[lang].userN);
    $("#userCow").text(translate[lang].userCow);
    $("#userMilk").text(translate[lang].userMilk);
    $("#clicker").text(translate[lang].clicker);
    $("#value1").text(translate[lang].value1);
    $("#value2").text(translate[lang].value2);
    $("#value3").text(translate[lang].value3);
    $("#value4").text(translate[lang].value4);
    $("#value5").text(translate[lang].value5);
    $("#value6").text(translate[lang].value6);
    $("#value7").text(translate[lang].value7);
    $("#value8").text(translate[lang].value8);
    $("#value9").text(translate[lang].value9);
    $("#value10").text(translate[lang].value10);
    $("#value11").text(translate[lang].value11);
    $("#value12").text(translate[lang].value12);
    $("#titleCorm").text(translate[lang].titleCorm);
    $("#aboutTitle").text(translate[lang].aboutTitle);
    $("#titleС").text(translate[lang].titleС);
    $("#titleN").text(translate[lang].titleN);
    $("#addCCow").text(translate[lang].addCCow);
    $("#nam").text(translate[lang].nam);
    $("#po").text(translate[lang].po);
    $("#ag").text(translate[lang].ag);
    $("#addcows").text(translate[lang].addcows);
}
translatePage();
var eng = document.getElementById('eng');

