//get data
const nameInput = document.querySelector("#name")
const email= document.querySelector("#email")
const message = document.querySelector("#message")
const success = document.querySelector("#success")
const errorNodes = document.querySelectorAll(".error")



//validateform
function validateform() 
{
     clearMessages();
      
     if(nameInput.value.length < 1)
     {
         errorNodes[0].innerText = "Please enter a name"
         nameInput.classList.add(error-border);
     }
}