var nme=document.getElementById("name");
var email=document.getElementById("email");
var pass=document.getElementById("password");
var useremail=document.getElementById("userEmail");
var userpass=document.getElementById("userPass");
function submit(){
    if(nme.value==""){
        alert("false");
        return false;
    }
    else{
        localStorage.setItem("Name",nme.value);
        localStorage.setItem("Email",email.value);
        localStorage.setItem("Password",pass.value);
        window.location.href="login.html";
    }
}

function login(){
    var storagePass=localStorage.getItem("Password");
    var storageEmail=localStorage.getItem("Email");
    
    if(useremail.value === storageEmail && storagePass === userpass.value){
        window.location.href="quiz.html";
    }
    else{
        alert("Incorrect Email or Password");
    }
}
