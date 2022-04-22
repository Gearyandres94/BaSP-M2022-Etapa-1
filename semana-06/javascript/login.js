let email = document.getElementById('email');

let pass = document.getElementById('pass');

let nuserBtn = document.getElementById('nuser');

let form = document.getElementsByTagName('form');

let loginBtn = document.getElementById('login');

email.addEventListener('focus', focusEventEmail);

email.addEventListener('blur', blurEventEmail);

pass.addEventListener('focus', focusEventPass);

pass.addEventListener('blur', blurEventPass);

loginBtn.addEventListener('click', loginClick);

// nuserBtn.addEventListener('click', nurseBtnClick);
var va = document.getElementById('email').value;

function blurEventEmail(){
    let validate = validateEmail();

    if (!validate){
        let b = document.getElementById('emaildiv');
        b.firstElementChild.textContent='The email is invalid';
        email.style.backgroundColor='#fa8072';
    }
    else {
        email.style.backgroundColor='#32CD32';
    }

}

function focusEventEmail(){
    let b = document.getElementById('emaildiv');
    email.style.backgroundColor='#FFF';
    b.firstElementChild.textContent='';
}

function blurEventPass(){
    let validate = validatePass();

    if (!validate){
        let b = document.getElementById('passdiv');

        b.firstElementChild.textContent='The password is invalid';
    }

}

function focusEventPass(){
    let b = document.getElementById('passdiv');

    b.firstElementChild.textContent='';
}


function validateEmail(){
    let mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var va = document.getElementById('email').value;

    if (va.match(mailformat)){
        return true;
    }

    else {
        return false;
    }

}


function validatePass(){
    let passFormat =/^[A-Za-z]+[0-9]+$/;

    let passva = document.getElementById('pass').value;

    if (passva.match(passFormat)){
        return true;
    }

    else {
        return false;
    }

}

function loginClick(e){
    let a = validateEmail();
    let b = validatePass();
    if (validateEmail() && validatePass()) {
        window.alert('all is correct');
    }
    else if (!validateEmail() && validatePass()){
        window.alert('The email is invalid');
    }
    else if (validateEmail() && !validatePass()){
        window.alert('TThe password is invalid');
    }

    else{
        window.alert('Email and Password are incorrect.');
    }
}