function SubmitPressed(){
    var email = document.getElementById("sign_up_email").value;
    var pass=document.getElementById("sign_up_password").value;
    if(email=="" || pass==""){
      alert("You should enter an email and password");
    } else{
      if(pass.length<8){
        console.log("Your password is less than 8 characters");
        alert("Your password is less than 8 characters");
      } else{
        var mform=document.querySelector("form[name='m_form']");
        mform.submit();
        alert("Form successfully submitted");
        clearForm();
      }
    }
    
  }
  function clearForm(){
    var email = document.getElementById("sign_up_email").value="";
    var pass=document.getElementById("sign_up_password").value="";
  }