document.getElementById('submit').addEventListener('click', onSubmit);

function onSubmit(){
    let fnameBox = document.getElementById("fname");
    let ltextBox = document.getElementById('lname');
    let email = document.getElementById('email');
    let checkbox = document.getElementById('checkbox');

    console.log(checkbox.checked);

}