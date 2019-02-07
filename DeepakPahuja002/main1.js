$(document).ready(function() {

    var count = 0;
    var x = "X";
    var o = "O";
    $('#game li').click(function(){

        ////////     For double click on button //////////
        if($(this).hasClass('o') || $(this).hasClass('o')){
            return;
        }

        if(count == 9){
            alert("It's a TIE !!");
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
            alert('O has won the game. Start a new game')
            // $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").text("+");
            count = 0;
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
                alert('X wins has won the game. Start a new game')
                // $("#game li").removeClass('disable');
                $("#game li").removeClass('o');
                $("#game li").removeClass('x');
                $("#game li").text("+");
                count = 0;
            }
        
    });
})