
let yourName=document.querySelector('.yourname');
let yourEmail=document.querySelector('.youremail');
let error=document.querySelector('#error');
let form=document.querySelector('#form');





const regexE = /[^A-Z]/g



  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const incorrect = yourEmail.value.length === 0 || regexE.test(yourEmail.value);
    if (!incorrect) {
      yourEmail.className = "invalid";
      error.textContent = "I expect an email, please";
      error.className = "error active";
    } else {
      yourEmail.className = "valid";
      error.textContent = "";
      error.className = "error";
    }
  });



