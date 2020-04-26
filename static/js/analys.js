// получили данные
var smoking, smoking_exp, weight, height, input_alco, alco, sistol, diast, temperature, pulse, sugar, holest, sleep, stress, phis;
window.location.pathname === '/med-project/templates/analyse.html'
if (true) {
    const resultBtn = document.getElementById('result-button');
    resultBtn.addEventListener('click', function () {

        // getting data
        smoking = document.getElementById('smoking').value.toLowerCase() === "да";
        smoking_exp = document.getElementById('smoking-exp').value;
        weight = document.getElementById('weight').value;
        height = document.getElementById('height').value;
        input_alco = document.getElementById('alco').value.toLowerCase();

        switch (input_alco) {
            case "полный отказ": alco = 1;
            case "несколько раз в год": alco = 2;
            case "каждый месяц": alco = 3;
            case "каждую неделю": alco = 4;
            case "ежедневно": alco = 5;
        }

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

        // logs
        // console.log(smoking, smoking_exp, weight, height, alco, sistol, diast, temperature, pulse, sugar, holest, sleep, stress, phis);
        // window.location.href = '/med-project/templates/results/result.html';
    });
}

// // сслыка на то, куда отправляем данные, тут работа с отправкой данных на сервер
// const requestURL = new URL('ссылка на сервер');
// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'ссылка на сервер');

function validateDig(form, reg, max, min) {
    if (arguments.length === 3) {
        var min = 0;
    }
    form.addEventListener('blur', function (e) {
        if (reg.test(e.target.value) && e.target.value > min && e.target.value < max) {
            e.target.style.border = '2px solid lightgreen';
        } else {
            e.target.style.border = '2px solid red';
        }
    });
}

function validateStr(form, reg) {
    form.addEventListener('blur', function (e) {
        if (reg.test(e.target.value)) {
            e.target.style.border = '2px solid lightgreen';
        } else {
            e.target.style.border = '2px solid red';
        }
    });
}

// validating forms
// nums
smoking_exp_in = document.getElementById('smoking-exp');
weight_in = document.getElementById('weight');
height_in = document.getElementById('height');
sistol_in = document.getElementById('sistol-presure');
diast_in = document.getElementById('diast-presure');
temperature_in = document.getElementById('temperature');
pulse_in = document.getElementById('pulse');
sugar_in = document.getElementById('sugar');
holest_in = document.getElementById('holest');
sleep_in = document.getElementById('sleep');
stress_in = document.getElementById('stress');
phis_in = document.getElementById('phis');

// strings
smoking_in = document.getElementById('smoking');
input_alco_in = document.getElementById('alco');

// validating nums
if (smoking_exp_in != null) validateDig(smoking_exp_in, /\d+/, 50);
if (weight_in != null) validateDig(weight_in, /\d+/, 150);
if (height_in != null) validateDig(height_in, /\d+/, 250, 100);
if (sistol_in != null) validateDig(sistol_in, /\d+/, 200, 30);
if (diast_in != null) validateDig(diast_in, /\d+/, 200, 30);
if (temperature_in != null) validateDig(temperature_in, /\d\d\.\d/, 42.0, 34.0);
if (pulse_in != null) validateDig(pulse_in, /\d+/, 250, 20);
if (sugar_in != null) validateDig(sugar_in, /\d\.\d/, 20);
if (holest_in != null) validateDig(holest_in, /\d\.\d\d/, 10.00);
if (sleep_in != null) validateDig(sleep_in, /\d+/, 24);
if (stress_in != null) validateDig(stress_in, /\d+/, 11, -1);
if (phis_in != null) validateDig(phis_in, /\d+/, 11, -1);

// validating strings
if (input_alco_in != null) validateStr(input_alco_in, /Полный\sотказ|Несколько\sраз\sв\sгод|Каждый\sмесяц|Каждую\sнеделю|Ежедневно/);
if (smoking_in != null) validateStr(smoking_in, /Да|Нет/);







