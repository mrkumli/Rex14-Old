/*Input Styling*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*Send Message*/


     function sendmail(){
    
      var name = $('#Name').val();
      var email = $('#Email').val();
      var phone = $('#Phone').val();
      var message = $('#Message').val();

      // var body = $('#body').val();

      var Body='Name: '+name+'<br>Email: '+email+'<br>Phone: '+phone+'<br>Message: '+message;
      //console.log(name, phone, email, message);

      Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'mrkumli@outlook.com',
        From: "kumailrizvi2006@gmail.com",
        Subject: "Contact Us Message",
        Body: Body
      }).then(
        message =>{
          //console.log (message);
          if(message=='OK'){
          alert('Your message has been sent. Thank you for connecting. We will respond to it shortly ;)');
          }
          else{
            console.error (message);
            alert('Error sending your message. Please mail at mrkumli@oulook.com if this error occurs again.')
            
          }

        }
      );



    }



      /*Email Error Message*/

function confirm_alert(node) {
    return confirm("Our Email Forwarders are not responding at the moment. Your msg could not be forwarded. Kindly mail your msg at: mrkumli@outlook.com, Inconvenience regretted!");
}