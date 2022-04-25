window.onload = function()
{
    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9]

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];

    var specChar = ['+', '-','_','@','*'];

    var emailB = false, passB = false;

    var email = document.getElementById('email');

    var pass = document.getElementById('pass');

    var nuserBtn = document.getElementById('nuser');

    var loginBtn = document.getElementById('login');

    email.addEventListener('focus', focusEventEmail);

    email.addEventListener('blur', blurEventEmail);

    pass.addEventListener('focus', focusEventPass);

    pass.addEventListener('blur', blurEventPass);

    loginBtn.addEventListener('click', loginClick);

    // nuserBtn.addEventListener('click', nurseBtnClick);

    var va = document.getElementById('email').value;

    function blurEventEmail()
    {
        if (validateEmail())
        {
            email.style.border='2px solid #32CD32';
            
            emailB = true;
        }

        else 
        {
            var b = document.getElementById('emaildiv');

            b.firstElementChild.textContent='The email is invalid.';

            email.style.border='2px solid #ffa07a';
            
            emailB = false;
        }

    }

    function focusEventEmail()
    {
        var b = document.getElementById('emaildiv');

        b.firstElementChild.textContent='';
    }

    function blurEventPass()
    {
        if (validatePass(document.getElementById('pass').value)){
            
            pass.style.border='2px solid #32CD32';
            
            passB = true;
        }
        else 
        {
            var b = document.getElementById('passdiv');

            b.lastElementChild.textContent='The password is invalid';

            pass.style.border='2px solid #ffa07a';

            passB = false;
        }

    }

    function focusEventPass()
    {
        var b = document.getElementById('passdiv');

        b.lastElementChild.textContent='';
    }


    function validateEmail(){
        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var va = document.getElementById('email').value;

        if (va.match(mailformat)){
            return true;
        }

        else {
            return false;
        }

    }


    function validatePass(va)
    {

    var abcB = false;

    var numB = false;
    
    var specCharB = false;

    for (var i = 0; i < va.length; i++) 
    {
            for (let j = 0; j < specChar.length; j++) 
            {
                if (va[i] == specChar[j]) 
                {
                    specCharB = true;

                    break;
                }
            }

            if (specCharB) 
            {
                break;
            }
    }

    if (specCharB) 
            {
                return false;
            }

    for (var i = 0; i < va.length; i++) 
    {  
            if (!numB)
            {
                for (let j = 0; j < num.length; j++) 
            {
                if (va[i]==num[j]) 
                {
                    numB = true;

                    break;
                }   
            } 
            }
            
            if (!abcB) 
            {
                for (let j = 0; j < num.length; j++) 
                {
                    if (va[i]==abc[j]) 
                    {
                        abcB = true;
                        break;
                    }
                }
            }
            
            if (numB && abcB) 
            {
                break;
            }
        }

        if (numB && abcB) 
        {
            return true;
        }

        else 
        {
            return false;
        }
    }

    function loginClick(e)
    {
        e.preventDefault();

        var message = 'The data is ';

        var newline = '\r\n';

        if (emailB && passB)
        {
            message += 'correct:' + newline  + 'User email: ' + document.getElementById('email').value 
            + newline + 'Password: ' + document.getElementById('pass').value;

        }

        else 
        {
            message += 'incorrect. Please check the next items: '
            
            if (!emailB) 
            {
                message += newline + 'User email: Please enter a valid email.'
            }

            if (!passB) 
            {
                message += newline + 'Password: Please enter a valid password. It should contain only' +
                ' letters and numbers';
            }
        }

        window.alert(message);
    }
}