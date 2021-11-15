let listBut1 = document.querySelector('.list_but1');
let listBut2 = document.querySelector('.list_but2');
let listBut3 = document.querySelector('.list_but3');
let body = document.querySelector('body');
let title = document.querySelector('.title');
let title2 = document.querySelector('.title2');
let title3 = document.querySelector('.title3');

listBut1.onclick = function () {
    if (body.classList.contains('body01')) {
        
    } else {
        body.classList.add('body01');
        body.classList.remove('body02');
        body.classList.remove('body03');
        
        title2.style.display = 'none';
        title3.style.display = 'none';
        title.style.display = 'block';
    }


}

listBut2.onclick = function () {
    if (body.classList.contains('body02')) {
        
    } else {
        body.classList.add('body02');
        body.classList.remove('body01');
        body.classList.remove('body03');

        title.style.display = 'none';
        title3.style.display = 'none';
        title2.style.display = 'block';
    }


    
}

listBut3.onclick = function () {
    if (body.classList.contains('body03')) {
        
    } else {
        body.classList.add('body03');
        body.classList.remove('body01');
        body.classList.remove('body02');

        title.style.display = 'none';
        title2.style.display = 'none';
        title3.style.display = 'block';
        
    }
}




    