/**
 * Created by PIY on 27.3.2017 г..
 */

function playIt() {
    $(".playback").click(function(e) {
        e.preventDefault();

        // This next line will get the audio element
        // that is adjacent to the link that was clicked.
        var song = $(this).next('audio').get(0);
        if (song.paused)
            song.play();
        else
            song.pause();
    });
}

$(function(){
    $("#dice").dice();
    $("#dice, #btn_randRoll").click(function(){
        $("#dice").dice("roll", console.log);
    });


});

$(function(){
    $("#dice2").dice();
    $("#dice2, #btn_randRoll").click(function(){
        $("#dice2").dice("roll", console.log);
    });
    window._dices[1].width = 200;
    window._dices[1].height = 200;
});


function checkResult() {

    var value_dice1 = _dices[0].value,
    value_dice_2 = _dices[1].value,
        results = [],
        sum = value_dice_2 + value_dice1;
    results.push(sum);
    winLoseBonus(value_dice1,value_dice_2, sum);


    console.log ("-------------------------------------");
    console.log("Your result is: " + sum);
    console.log ("-------------------------------------");

}
function winLoseBonus(dice1,dice2,sum) {
   var currentMoney = document.getElementById("currentMoneyTab").innerHTML*1;

   //Regular case - user plays for sum of 7
    if (sum === 7) {
        currentMoney +=100;
        document.getElementById("currentMoneyTab").innerHTML = currentMoney.toString();
        // play fireworks
        window.localStorage.setItem("fireworksFlag", true);
    } else if (dice1 === dice2){
        // Bonus Case
        currentMoney += 50;
        document.getElementById("currentMoneyTab").innerHTML = currentMoney.toString();

        //play fireworks
        window.localStorage.setItem("fireworksFlag", true);

   } else {
        currentMoney-=100;
        document.getElementById("currentMoneyTab").innerHTML = currentMoney.toString();
        window.localStorage.setItem("fireworksFlag", false);
    }

    if (currentMoney<=0) {
        var r = confirm("You have no more money! Would you like to reload and start again?");
        if (r == true) {
            location.reload();
            window.localStorage.setItem("fireworksFlag", false);
        } else {
            alert("Stay a bit longer and enjoy our fireworks!");
            window.localStorage.setItem("fireworksFlag", true)

        }
    }
}