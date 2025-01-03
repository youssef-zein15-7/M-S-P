//VALIDATE FOR SUM NUMBERS------------
let nameArea = document.querySelector('#form_name'); //
let emailArea = document.querySelector('#form_email'); //
let textArea = document.querySelector('#form_message'); //
let errName = document.querySelector('#err-name');
let errEmail = document.querySelector('#err-email');
let errMessage = document.querySelector('#err-message');

let sendEmailBtn = document.querySelector('#sendBtn'); //
let formAction = document.querySelector('#contact-form'); //
let message_box = document.querySelector('.message_box'); //
sendEmailBtn.addEventListener('click', validateInputs);

let error = [];

function validateInputs(e) {
	e.preventDefault();

  let nameVerification = validateName(nameArea.value);//true or false
  let emailVerification = validateEmail(emailArea.value);//true or false

  if (!nameVerification) {
    error.push('x');
    nameArea.value = ``;
    errName.style.color = 'ff0000';
    errName.innerHTML = '* Only leters please!'
    nameArea.addEventListener("focus", clearError);
  }
  if (!emailVerification) {
    emailArea.style.color = 'ff0000';
    error.push('x');
    emailArea.value = ``;
    errEmail.style.color = 'ff0000';
    errEmail.innerHTML = '* E-mail not correct!'
    emailArea.addEventListener("focus", clearError);
  }
  if (textArea.value == '') {
    textArea.style.color = 'ff0000';
    error.push('x');
    textArea.value = '';
    errMessage.style.color = 'ff0000';
    errMessage.innerHTML = '* Fill this area please!'
    textArea.addEventListener("focus", clearError);
  }
  if (error.length == 0) {
    let namee = nameArea.value;
    let emaill = emailArea.value;
    let messagee = textArea.value;
    sendMail(namee,emaill,messagee);
  }
}

//full validation for name
function validateName(nameValidation) 
{
  let rn = /^[A-Za-z ]+$/;

  return rn.test(nameValidation);
}

//full validation for email
function validateEmail(emailValidation) 
{
  let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return re.test(emailValidation);
}
//--------------------------

function clearInputsAfterSendMail() {
  $('.message_box').empty();
}


function clearError(e) {
	this.nextElementSibling.innerHTML = '';
	error.splice(0);
}

//SEND EMAIL WITH AJAX to PHP***************************
function sendMail(name,email,message) {
  
  let firstName = name;
  let delay = 2000;
  $.ajax({
    url: "../../contact.php",
    type: "POST",
    data: {
        name: name,
        email: email,
        message: message
    },
    cache: false,
    beforeSend: function() {
        $('.message_box').html(
            '<img src="./assets/img/loader.gif" style="border-radius:50%;margin-top:-5px;" width="80"/>'
            );
    },
    success: function(response) {
      if(response) {
        data = JSON.parse(response);
        if (data.status == 'success') {
          setTimeout(function() {
            $('.message_box').html('<div class="alert alert-success text-center p-1">Message sent. Thank you.</div>');
            $("#loader").hide();
            // Success message
            $('.message_box').html("<div class='alert alert-success'>");
            $('.message_box > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('.message_box > .alert-success')
                .append("<strong>Message sent. Thank you <span style='color:red;'>" + firstName + "</span>.</strong>");
            $('.message_box > .alert-success')
                .append('</div>');
            formAction.reset();
            setTimeout(clearInputsAfterSendMail,5000);
          }, delay);  
          // $.ajax({
          //     url: "../../send.Back.email.php",
          //     type: "POST",
          //     data: {
          //         name: name,
          //         email: email
          //     },
          //     cache: false,
          //     success: function(data) {
          //         if(data) {
          //             // Success message
          //         } else {
          //             // Fail message
          //         }
          //     },
          //     error: function() {
          //     }
          // })
        }else if (data.status == 'error') {
          $('#err-name').text(data.msgs.error_name);
          $('#err-email').text(data.msgs.err_email);
          $('#err-message').text(data.msgs.err_message);
          $('.message_box').html('');
        } else {
          // Fail message
          $('.message_box').html("<div class='alert alert-danger'>");
          $('.message_box > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
          $('.message_box > .alert-danger').append("<strong>Oops, Something Went Wrong." + ((firstName != '')? firstName + ", please try again later." : "</span> Please try again later."));
          $('.message_box > .alert-danger').append('</div>');
          setTimeout(function(){
              $('.message_box').html("");
          },8000);
          //clear all fields
          formAction.reset();
        }
      } else {
        // Fail message
        $('.message_box').html("<div class='alert alert-danger'>");
        $('.message_box > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('.message_box > .alert-danger').append("<strong>Oops, Something Went Wrong." + ((firstName != '')? firstName + ", please try again later." : "</span> Please try again later."));
        $('.message_box > .alert-danger').append('</div>');
        setTimeout(function(){
            $('.message_box').html("");
        },8000);
        //clear all fields
        formAction.reset();
      }
    },
    error: function() {
        // Fail message
        $('.message_box').html("<div class='alert alert-danger'>");
        $('.message_box > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('.message_box > .alert-danger').append("<strong>Oops, Something Went Wrong." + ((firstName != '')? firstName + ", please try again later." : "</span> Please try again later."));
        $('.message_box > .alert-danger').append('</div>');
        //clear all fields
        formAction.reset();
    },
  });
}
//**************************************************
