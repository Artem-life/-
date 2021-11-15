let si1 = document.querySelector('.si1');
let vs1 = document.querySelector('.vs1');
let vs2 = document.querySelector('.vs2');
let size1 = document.querySelector('.size1');
let redLink = document.querySelector('.red-link');
let aLi = document.querySelector('.aLi');
let search = document.querySelector('.search');
let search_1 = document.querySelector('.search_1');
let but_svg = document.querySelector('.but_svg');
let path1 = document.querySelector('.path1');
let password_1 = document.querySelector('.password_1');
let login_password = document.querySelector('.login-password');
let button_02 = document.querySelector('.button_02');
let polygon = document.querySelector('.polygon');
let path_02 = document.querySelector('.path_02');
let whod2 = document.querySelector('.whod2');
let catalogcolor = document.querySelector('.catalog-color');
let formLogin = document.querySelector('.form-login');
let input_text = document.querySelector('.input-text');
let input_password = document.querySelector('.input-password');
let button_submit = document.querySelector('.button-submit');
let formButton = document.querySelector('.form-button');
let myform = document.querySelector('.my-form2');
let inputText2 = document.querySelector('.input-text2');
let inputText3 = document.querySelector('.input-text3');
let textarea = document.querySelector('.textarea');
let submit02 = document.querySelector('.submit02');
let infoForm = document.querySelector('.info-form');
let button589 = document.querySelector('.button589');


button_submit.onclick = function () {
    formLogin.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (!input_text.value || !input_password.value) {
            login_password.classList.add('login-password-animation');
        } else {
         
        }
     });     
}

submit02.onclick = function () {
    myform.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (!inputText2.value || !inputText3.value || !textarea.value) {
            infoForm.classList.add('login-password-animation');
        }
    });
}

formButton.onclick = function () {
    infoForm.style.display = 'block';
}

button589.onclick = function () {
    infoForm.style.display = 'none';
    infoForm.classList.remove('login-password-animation');
}



si1.onmouseover  = function () {
    vs1.style.display = 'block';
}

si1.onmouseout   = function () {
    vs1.style.display = 'none';
}

vs1.onmouseover = function () {
    vs1.style.display = 'block';
    si1.style.backgroundColor = 'white';
    si1.style.color = 'black';
}

vs1.onmouseout = function () {
    vs1.style.display = 'none';
    si1.style.backgroundColor = '';
    si1.style.color = '';
}

search_1.onmouseover = function () {
    search.style.display = 'block';
}

search_1.onmouseout = function () {
    search.style.display = 'none'
}

search.onmouseover = function () {
    search.style.display = 'block';
    but_svg.style.backgroundColor = 'white';
    path1.style.fill = 'black';
}

search.onmouseout = function () {
    search.style.display = 'none';
    but_svg.style.backgroundColor = '';
    path1.style.fill = '';
}

password_1.onmouseover = function () {
    login_password.style.display = 'block';
}

password_1.onmouseout = function () {
    login_password.style.display = 'none';
    login_password.classList.remove('login-password-animation');
}

login_password.onmouseover = function () {
    login_password.style.display = 'block';
    button_02.style.backgroundColor = 'white';
    polygon.style.fill = 'black';
    path_02.style.fill = 'black';
    whod2.style.color = 'black';
}

login_password.onmouseout = function () {
    login_password.style.display = 'none';
    login_password.classList.remove('login-password-animation');
    button_02.style.backgroundColor = '';
    polygon.style.fill = '';
    path_02.style.fill = '';
    whod2.style.color = '';
}
