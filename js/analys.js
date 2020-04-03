var resultBtn = document.getElementById('result-button');
resultBtn.addEventListener('click', function () {
    var sistol = document.getElementById('sistol-presure').value;
    if (sistol <= 100) {
        window.location = 'res_low';
    } else if (sistol > 100 && sistol < 130) {
        window.location = 'res_norm.html'
    } else {
        window.location = 'res_high.html'
    }
});