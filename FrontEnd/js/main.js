
////////set the button action to and backend connect to frontend set ajax
$('#savepost').click( function (){
    //catch the input fealde  values
   let  Id = $('#id').val(); // get value
    let  Name = $('#name').val(); // get value
    let  Password = $('#password').val(); // get value
    let  Email= $('#email').val(); // get value
    console.log(Id,Name,Password,Email);

    $.ajax({
        url: "http://localhost:8080/user/savepost",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "id":Id,
            "username":Name,
            "password":Password,
            "email":Email
        }),
        success:function (result){
            console.log(result)
            alert("User Registration Successfully!!")
            ready();
        },
        error:function (error){
            console.log(error)
            alert("User Registration UnSuccessfully!! Try Again!!")
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