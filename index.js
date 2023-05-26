var player1WinCount = 0;
var player2WinCount = 0;
function playGame() {
    var throw1 = randomNumber();
    var throw2 = randomNumber();
    
    if (throw1 > throw2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        player1WinCount++;
    }
    if (throw1 < throw2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        player2WinCount++;
    }
    if (throw1 === throw2) {
        document.querySelector("h1").innerHTML = "Game Draw!";
    }
    document.querySelector("#dice_1_img").setAttribute("src", "images/" + throw1 + ".png");
    document.querySelector("#dice_2_img").setAttribute("src", "images/" + throw2 + ".png");

    document.querySelector("#p1_win_count").innerHTML=player1WinCount;
    document.querySelector("#p2_win_count").innerHTML=player2WinCount;
    
}

function randomNumber() {
    var num = Math.floor(Math.random() * 6 + 1);
    // console.log(num);
    return num;
}

function reset() {
    document.querySelector("#dice_1_img").setAttribute("src", "images/6.png");
    document.querySelector("#dice_2_img").setAttribute("src", "images/6.png");
    document.querySelector("h1").innerHTML = "Dice Game"

    player1WinCount = 0;
    player2WinCount = 0;

    document.querySelector("#p1_win_count").innerHTML=player1WinCount;
    document.querySelector("#p2_win_count").innerHTML=player2WinCount;
}