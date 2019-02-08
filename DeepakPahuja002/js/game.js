$(document).ready(function() {
// alert("dbxjwehb")
    var count = 0;
    var xScore = 0;
    var x = "X";
    var o = "O";
    var gameover = 0;
    var scoreShow = document.getElementById("scoreShow");
    var Username = localStorage.getItem("Username");
    var Password = localStorage.getItem("Password");


    $.ajax({
        type: 'GET',
        url: 'http://localhost:50779/api/Users',
        success: function(data) {
            for(i=0; i<data.length;i++){
                if(Username.toUpperCase() == data[i].Username.toUpperCase()){
                    xScore = data[i].Score;
                    Username = data[i].Username;
                    // console.log(xScore);
                    scoreShow.innerHTML = Username + "'s Score is: " + xScore;
                }
            }
        }
    });



    $('#game li').click(clicked);
    $('#reset').click(reset);

    function reset(){
        location.reload();
    }

    function updateScores(){
        var userdata = {
            // "Id": ,      //  no need of id(auto increment) in put request
            "Username": Username,      //    primary key required
            "Password": Password,
            "Score": xScore
        }
        console.log(userdata);

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:50779/api/Users/' + Username,
            data: userdata,
            success: function(data) {
                console.log(userdata);
                // location.replace("list.html");
            }
        });
        // location.reload();
    }

        
        function clicked(){
        
            if(gameover == 1){
                return alert("Press the RESTART button to PLAY AGAIN !!");
            }
            if(count == 9){
                alert("It's a TIE. GAMEOVER !!");
                gameover = 1;
            }

        ////////     For double click on button //////////
            if($(this).hasClass('o') || $(this).hasClass('x')){
                return alert("Already selected");
            }
            else if(count%2==0){

                $(this).text(o);
                $(this).addClass('o');
                count++;

            }
            else{ 
                $(this).text(x);
                $(this).addClass('x');
                count++;

            }
            if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') 
                || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') 
                || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') 
                || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') 
                || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') 
                || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') 
                || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') 
                || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
            {
                alert('O has won the game. Start a new game');
                xScore-=5;
                scoreShow.innerHTML = "Your Score is: " + xScore;
                updateScores();
                // // $("#game li").removeClass('disable');
                // $("#game li").removeClass('o');
                // $("#game li").removeClass('x');
                // $("#game li").text("+");
                count = 0;
                gameover = 1;
                alert("Press the RESTART button to PLAY AGAIN !!");
            }
            else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') 
                    || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') 
                    || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') 
                    || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') 
                    || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') 
                    || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') 
                    || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') 
                    || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
            {
                alert('X wins has won the game. Start a new game');
                xScore+=10;
                scoreShow.innerHTML = "Your Score is: " + xScore;

                updateScores();
                // // $("#game li").removeClass('disable');
                // $("#game li").removeClass('o');
                // $("#game li").removeClass('x');
                // $("#game li").text("+");
                count = 0;
                gameover = 1;
                alert("Press the RESTART button to PLAY AGAIN !!");
            }
            
    };
})