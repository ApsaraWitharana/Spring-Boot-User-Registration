
////////set the button action to and backend connect to frontend set ajax
$('#savepost').click( function (){
    //catch the input fealde  values
   let  Name = $('#username').val(); // get value
    let  Password = $('#login-pass').val(); // get value
    let  Email = $('#login-email').val(); // get value
    // let  ConfPassword= $('#login-passconfirm').val(); // get value
    console.log(Name,Password,Email);

    $.ajax({
        "url": "http://localhost:8080/user/savepost",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "username":Name,
            "password":Password,
            "email":Email

        }),
        success:function (result){
            console.log(result)
            alert("done")
            ready();
        },
        error:function (error){
            console.log(error)
            alert("try again")
        }
    })

})

//
/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Icon change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else{
            // Change to password
            input.type = 'password'

            // Icon change
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass','login-eye')