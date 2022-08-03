const firstName = document.querySelector('#firstName');
const lastName= document.querySelector('#lastName');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');


const firstNameError = document.querySelector('#errorName');
const lastNameError = document.querySelector('#errorlastName');
const emailError = document.querySelector('#errorEmail');
const passError = document.querySelector('#errorPassword');

const button = document.querySelector('#submit');
button.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
    validateEmail(email.value, email, emailError);
    validateEmpty(pass.value, pass, passError, 'Password');

})

function validateEmpty(valueInput, input, messengerError, name) {
    if(valueInput.length === 0) {
        showError(input, messengerError, name);
    }else{
        hideError(input, messengerError);
    }
    
}

function validateEmail(email, inputEmail, messengerError){
    let regularExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regularExp.test(email) == false) {
        inputEmail.style.border = '2px solid red';
        messengerError.innerHTML = `<img src="images/icon-error.svg" alt="error" class="errorImg">
        <p class="textError">Looks like this is not an email</p>`
    }else{
    hideError(inputEmail, messengerError);
    }
}

function showError(input, messengerError, name) {
    input.style.border = '2px solid red'; 
    messengerError.innerHTML = `<img src="images/icon-error.svg" alt="error" class="errorImg">
    <p class="textError">${name} cannot be empty</p>`
}

function hideError(input, messengerError) {
    input.style.border = '1px solid hsl(246, 25%, 77%)'; 
    messengerError.innerHTML = ''; 
}

