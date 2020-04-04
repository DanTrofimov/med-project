// получили данные
var smoking, smoking_exp, weight, height, alco, sistol, diast, temperature, pulse, sugar, holest, sleep, stress, phis;
if (window.location.pathname === '/med-project/templates/analyse.html') {
    const resultBtn = document.getElementById('result-button');
    resultBtn.addEventListener('click', function () {

        // getting data
        smoking = document.getElementById('smoking').value.toLowerCase();
        smoking_exp = document.getElementById('smoking-exp').value;
        weight = document.getElementById('weight').value;
        height = document.getElementById('height').value;
        alco = document.getElementById('alco').value.toLowerCase();
        sistol = document.getElementById('sistol-presure').value;
        diast = document.getElementById('diast-presure').value;
        temperature = document.getElementById('temperature').value;
        pulse = document.getElementById('pulse').value;
        sugar = document.getElementById('sugar').value;
        holest = document.getElementById('holest').value;
        sleep = document.getElementById('sleep').value;
        stress = document.getElementById('stress').value;
        phis = document.getElementById('phis').value;

        // saving data
        localStorage.setItem("smoking", smoking);
        localStorage.setItem("smoking-exp", smoking_exp);
        localStorage.setItem("weight", weight);
        localStorage.setItem("height", height);
        localStorage.setItem("alco", alco);
        localStorage.setItem("sistol-presure", sistol);
        localStorage.setItem("diast-presure", diast);
        localStorage.setItem("temperature", temperature);
        localStorage.setItem("pulse", pulse);
        localStorage.setItem("sugar", sugar);
        localStorage.setItem("holest", holest);
        localStorage.setItem("sleep", sleep);
        localStorage.setItem("stress", stress);
        localStorage.setItem("phis", phis);

        console.log(smoking, smoking_exp, weight, height, alco, sistol, diast, temperature, pulse, sugar, holest, sleep, stress, phis);

        window.location.href = '/med-project/templates/results/result.html';
    });
}

// // сслыка на то, куда отправляем данные, тут работа с отправкой данных на сервер
// const requestURL = new URL('ссылка на сервер');
// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'ссылка на сервер');












