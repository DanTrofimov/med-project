function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}

function rmClass(el, className) {
  console.log(el);
  el.classList.remove(className);
}

var inputs = document.getElementsByClassName('username');
for (var i = 0; i < inputs.length; i++) {
  var value = inputs[i];
  value.addEventListener('blur', function (e) {
    if (e.target.value) {
      e.target.style.borderColor = 'green';
      addClass(e.target.nextElementSibling, 'd-none');
    } else {
      e.target.style.borderColor = 'red';
      rmClass(e.target.nextElementSibling, 'd-none');
    }
  })
}

var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var password2Checked = false;


password1.addEventListener('blur', function (e) {
  if (!e.target.value) {
    e.target.style.borderColor = 'red';
    rmClass(password2.nextElementSibling, 'd-none');
    return
  }
  if (!password2Checked) {
    e.target.style.borderColor = 'green';
    addClass(password2.nextElementSibling, 'd-none');
    return
  }
  if (password2.value !== e.target.value) {
    e.target.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    rmClass(password2.nextElementSibling, 'd-none');
  }
  addClass(e.target.nextElementSibling, 'd-none');
});

password2.addEventListener('blur', function (e) {
  password2Checked = true;
  if (!e.target.value || e.target.value !== password1.value) {
    e.target.style.borderColor = 'red';
    password1.style.borderColor = 'red';
    rmClass(password2.nextElementSibling, 'd-none');
  } else {
    e.target.style.borderColor = 'green';
    password1.style.borderColor = 'green';
    addClass(password2.nextElementSibling, 'd-none');
  }
});

var email = document.getElementById('email');

email.addEventListener('blur', function (e) {
  var regexp = /[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]+/;
  if (regexp.test(e.target.value)) {
    e.target.style.borderColor = 'green';
    addClass(e.target.nextElementSibling, 'd-none');
  } else {
    e.target.style.borderColor = 'red';
    rmClass(e.target.nextElementSibling, 'd-none');
  }
});


var example = document.getElementById("example");
var ctx = example.getContext("2d");
function object(){
  ctx.beginPath();
  ctx.moveTo(30,50);
  ctx.lineTo(75,50);
  ctx.closePath();
  ctx.stroke();
}
function object1(){
  ctx.beginPath();
  ctx.moveTo(75,50);
  ctx.quadraticCurveTo(100,20,115,50);
  ctx.stroke();
  ctx.closePath();
}
function object2(){
  ctx.beginPath();
  ctx.moveTo(115,50);
  ctx.lineTo(130,50);
  ctx.closePath();
  ctx.stroke();
}
function object3(){
  ctx.beginPath();
  ctx.moveTo(130,50);
  ctx.lineTo(150,80);
  ctx.closePath();
  ctx.stroke();
}
function object4(){
  ctx.beginPath();
  ctx.moveTo(150,80);
  ctx.lineTo(175,5);
  ctx.closePath();
  ctx.stroke();
}

function object5(){
  ctx.beginPath();
  ctx.moveTo(175,5);
  ctx.lineTo(195,120);
  ctx.closePath();
  ctx.stroke();
}

function object6(){
  ctx.beginPath();
  ctx.moveTo(195,120);
  ctx.lineTo(210,50);
  ctx.closePath();
  ctx.stroke();
}

function object7(){
  ctx.beginPath();
  ctx.moveTo(210,50);
  ctx.lineTo(240,50);
  ctx.closePath();
  ctx.stroke();
}

function object8(){
  ctx.beginPath();
  ctx.moveTo(240,50);
  ctx.quadraticCurveTo(270,5,300,50);
  ctx.stroke();
  ctx.closePath();
}

function object9(){
  ctx.beginPath();
  ctx.moveTo(300,50);
  ctx.lineTo(320,50);
  ctx.closePath();
  ctx.stroke();
}
function animate () {
  ctx.fillStyle="#f6f6f6";
  ctx.fillRect(0,0,example.width,example.height);
  setTimeout(object,50);
  setTimeout(object1,150);
  setTimeout(object2,200);
  setTimeout(object3,250);
  setTimeout(object4,300);
  setTimeout(object5,350);
  setTimeout(object6,400);
  setTimeout(object7,450);
  setTimeout(object8,500);
  setTimeout(object9,550);
}
setInterval (animate,750);


var resultBtn = document.getElementById('result-button');
resultBtn.addEventListener('click', function () {
  var sistol = document.getElementById('sistol-presure').value;
  if (sistol < 100) {
    window.location = 'res_low.html'
  } else if (sistol > 100 && sistol < 130) {
    window.location = 'res_norm.html'
  } else {
    window.location = 'res_high.html'
  }
});