window.onload = function ()
{
    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9]

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];

    var specChar = ['+', '-','_','@','*'];

    var nameB = false, emailB=false;

    var name = document.getElementById('name');

    var email = document.getElementById('email');

    var select = document.getElementById('select');

    var text =  document.getElementById('text');

    var send = document.getElementById('send');

    name.addEventListener('focus', focusEventName);

    name.addEventListener('blur', blurEventName);
    
    email.addEventListener('focus', focusEventEmail);

    email.addEventListener('blur', blurEventEmail);
    
    select.addEventListener('focus', focusEventSelect);

    select.addEventListener('blur', blurEventSelect);
    
    // text.addEventListener('focus', focusEventText);

    // text.addEventListener('blur', blurEventText);
        
    // send.addEventListener('focus', focusEventSend);

    // send.addEventListener('blur', blurEventSend);


    function focusEventName()
    {
        var b = name.nextElementSibling;
        
        b.textContent='';   
    }

    function blurEventName()
    {
        var va = document.getElementById('name').value;

        if (isntNumber(va) && isntSpecChar(va) && va.length > 3)
        {
            name.style.border='2px solid #32CD32';

            nameB=true;
        }
    
        else 
        {
            var b = name.nextElementSibling;
    
            b.textContent='The name is invalid';
    
            name.style.border='2px solid #ffa07a';

            nameB=false;
        }
    }

    function focusEventEmail()
    {
        var b = email.nextElementSibling;

        b.textContent='';   
    }

    function blurEventEmail()
    {
        if (validateEmail(document.getElementById('email').value))
        {
            email.style.border='2px solid #32CD32';

            emailB = true;
        }

        else 
        {
            var b = email.nextElementSibling;

            b.textContent='The email is invalid';

            email.style.border='2px solid #ffa07a';

            emailB = false;
        }

    }

    function focusEventSelect ()
    {
        var b = select.nextElementSibling;

        b.textContent='';   
    }

    function blurEventSelect ()
    {
        if (select.value=='rrhh' || select.value=='sales' || select.value=='it')
        {
            select.style.border='2px solid #32CD32';

            selectB = true;
        }
        else 
        {
            var b = select.nextElementSibling;

            b.textContent='You must select something';

            select.style.border='2px solid #ffa07a';

            selectB = false;
        }
    }

    function validateEmail()
    {
        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var va = document.getElementById('email').value;
        
        if (va.match(mailformat))
        {
            return true;
        }
        
        else 
        {
            return false;
        }
    }

    function isntNumber(va)
    {
        var numB = false;

        for (var i = 0; i < va.length; i++) 
        {
            
            for (var j = 0; j < num.length; j++)
            {
                if (va[i] == ' ')
                {
                    continue;
                }

                else if (va[i] == num[j])
                {
                    numB = true;

                    break;
                }

            }

            if (numB) 
            {
                break;
            }
        }
        if (numB) 
        {
            return false;
        }
        else 
        {
            return true;
        }
    }

    function isntSpecChar(va)
    {
        var specCharB = false;
        
        for (var i = 0; i < va.length; i++) 
        {
            for (var j = 0; j < specChar.length; j++)
            {
                if (va[i] == ' ')
                {
                    continue;
                }

                else if (va[i] == specChar[j])
                {
                    specCharB= true;

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
        else 
        {
            return true;
        }
    }

}