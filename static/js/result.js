var smoking = localStorage.getItem("smoking"),
    smoking_exp = localStorage.getItem("smoking-exp"),
    weight = localStorage.getItem("weight"),
    height = localStorage.getItem("height"),
    alco = localStorage.getItem("alco"),
    sistol = localStorage.getItem("sistol-presure"),
    diast = localStorage.getItem("diast-presure"),
    temp = localStorage.getItem("temperature"),
    pulse = localStorage.getItem("pulse"),
    sugar = localStorage.getItem("sugar"),
    holest = localStorage.getItem("holest"),
    sleep = localStorage.getItem("sleep"),
    stress = localStorage.getItem("stress"),
    phis = localStorage.getItem("phis");
    IMT = (weight/ Math.pow(height/100, 2)).toFixed(1),
    // stub
    age = localStorage.getItem("age");
    gender = localStorage.getItem("gender");

    // logs
    console.log(smoking, smoking_exp, weight, height, sistol, diast);

let ka, ks, km, x, y, R;

if (age < 50) {
    ks = 4;
    ka = Math.floor(age/10) - 1;
    km = 2;
} else {
    ks = 2;
    ka = Math.floor(age/10);
    km = 1.5;
}

x = Math.floor((sistol - 120)/40);
y = Math.floor((holest - 4.14)/3.11);

if (gender === "м") {
    R = (x + y) * ka * ks * km;
} else  R = (x + y) * ka * ks;

// statements
// cause : statement
let statements = {
    "smoking<20" : "Повышенный риск инсульта и ишемической болезни, пожалуйста, проконсультируйтесь с  врачом-кардиологом",
    "smoking>20" : "Повышенный риск заболеваний сердечно-сосудистой, пищеварительной системы, легких, обратитесь к терапевту",
    "imt<18,5" : "Недостаток массы тела, питайтесь чаще, увеличьте калорийность пищи",
    "imt<25" : "Отличное соответствие между массой тела и ростом",
    "imt>25" : "Избыток массы тела, обратите внимание на свое питание, помните, что ожирение может привести к заболеваниям сердца и сосудов",
    "alco-hight" : "Срочно обратите свое внимание на вредные привычки",
    "alco-medium": "Постарайтесь воздержаться от курения и употребления алкоголя",
    "alco-low" : "Так держать! Мы вас поддерживаем в отказе от вредных привычек",
    "syst-medium" : "Ваше систолическое давление можно считать нормальным, консультация специалиста не требуется",
    "syst-unomal" : "Пожалуйста, обратитесь к кардиологу для выяснения причины изменения давления",
    "syst-too-unormal" : "Срочно вызовете скорую 03 для нормализации давления!",
    "temp-norm" : "У вас нормальная температура тела",
    "temp-low" : "Обратитесь за консультацией к терапевту по поводу понижения температуры тела",
    "temp-high" : "В организме есть воспалительный очаг, рекомендуем сдать общий анализ крови для выяснения причины повышения температуры",
    "pulse-normal" : "Ваш пульс в норме",
    "pulse-low" : "Обратитесь к специалисту для нормализации сниженного пульса, если не являетесь спортсменом",
    "pulsse-high" : "Повышение пульса без причины является показанием для обращения ко врачу",
    "sleep-low" : "Вам нужен отдых и смена обстановки. Возьмите отпуск или обратитесь к врачу по поводу рецепта на анксиолитики",
    "sleep-too-low" : "Серьезный дефицит сна! Скорректируйте свой распорядок дня. Если у Вас бессонница – обратитесь к врачу",
    "sleep-to-much" : "У Вас слишком длительный сон. Скорректируйте свой распорядок дня. Если у Вас патологическая сонливость – обратитесь к врачу. Данный симптом может быть вызван серьезными заболеваниями",
    "sugar-high" : "Есть риск гипергликемии. Данный симптом может быть признаком сахарного диабета. Необходимо немедленно обратиться к врачу",
    "sugar-low" : "У вас возможна гипогликемия. Необходимо немедленно обратиться к врачу",
    "phis-low" : "Низкая физическая активность. Это может привести к увеличению массы тела, а также способствовать развитию различных заболеваний",
    "r-low" : "Риск развития сердечно-сосудистых осложнений минимальный",
    "r-medium" : "Имеется небольшой риск развития сердечно-сосудистых осложнений",
    "r-high" : "Имеется значительный риск развития сердечно-сосудистых осложнений. Обратитесь к врачу",
    "r-too-high" : "Имеется очень высокий риск развития сердечно-сосудистых осложнений. Обязательно обратитесь к врачу",
};

// add DOM manipulation
let diagnose = document.getElementById('diagnose');
let list = document.createElement('ul');
list.style.cssText = "padding-bottom: 260px; padding-top: 30px;" // list-style: none

// handling all possible cases
if (smoking  && smoking_exp>10 && smoking_exp<20) {
    addStatement(statements["smoking<20"]);
}
if (smoking && smoking_exp>20) {
    addStatement(statements["smoking>20"])
}
if (IMT < 18.5) {
    addStatement(statements["imt<18,5"])
}
if (IMT < 24.99 && IMT > 18,5) {
    addStatement(statements["imt<25"])
}
if (IMT > 25) {
    addStatement(statements["imt>25"])
}
if (smoking && alco === 5) {
    addStatement(statements["alco-hight"])
}
if (smoking && alco === 4) {
    addStatement(statements["alco-medium"])
}
if (smoking && (alco === 1 || alco === 2)) {
    addStatement(statements["alco-low"])
}
if (sistol < 130 && sistol > 100) {
    addStatement(statements["syst-medium"])
}
if ((sistol > 70 && sistol < 100) || (sistol > 130 || sistol < 160)) {
    addStatement(statements["syst-unomal"])
}
if ((sistol < 70) || (sistol > 160)) {
    addStatement(statements["syst-too-unormal"])
}
if (temp > 35.5 || temp < 37.0) {
    addStatement(statements["temp-norm"])
}
if (temp <= 35.5) {
    addStatement(statements["temp-low"])
}
if (temp >= 37) {
    addStatement(statements["temp-high"])
}
if (pulse > 60 && pulse < 100) {
    addStatement(statements["pulse-normal"])
}
if (pulse < 60) {
    addStatement(statements["pulse-low"])
}
if (pulse > 100) {
    addStatement(statements["pulsse-high"])
}
if (stress > 7 && sleep < 7) {
    addStatement(statements["sleep-low"])
}
if (sleep < 5) {
    addStatement(statements["sleep-too-low"])
}
if (sleep > 9) {
    addStatement(statements["sleep-to-much"])
}
if (sugar > 5.5) {
    addStatement(statements["sugar-high"])
}
if (sugar < 3.3) {
    addStatement(statements["sugar-low"])
}
if (phis < 3) {
    addStatement(statements["phis-low"])
}
if (R > 0 && R <= 10) {
    addStatement(statements["r-low"])
}
if (R > 10 && R <= 16) {
    addStatement(statements["r-medium"])
}
if (R > 16 && R <= 20) {
    addStatement(statements["r-high"])
}
if (R > 20 && R <= 30) {
    addStatement(statements["r-too-high"])
}

// add statement to the result-screen
function addStatement(statement) {
    let elem = document.createElement('li');
    elem.innerText = statement;
    // styling element
    // elem.style.cssText = "background-color: #c7cfd1; height: 60px; border-radius: 10px; margin-top: 10px; text-align: center;"
    list.appendChild(elem);
    diagnose.appendChild(list);
}