
document.querySelector("button").addEventListener("click", main)
function main() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1

    document.querySelector(".dice1 img").setAttribute("src", "dice/dice" + randomNumber1 + ".png");
    document.querySelector(".dice2 img").setAttribute("src", "dice/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".refresh").innerHTML = "You won!"
    }
    else if (randomNumber1 == randomNumber2) {

        document.querySelector(".refresh").innerHTML = "Draw!"
    }
    else {
        document.querySelector(".refresh").innerHTML = "Your friend won!"

    }
}