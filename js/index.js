//Get data
const nameInput = document.querySelector("#name");
const email= document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



//validate data
function validateForm(){
     clearMessages();
     let errorFlag =false;

     if(nameInput.value.length < 1){
         errorNodes[0].innerText = "blank";
         nameInput.classList.add(error-border);
         errorFlag = true;
     }

     if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "invalid email address";
        email.classList.add(error-border);
        errorFlag = true;
     }

     if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter message"
        message.classList.add(error-border);
        errorFlag = true;   

    }

     if(!errorFlag){
         success.innerText = "success!"
     }



}

//clear error/ success message
function clearMessages(){
     for(let i = 0; i < errorNodes.length; i++) 
     {
         errorNodes[i].innerText = "";
     }
     success.innerText = "";
     nameInput.classlist.remove("error-border");
     email.classlist.remove("error-border");
     message.classlist.remove("error-border");
}


//check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
































