let vs2 = document.querySelector('.vs2');
let aLi = document.querySelector('.aLi');
let whod2 = document.querySelector('.whod2');
let catalogcolor = document.querySelector('.catalog-color');
let search2 = document.querySelector('.search_02');
let search = document.querySelector('.search');
let path01 = document.querySelector('.path01');
let se2 = document.querySelector('.se-2');
let login_password = document.querySelector('.login-password');
let log_pas = document.querySelector('.log-pas');
let button_log = document.querySelector('.button-log');
let polygon_log = document.querySelector('.polygon-log');
let path_log = document.querySelector('.path-log');
let form_login2 = document.querySelector('.form-login2');
let input_text = document.querySelector('.input-text');
let input_password = document.querySelector('.input-password');
let submit_button = document.querySelector('.submit');

submit_button.onclick = function () {
    form_login2.addEventListener("submit", function (evt) {
        evt.preventDefault ();
        if (!input_text.value || !input_password.value) {
            login_password.classList.add('login-password-animation');
        }
    });
}



catalogcolor.onmouseover = function () {
    vs2.style.display = 'block';
    catalogcolor.style.backgroundColor = 'white';
    catalogcolor.style.color = 'black';
}

catalogcolor.onmouseout = function () {
    vs2.style.display = 'none';
    catalogcolor.style.backgroundColor = '';
    catalogcolor.style.color = '';
}

vs2.onmouseover = function () {
    vs2.style.display = 'block';
    catalogcolor.style.backgroundColor = 'white';
    catalogcolor.style.color = 'black';
}

vs2.onmouseout = function () {
    vs2.style.display = 'none';
    catalogcolor.style.backgroundColor = '';
    catalogcolor.style.color = '';
}

search2.onmouseover = function () {
    search.style.display = 'block';
}

search2.onmouseout = function () {
    search.style.display = 'none';
}

search.onmouseover = function () {
    search.style.display = 'block';
    path01.style.fill = 'black';
    se2.style.backgroundColor = 'white';
}

search.onmouseout = function () {
    search.style.display = 'none';
    path01.style.fill = '';
    se2.style.backgroundColor = '';
}

log_pas.onmouseover = function () {
    login_password.style.display = 'block'
}

log_pas.onmouseout = function () {
    login_password.style.display = 'none'
    login_password.classList.remove('login-password-animation');
}

login_password.onmouseover = function () {
    login_password.style.display = 'block'
    button_log.style.backgroundColor = 'white';
    button_log.style.color = 'black';
    polygon_log.style.fill = 'black';
    path_log.style.fill = 'black';
}

login_password.onmouseout = function () {
    login_password.style.display = 'none'
    login_password.classList.remove('login-password-animation');
    button_log.style.backgroundColor = '';
    button_log.style.color = '';
    polygon_log.style.fill = '';
    path_log.style.fill = '';
}