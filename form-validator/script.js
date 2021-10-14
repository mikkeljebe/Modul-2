const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false; 

function validateForm(){
  // using constraint API
  isValid = form.checkValidity();
  // Style main msg for an error
  if(!isValid) {
    message.textContent = 'please fill out!!';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
  return;
  }
  // Check if passwords match
  if (password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor ='green';
    password2El.style.borderColor ='green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor ='red'
    password1El.style.borderColor ='red';
    password2El.style.borderColor ='red';
    return;
  }
// if form is valid and passwords match
  if(isValid && passwordsMatch){
    message.textContent = 'Successfully registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData(){
  const user = {
    name: form.name.value,
    phone: form.phone.value, 
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };
  // Do something with user data
  console.log(user);
  

}
function prosessFormData(e){
  e.preventDefault();
// val  idate form
validateForm()
// Submit if valid
if(isValid && passwordsMatch){storeFormData();};
  
}

// event listener
form.addEventListener('submit', prosessFormData);