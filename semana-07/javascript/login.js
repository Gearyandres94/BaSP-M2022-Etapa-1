window.onload = function()
{
    var num = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8 ,9]

    var abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];

    var specChar = ['+', '-','_','@','*'];

    var emailB = false, passB = false;

    var email = document.getElementById('email');

    var pass = document.getElementById('pass');

    var loginBtn = document.getElementById('login');

    email.addEventListener('focus', focusEventEmail);

    email.addEventListener('blur', blurEventEmail);

    pass.addEventListener('focus', focusEventPass);

    pass.addEventListener('blur', blurEventPass);

    loginBtn.addEventListener('click', loginClick); 

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

        b.lastElementChild.textContent='The email is invalid.';

        email.style.border='2px solid #ffa07a';
        
        emailB = false;
    }

}

function focusEventEmail()
{
    var b = document.getElementById('emaildiv');

    b.lastElementChild.textContent='';
}

function blurEventPass()
{
    if (validatePass() && pass.value.length>7)
    {
        pass.style.border='2px solid #32CD32';
        
        passB = true;
    }
    else 
    {
        var b = document.getElementById('passdiv');

        b.lastElementChild.textContent='The password is invalid. It should be longer than 7 chars and needs letters and numbers';

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

        var vm = document.getElementById('email').value;

        if (vm.match(mailformat)){
            return true;
        }

        else {
            return false;
        }

    }


    function validatePass()
    {
        va= document.getElementById('pass').value;

        var abcB = false;

        var numB = false;

        
        //testing for special chars
        for (var i = 0; i < va.length; i++) 
        {
                for (let j = 0; j < specChar.length; j++) 
                {
                    if (va[i] == specChar[j]) 
                    {
                        return false;
                    }
                }
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
                    for (let j = 0; j < abc.length; j++) 
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

        var message = '';

        if (emailB && passB)
        {
            showModal("The data is correct", '<p>Sending Request</p>',
            [ { label: "Ok", onclick: modal =>{}, triggerClose:true }]);

            sendRqst();
        }

        else 
        {
             message += '<p>The Data is incorrect. Please check the next items:</p>'
                
            if (!emailB) 
            {
                message += '<p>User email: Please enter a valid email.</p>'
            }

            if (!passB) 
            {
                message += '<p>Password: Please enter a valid password. It should contain only' +
                ' letters and numbers.</p>' + '<p>And be longer than 7 characters.</p>' ;
            }
            showModal("Data is incorrect", '<p>'+message+'</p>',
            [ { label: "Ok", onclick: modal =>{}, triggerClose:true }]);
        }
  
    }

}

function sendRqst() 
{
    const usp = new URLSearchParams (
        {
            email : email.value,
            password : pass.value
        }
    );

    const request = 'https://basp-m2022-api-rest-server.herokuapp.com/login?'+ usp;
    
    fetch(request)
        .then(function (response) {
           
            return response.json();
        })
        .then(function (response) {
            if(!response.success){
                throw new Error (response.msg)
            }
            showModal("Request succesful", '<p>'+ response.msg+'</p>',
            [ { label: "Ok", onclick: modal =>{}, triggerClose:true }]);
        })
        .catch(error=> {
            showModal("Error in request", '<p>'+ error+'</p>',
            [ { label: "Ok", onclick: modal =>{}, triggerClose:true }]);
        })
}
function showModal(titleHtml, contentHtml, buttons)
    {
        const modal = document.createElement("div");

        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal__inner">
                <div class="modal__top">
                    <div class="modal__title">${titleHtml}</div>
                    <button class="modal__close" type="button">
                        <span class="material-icons">
                            close
                        </span>
                    </button>
                </div>
                <div class="modal__content">${contentHtml}</div>
                <div class="modal__bottom"></div>
            </div>
        `;
        document.body.appendChild(modal);
        for (const button of buttons) 
        {
            const element = document.createElement('button');

            element.setAttribute('type','button');

            element.classList.add('modal__button');

            element.textContent = button.label;

            element.addEventListener('click', () =>
            {
                if (button.triggerClose) {
                    document.body.removeChild(modal);
                }

                button.onclick(modal);

            })

            modal.querySelector(".modal__close").addEventListener('click', () =>
            {
                document.body.removeChild(modal);
            });

            modal.querySelector('.modal__bottom').appendChild(element);

        }
    }
