let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgParagraph");
const userScoreText = document.querySelector("#userScore");
const compScoreText = document.querySelector("#compScore");

const genCompChoice = () => {
    const fixedChoices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return fixedChoices[randomIndex];
}

const gameDraw = () => {
    msg.innerText = "Game Drawn!";
    msg.style.backgroundColor = "#081B31";
}

const showWinner = (userWins, userChoice, compChoice) => {
    if (userWins) {
        userScore++;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScoreText.innerText = userScore;
    }
    else {
        compScore++;
        msg.innerText = `You Loose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreText.innerText = compScore;
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWins = true;
        if (userChoice === "rock") {
            userWins = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWins = compChoice === "scissor" ? false : true;
        }
        else {
            userWins = compChoice === "rock" ? false : true;
        }
        showWinner(userWins, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
