
// adding event listener to give functionality to our button
$(".btn").click(function(){


    // Generating random number for both players
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;


    // Selecting images to match random numbers
    var randomDiceImage = "images/dice"+randomNumber1+".png";
    $("img")[0].setAttribute("src",randomDiceImage);

    var randomDiceImage2 = "images/dice"+randomNumber2+".png";
    $("img")[1].setAttribute("src",randomDiceImage2);

    // changing h1 to declare winner
    if (randomNumber1 > randomNumber2){
        $("h1").text("Player 1 wins!");
    } else if(randomNumber1 < randomNumber2){
        $("h1").text("Player 2 wins!");
    }else{ 
        $("h1").text("it's a draw!");
    }


});
