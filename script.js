let submitButton = document.getElementById('submit');

submitButton.addEventListener("click", () =>{
    onSubmit();

    if (onSubmit()==true){
        loader();
    }
});


function onSubmit(){
    let fnameBox = document.getElementById("fname");
    let ltextBox = document.getElementById('lname');
    let email = document.getElementById('email');
    let checkbox = document.getElementById('checkbox');

    let filledFlag = true;

    if(validate(fnameBox)==false) {
        fnameBox.classList.add("invalid-border");
        console.log ("no first name");
        filledFlag = false;
    }
    else{
        fnameBox.classList.remove("invalide-border");
    }

    if(validate(ltextBox)==false){
        ltextBox.classList.add("invalid-border");
        filledFlag = false;
    }else{
        ltextBox.classList.remove("invalid-border");
    }


    if(validate(email)==false){
        email.classList.add("invalid-border");
        filledFlag = false;
    }
    else if(!validateEmail(email.value)){
        email.classList.add("invalid-border");
    }
    else{
        email.classList.remove("invalid-border");

    }

    if(checkbox.checked ==false){
        checkbox.classList.add("invalid-outline");
        filledFlag = false;
    }

    console.log(filledFlag);
    return filledFlag;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(input){
    if (input.value==''){
        return false;
    }
}

function loader(){
    document.getElementById("submit").style.display = "none";
    
    var loaderSpin = document.createElement("div");
    loaderSpin.id = "loader"; 
    loaderSpin.style.border="16px solid grey";
    loaderSpin.style.borderTop="16px solid blue";
    loaderSpin.style.borderRadius="50%";
    loaderSpin.style.width="120px";
    loaderSpin.style.height="120px";
    loaderSpin.style.animation="spin 2s linear infinite";
    document.body.appendChild(loaderSpin);

    const timeOut = setTimeout(timeOutFunction, 3000);

    function timeOutFunction(){
        loaderSpin.style.display="none";
        document.body.insertAdjacentHTML("beforeEnd", '<p>Thanks for singing up!</p>');
        console.log ("3secs");
    }

    setTimeout(()=>{
        let inputs = document.querySelectorAll("#fname, #lname, #email");
        console.log (inputs);

        inputs.forEach(input=>{
            input.value='';
        })

        document.getElementById('checkbox').checked = "false";

    }, 6000);
}