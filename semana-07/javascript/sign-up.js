window.onload = function()
{
    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9];

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];

    var specChar = ['+', '-','_','@','*'];

    var fname= document.getElementById('fname');

    var lname= document.getElementById('lname');

    var dni= document.getElementById('dni');

    var bdate= document.getElementById('bdate');

    var pnumber= document.getElementById('pnumber');

    var address= document.getElementById('address');

    var city= document.getElementById('city');

    var email= document.getElementById('email');

    var pcode= document.getElementById('pcode');

    var pass= document.getElementById('pass');

    var rpass= document.getElementById('rpass');

    var create= document.getElementById('create');

    var fnB = false, lnB = false, dniB = false, bdateB = false, pnumberB = false,
    addressB = false, cityB = false, emailB = false, pcodeB = false, passB = false, rpassB = false; 
    
    var newline= '\r\n';
     
    addeventListener1();

    addeventListener2();

    fillValues();

    function addeventListener1()
    {
        fname.addEventListener('focus', focusEventFname);

        fname.addEventListener('blur', blurEventFname);
    
        lname.addEventListener('focus', focusEventLname);

        lname.addEventListener('blur', blurEventLname);
    
        dni.addEventListener('focus', focusEventDni);

        dni.addEventListener('blur', blurEventDni);
    
        bdate.addEventListener('focus', focusEventBdate);

        bdate.addEventListener('blur', blurEventBdate);
    
        pnumber.addEventListener('focus', focusEventPnumber);

        pnumber.addEventListener('blur', blurEventPnumber);
    
        address.addEventListener('focus', focusEventAddress);

        address.addEventListener('blur', blurEventAddress);
    
        city.addEventListener('focus', focusEventCity);
        
        city.addEventListener('blur', blurEventCity);
    }

    function addeventListener2()
    {
        pcode.addEventListener('focus', focusEventPcode);

        pcode.addEventListener('blur', blurEventPcode);
    
        email.addEventListener('focus', focusEventEmail);

        email.addEventListener('blur', blurEventEmail);
    
        pass.addEventListener('focus', focusEventPass);

        pass.addEventListener('blur', blurEventPass);
    
        rpass.addEventListener('focus', focusEventRpass);

        rpass.addEventListener('blur', blurEventRpass);

        create.addEventListener('click', createCliked);
    }

    function focusEventFname()
    {
        var b = document.getElementById('fnameDiv');
        
        b.lastElementChild.textContent='';   
    }

    function blurEventFname()
    {
        var va = document.getElementById('fname').value;
        
        if (isntNumber(va) && isntSpecChar(va) && va.length > 3)
        {
            fname.style.border='2px solid #32CD32';

            fnB=true;
        }
    
        else 
        {
            var b = document.getElementById('fnameDiv');
    
            b.lastElementChild.textContent='The name is invalid';
    
            fname.style.border='2px solid #ffa07a';

            fnB=false;
        }
    }

    function focusEventLname()
    {
        let b = document.getElementById('lnameDiv');
        
        b.lastElementChild.textContent='';   
    }

    function blurEventLname()
    {
        var va = document.getElementById('lname').value;

        if (isntNumber(va) && isntSpecChar(va) && va.length > 3)
        {
            lname.style.border='2px solid #32CD32';
            
            lnB = true;
        }
    
        else 
        {
            var b = document.getElementById('lnameDiv');
    
            b.lastElementChild.textContent='The last name is invalid';
    
            lname.style.border='2px solid #ffa07a';

            lnB = false;
        }
    }


    function focusEventDni()
    {
        var b = document.getElementById('dniDiv');

        b.lastElementChild.textContent='';   
    }

    function blurEventDni()
    {
        var va = document.getElementById('dni').value;

        if (!isNaN(va) && (va>7))
        {
            dni.style.border='2px solid #32CD32';

            dniB = true;
        }
    
        else 
        {
            var b = document.getElementById('dniDiv');
    
            b.lastElementChild.textContent='The Dni is invalid';
    
            dni.style.border='2px solid #ffa07a';
            
            dniB = false;
        }
    }

    function focusEventBdate()
    {
        var b = document.getElementById('bdateDiv');
        
        b.lastElementChild.textContent='';   
    }

    function blurEventBdate()
    {
        var va = document.getElementById('bdate').value;

        if (validateBdate(va))
        {
            bdate.style.border='2px solid #32CD32';

            bdateB = true;
        }
    
        else 
        {
            var b = document.getElementById('bdateDiv');
    
            b.lastElementChild.textContent='The date is invalid. Please follow dd/mm/yyyy and it should be '
            + 'be 18 years lesser than the actual date';
    
            bdate.style.border='2px solid #ffa07a';

            bdateB = false;
        }
    }

    function focusEventPnumber()
    {
        var b = document.getElementById('pnumberDiv');

        pnumber.style.backgroundColor='#FFF';
        
        b.lastElementChild.textContent='';   
    }

    function blurEventPnumber()
    {
        var va = document.getElementById('pnumber').value;

         if (!(isNaN(va)) && (va.length==10))
        {
            pnumber.style.border='2px solid #32CD32';

            pnumberB = true;
        }

        else 
        {
            var b = document.getElementById('pnumberDiv');
    
            b.lastElementChild.textContent='The phone number is invalid.';
    
            pnumber.style.border='2px solid #ffa07a';
            
            pnumberB = false;
        }       
    }

    function focusEventAddress()
    {
        var b = document.getElementById('addressDiv');

        b.lastElementChild.textContent='';   
    }

    function blurEventAddress()
    {
        if (validateAddress(document.getElementById('address').value))
        {
            address.style.border='2px solid #32CD32';

            addressB = true;
        }
    
        else 
        {
            var b = document.getElementById('addressDiv');
    
            b.lastElementChild.textContent='The address is invalid.';
    
            address.style.border='2px solid #ffa07a';

            addressB = false;
        }       
    }

    function focusEventCity()
    {
        var b = document.getElementById('cityDiv');

        b.lastElementChild.textContent='';  
    }

    function blurEventCity()
    {
        if (validateCity(document.getElementById('city').value))
        {
            city.style.border='2px solid #32CD32';

            cityB = true;
        }
    
        else 
        {
            var b = document.getElementById('cityDiv');
    
            b.lastElementChild.textContent='The address is invalid.';
    
            city.style.border='2px solid #ffa07a';

            cityB = false;
        }       
    }

    function focusEventPcode()
    {
        var b = document.getElementById('pcodeDiv');

        b.lastElementChild.textContent='';  
    }

    function blurEventPcode()
    {
        var va = document.getElementById('pcode').value;

        if (!isNaN(va) && va.length <6 && va.length > 3)
        {
            pcode.style.border='2px solid #32CD32';

            pcodeB = true;
        }
    
        else 
        {
            var b = document.getElementById('pcodeDiv');
    
            b.lastElementChild.textContent='The address is invalid.';
    
            pcode.style.border='2px solid #ffa07a';

            pcodeB = false;
        }       
    }

    function focusEventEmail()
    {
        var b = document.getElementById('emailDiv');

        b.lastElementChild.textContent='';   
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
            var b = document.getElementById('emailDiv');

            b.lastElementChild.textContent='The email is invalid';

            email.style.border='2px solid #ffa07a';

            emailB = false;
        }

    }

    function focusEventPass()
    {
        let b = document.getElementById('passDiv');

        b.lastElementChild.textContent='';   
    }

    function blurEventPass()
    {   
        var va = document.getElementById('pass').value;

        if (validatePass(va) && va.length > 7)
        {
            pass.style.border='2px solid #32CD32';

            passB = true;
        }

        else 
        {
           var b = document.getElementById('passDiv');

           b.lastElementChild.textContent='The password is invalid';

           pass.style.border='2px solid #ffa07a';

           passB = false;
        }
    }

    function focusEventRpass()
    {
        var b = document.getElementById('rpassDiv');

        b.lastElementChild.textContent='';
    }

    function blurEventRpass()
    {
        var va= document.getElementById('rpass').value
        if (va == document.getElementById('pass').value && validatePass(va))
        {
            rpass.style.border='2px solid #32CD32';

            rpassB = true;
        }

        else 
        {
           var b = document.getElementById('rpassDiv');

           b.lastElementChild.textContent='The passwords are not equal';

           rpass.style.border='2px solid #ffa07a';

           rpassB = false;
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

    function validateBdate(va)
    {
        for (let i = 0; i < va.length; i++) 
        {
            if (i == 2 || i==5)
            {
                if(va[i]!='/')
                {
                    return false
                }

            }
            
        }

        if (isNaN(va[0]) || isNaN(va[1]) || isNaN(va[3]) || isNaN(va[4]) || isNaN(va[6]) ||
        isNaN(va[7]) || isNaN(va[8]) || isNaN(va[9]))
        {
            return false;
        }

        var parts = va.split("/");

        var month = parseInt(parts[0], 10);

        var day = parseInt(parts[1], 10);

        var year = parseInt(parts[2], 10);

        var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));

        var dob = year * 10000 + month * 100 + day * 1;
        
        if (now - dob < 180000) 
        {   
            return false;
        }

        // Check the ranges of month and year
        if(year < 1900 || year > 2100 || month == 0 || month > 12)
        {
            return false;
        }

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        {
            monthLength[1] = 29;
        }

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];

    }

    function validateAddress(va)
    {
        //testing for special characters.

        for (var i = 0; i < va.length; i++)
        {
            for (var j = 0; j < specChar.length; j++) {
                if (va[i] == specChar[j]) 
                {
                    return false;
                }
                
            }
        }

        var wSpaceB = false;

        //testing for whitespaces

        for (var i = 0; i < va.length; i++) 
        {
            if (va.indexOf(' ') >= 0 && isNaN(va[va.indexOf(' ')-1]) && !isNaN(va[va.indexOf(' ')+1]))
            {
                wSpaceB =true;
                break;
            }
        }
        
        if (!wSpaceB)
        {
            return false
        }

        //Testing for number of non-whitespaces char

        var va2 = va.split(' ').join('');

        if (va2.length < 5)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }

    function validateCity(va)
    {
        
        var letterC = 0;

        var va2 = va.toLowerCase();

        for (var i = 0; i < va2.length; i++) 
        {
            for (var j = 0; j < abc.length; j++) 
            {
                if (va2[i] == abc[j]) 
                {
                    letterC+=1;
                }

                if (letterC>=3)
                {
                    return true;
                }
            }
        }
        
        return false;
    
    }
    
    function validatePass(va)
    {
        va2 = va.toLowerCase();

        var abcB = false;

        var numB = false;
        
        var specCharB = false;
    
        for (var i = 0; i < va2.length; i++) 
        {
                for (var j = 0; j < specChar.length; j++) 
                {
                    if (va2[i] == specChar[j]) 
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
    
        for (var i = 0; i < va2.length; i++) 
        {  
                if (!numB)
                {
                    for (var j = 0; j < num.length; j++) 
                {
                    if (va2[i]==num[j]) 
                    {
                        numB = true;
    
                        break;
                    }   
                } 
                }
                
                if (!abcB) 
                {
                    for (var j = 0; j < num.length; j++) 
                    {
                        if (va2[i]==abc[j]) 
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

    function createCliked(e) 
    {
        e.preventDefault();

        var message = '';

        var newline= '\r\n';

        if (fnB && lnB && dniB && bdateB && pnumberB && addressB && cityB &&
            pcodeB && emailB && passB && rpassB) 
        {
            message += 'Data is correct. Request sent';
            sendRqst();
        }

        else 
        {
            message += 'Data is incorrect. Request could not be sent Please check the next data: .' + newline +
            dataIncorrect(message);
        }
     window.alert(message);  
    }

    function dataIncorrect(message)
    {
        if (!fnB) 
        {
           message += 'The first name is incorrect. Please enter only letters and it should be bigger ' + 
            'than three characters.' + newline;
        }

        if (!lnB) 
        {
            message +='The last name is incorrect. Please enter only letters and it should be bigger ' + 
            'than three characters.' + newline;
        }

        if (!dniB) 
        {
            message +='The DNI is incorrect. Please enter only numbers ' + 
            'and it should have 8 characters.' + newline;
        }

        if (!bdateB) 
        {
            message +='The Birth date is incorrect. It should have the format mm/dd/yyyy and it should ' +
            'be 18 years lesser than the actual date' + newline;
        }

        if (!pnumberB) 
        {
            message +='The phone numbeer is incorrect. Please enter at least 5 letters and numbers ' + 
            'with a space in the middle' + newline;
        }

        if (!addressB) 
        {
            message +='The address is incorrect. Please enter only numbers ' + 
            'and it should have 8 characters.' + newline;
        }

        if (!cityB) 
        {
            message +='The city is incorrect. Please enter only letters and numbers ' + 
            'and it should have more than 3 characters.' + newline;
        }

        if (!pcodeB) 
        {
            message +='The postal code is incorrect. Please enter only numbers ' + 
            'and it should have 4 or 5 digits.' + newline;
        }

        if (!emailB) 
        {
            message +='The email is invalid. Please enter a valid ' + 
            'email address.' + newline;
        }

        if (!passB) 
        {
            message +='The password is invalid. Please enter letters and numbers ' + 
            'and it should have at least 8 characters.' + newline;
        }

        if (!rpassB) 
        {
            message +='The passwords are not the same. Please make sure that the input field ' +
            'Password and Repeat Password are the same' + newline;
        }

    }
    
}

function sendRqst() 
{
    const usp = new URLSearchParams (
        {
            name : fname.value,
            lastName : lname.value,
            dni: dni.value,
            dob: bdate.value,
            phone: pnumber.value,
            address: address.value,
            city: city.value,
            zip : pcode.value,
            email : email.value,
            password : pass.value
        }
    );

    const request = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?'+ usp;
    
    fetch (request)
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        if(responseJson.success){
            window.alert('Request successful\n' + responseJson.msg);
            localStrg();
        } else{
           window.alert('Error\n' + responseJson.msg);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

function localStrg() 
{
    localStorage.setItem('firstName', fname.value);
    localStorage.setItem('lastName', lname.value);
    localStorage.setItem('dni', dni.value);
    localStorage.setItem('dateOfBirth', bdate.value);
    localStorage.setItem('phone', pnumber.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('zip', pcode.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', pass.value);
}

function fillValues()
{
    fname.value = localStorage.getItem('firstName');
    lname.value = localStorage.getItem('lastName');
    dni.value = localStorage.getItem('dni');
    bdate.value = localStorage.getItem('dateOfBirth');
    pnumber.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    city.value = localStorage.getItem('city');
    pcode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    pass.value = localStorage.getItem('password');
}