window.onload = function ()
{
    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9]

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];

    var specChar = ['+', '-','_','@','*'];

    var nameB = false, emailB=false, textB=false, selectB=false;

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
    
    text.addEventListener('focus', focusEventText);

    text.addEventListener('blur', blurEventText);
        
    send.addEventListener('click', ClickedSend);

    name.required = true;

    email.required = true;

    text.required = true;

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
        if (select.value=='RR.HH.' || select.value=='Sales' || select.value=='I.T.')
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

    function focusEventText()
    { 
        var b = text.nextElementSibling;

        b.textContent='';   
    }

    function blurEventText ()
    {
        if (text.value.length > 3)
        {
            text.style.border='2px solid #32CD32';

            textB = true;
        }
        else 
        {
            var b = text.nextElementSibling;

            b.textContent='The message must to be longer';

            text.style.border='2px solid #ffa07a';

            textB = false;
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
    function ClickedSend(e) 
    {
        e.preventDefault();

        var message = '';

        var newline= '\r\n';

        if (nameB && emailB && textB && selectB) 
        {
            message += 'Message sent' + newline + 'Data introduced: '+ dataCorrect(message);

        }

        else 
        {
            message += 'Message could not be sent. Please check the next Items: .' + newline +
            dataIncorrect(message);
        }
        
        window.alert(message);
    }

    function dataIncorrect(message)
    {
        var newline= '\r\n';

        if (!name) 
        {
           message += 'The Name is incorrect. Please enter only letters and it should be bigger ' + 
            'than three characters.' + newline;
        }

        if (!emailB) 
        {
            message +='The email is invalid. Please enter a valid email address.'+ newline;
        }

        if (!selectB) 
        {
            message +='You must select something' + newline;
        }

        if (!textB) 
        {
            message +='The message must be longer and it can not be empty.' + newline;
        }

        return message;
    }
    
    function dataCorrect(message)
    {
        var newline= '\r\n';
        message += newline  + 'Name: ' + document.getElementById('name').value 
        + newline + 'Email Address: ' + document.getElementById('email').value + newline + 'Section: ' +
        document.getElementById('select').value + newline + 'message: ' +
        document.getElementById('text').value;

        return message;
    }
}