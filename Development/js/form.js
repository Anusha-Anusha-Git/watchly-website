// formValidation.js
function validate_form() {
    var firstname = document.forms["myform"]["firstname"].value;
    var lastname = document.forms['myform']['lastname'].value;
    var email = document.forms['myform']['email'].value;
    var number = document.forms['myform']['number'].value;
    var message = document.forms['myform']['message'].value;

    if (firstname === "" || lastname === "" || email === "" || number === "") {
        alert("Please enter your informations!!");
        return false;
    }

    // Basic check for 10-digit phone number
    if (number.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (message === "") {
        alert("Please feel free to reach us out if you have any queries.");
        return false;
    }

    alert("Thank for providing your information and queries.");
    return true;
}