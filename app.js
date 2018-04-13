var nme=document.getElementById("name");
var email=document.getElementById("email");
var pass=document.getElementById("password");
function submit(){
    checkValidation();
    localStorage.setItem("Name",nme.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Password",pass.value);
    
    return false;

}
function checkValidation(){
    if(nme.value =="" || nme.value ==" ")
    {
     alert("please Enter Your Name");   
    }
}