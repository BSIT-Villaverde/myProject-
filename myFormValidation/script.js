let myForm = document.getElementById('myForm');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let pNumInput = document.getElementById('pNumber');
let pay = document.getElementById('payment');

let nameErr = document.getElementById('nameErr');
let emailErr = document.getElementById('emailErr');
let pNumErr = document.getElementById('pNumErr');
let payErr = document.getElementById('payErr');


myForm.addEventListener('submit', function(e){
    e.preventDefault();
    payErr.textContent = '';
    formValidation();
});

function formValidation(){
    isValidName();
    isvalidEmail();
    isvalidPhoneNumber();
    isValidPayment();
}

function isValidName(){
    let name = nameInput.value.trim();

    if (name === ''){
        nameErr.textContent = 'Name field cannot be empty.';
        
    }else if(!isNaN(name)){
        nameErr.textContent = 'Name cannot be a number';
    }else{
        nameErr.textContent = '';
    }
}

function isvalidEmail(){
    let email = emailInput.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailPattern.test(email);

    do{
        if (email === ''){
            emailErr.textContent = 'Email field cannot be empty.';
        }else if(!emailPattern.test(email)){
            emailErr.textContent = 'Invalid email.';
        }else{
            emailErr.textContent = '';
        }
    }while(!emailPattern)
}

function isvalidPhoneNumber(){
    let num = pNumInput.value.trim();
    let phonePattern = /^\d{10}$/;
    phonePattern.test(num);

    do {
        if (num === ''){
            pNumErr.textContent = 'Phone Number field cannot be empty.'
        }else if(!phonePattern.test(num)){
            pNumErr.textContent = 'Invalid Phone Number.'
        }else{
            pNumErr.textContent = ''
        }
    }while(!phonePattern)

}

function isValidPayment(){
    let int = parseInt(pay.value, 10);
   
        if (int === 3){
            payErr.textContent = 'Please select a payment option.';
        }
        
}



