$(document).ready(function(){
    $("#LoginBtn").click(Login);
    function Login(){
        var Username = document.getElementById("Username");
        var Password = document.getElementById("Password");
        
        localStorage.setItem("Username",Username.value);
        localStorage.setItem("Password",Password.value);
        console.log(localStorage.getItem("Username"));
        console.log(localStorage.getItem("Password"));

        $.ajax({
            type: 'GET',
            url: 'http://localhost:50779/api/Users',
            success: function(data) {
                let user = 0;      //   To check if a it's a registered user or not
                let pass = 0;      //   To check if the password is correct or not

                for(i=0; i<data.length;i++){
                    if(Username.value == data[i].Username){
                        user = 1;
                        if(Password.value == data[i].Password){
                            pass = 1;                                //  the user is registered and logged in successfully
                            localStorage.setItem("Username",Username.value);
                            localStorage.setItem("Password",Password.value);
                            console.log(localStorage.getItem("Username"));
                            console.log(localStorage.getItem("Password"));
                            alert("You are now Logged in !!");
                            return location.replace("game.html");
                        }
                    }
                };

                if(user == 1 && pass == 0){         //  the user is registered but password is not correct
                    alert("Please Enter the correct credentials !!");
                }
                if(user == 0 && pass == 0){            //  the user is NOT registered at all
                    alert("You don't have any Account !!");
                }
            }
        });
    }
})
