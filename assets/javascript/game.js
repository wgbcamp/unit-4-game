var a = 0;
var b = 0;
var c = 0;
var d = 0;
var x = 0;
var userValue = 0;
var numberArray = [];
var winCounter = 0;
var lossCounter = 0;

//picks a number that the user needs to match to win
function pickNumber(){
    x = Math.floor(Math.random()*101)+19;
    $("#randomNumber").text(x);
}

//refreshes number array and assigns random numbers to 4 variables, removes selected numbers from array to prevent repeated values assigned to buttons
function assignValues(){
    numberArray = [1,2,3,5,10,12];

    var remover = Math.floor(Math.random() * numberArray.length);
    a = numberArray[remover];
    numberArray.splice(remover, 1);

    var remover = Math.floor(Math.random() * numberArray.length);
    b = numberArray[remover];
    numberArray.splice(remover, 1);
    
    var remover = Math.floor(Math.random() * numberArray.length);
    c = numberArray[remover];
    numberArray.splice(remover, 1);

    var remover = Math.floor(Math.random() * numberArray.length);
    d = numberArray[remover];
    numberArray.splice(remover, 1);
}

//refreshes userValue
function refreshScoreValue(){
    userValue = 0;
    $("#scoreValue").text(userValue);
}


//adds number to scoreValue when clicked, based on which button is clicked, also checks for win/loss conditions
$(".gems").on('click', function(){
    var id= $(this).attr("id");

    if(id == "gem1"){
        userValue += a;
        $("#scoreValue").text(userValue);
    }
    if(id == "gem2"){
        userValue += b;
        $("#scoreValue").text(userValue);
    }
    if(id == "gem3"){
        userValue += c;
        $("#scoreValue").text(userValue);
    }
    if(id == "gem4"){
        userValue += d;
        $("#scoreValue").text(userValue);
    }
    
     if(userValue > x){
         lossCondition();
         refreshScoreValue();
         pickNumber();
         assignValues();
    }

     if(userValue == x){
        winCondition();
        refreshScoreValue();
        pickNumber();
        assignValues();
    }
});

//win condition
function winCondition(){
winCounter++;
$("#winCount").text("Wins: " + winCounter);
}

//loss condition
function lossCondition(){
lossCounter++;
$("#lossCount").text("Losses: " + lossCounter);

}

//on page load, picks random number, assigns button values, sets scoreValue to 0
pickNumber();
assignValues();
refreshScoreValue();





