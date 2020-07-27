function validation(){

    var user = document.getElementById('user').value;
    var emails = document.getElementById('emails').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('conpass').value;
    

if(user == ""){
        document.getElementById('username').innerHTML ="Please fill the username field";
        return false;
    }
    if((user.length < 3) || (user.length > 20)) {
        document.getElementById('username').innerHTML =" Username must be atleast 3 characters";
        return false;	
    }
    
 if(emails == ""){
        document.getElementById('emailids').innerHTML =" Please fill the email id";
        return false;
    }
    if(emails.indexOf('@') <= 0 ){
        document.getElementById('emailids').innerHTML =" Email id is not valid ";
        return false;
    }

if(pass == ""){
        document.getElementById('passwords').innerHTML =" Please enter the password ";
        return false;
    }
    if((pass.length < 6) || (pass.length > 10)) {
        document.getElementById('passwords').innerHTML ="Passwords must be atleast 6";
        return false;	
    }
if(confirmpass == ""){
        document.getElementById('confrmpass').innerHTML =" Password2 is required";
        return false;
    }

}

