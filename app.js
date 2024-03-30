/**const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>{
  event.preventDefault();

  //username validation
  if (username.value.trim() ==''){
    error(username, 'Please enter username!');
  }else{
    success(username);
  }

   //password validation
   if (password.value.trim() ==''){
    error(password, 'Please enter password!');
  }else{
    success(password);
  }

});
function error(element, msg){
  element.style.border = '2px red solid';
  const parent = element.parentElement;
  const p = parent.querySelector('p');
  p.textContent = msg;
  p.style.visibility = 'visible';
}

function success(element){
  element.style.border = '2px green solid';
  const parent = element.parentElement;
  const p = parent.querySelector('p');
  p.style.visibility = 'hidden';
} 
*/


//Username validation
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error= document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
  if(email.value.length <5){
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }

  if(password.value.length <4){
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}

function email_Verify(){
  if(email.value.length >=4){
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}
function pass_Verify(){
  if(password.value.length >=3){
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}