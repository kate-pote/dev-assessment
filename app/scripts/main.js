//show/hide popup
let modal1 = document.getElementById('modal1');
let modal2 = document.getElementById('modal2');

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// form validation
function validateEmail(e) {

  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let form = e.target.closest("form");
  let email = form.querySelector("input[type=email]");
  let test = mailformat.test(email.value); // because chrome and firefox default mail validation does not allow to do good validation except pattern attribute

  if (test) {
    email.setCustomValidity(''); //for Firefox
    form.submit();
  }
  else if (email.value.length == 0) {
    email.setCustomValidity("Please provide e-mail");
  }
  else {
    email.setCustomValidity("Seems it's not a valid e-mail");
  };

}





