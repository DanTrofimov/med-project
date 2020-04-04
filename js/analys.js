// получили данные
const resultBtn = document.getElementById('result-button');
resultBtn.addEventListener('click', function () {
    var smoking = document.getElementById('smoking').value.toLowerCase();
    var smoking_exp = document.getElementById('smoking-exp').value;
    var  weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var alco = document.getElementById('alco').value.toLowerCase();
    var sistol = document.getElementById('sistol-presure').value;
    var diast = document.getElementById('diast-presure').value;
    var temperature = document.getElementById('temperature').value;
    var pulse = document.getElementById('pulse').value;
    var sugar = document.getElementById('sugar').value;
    var holest = document.getElementById('holest').value;
    var sleep = document.getElementById('sleep').value;
    var stress = document.getElementById('stress').value;
    var phis = document.getElementById('phis').value;
    console.log(smoking, smoking_exp, weight, height, alco, sistol, diast, temperature, pulse, sugar, holest, sleep, stress, phis);
});

// сслыка на то, куда отправляем данные
const requestURL = new URL('');
const xhr = new XMLHttpRequest();
xhr.open('POST', '')