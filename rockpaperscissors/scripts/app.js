const game = () => {
    let playerScore = 0;
    let moves = 0;
    let winCheck = "";

    const playGame = () => {
        const rockButton = document.querySelector(".rockButton");
        const paperButton = document.querySelector(".paperButton");
        const scissorsButton = document.querySelector(".scissorsButton");
    
        const playerOptions = [rockButton, paperButton, scissorsButton];
        const computerOptions = ["rock", "paper", "scissors"];
    
        playerOptions.forEach(option => {
            option.addEventListener("click", () => {

                moves++

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                const playerChoice = option.getAttribute("data-option");

                console.log("Computer Choice:", computerChoice);
                console.log("Player Choice:", playerChoice);

                winner(playerChoice, computerChoice);

                if (moves == 1) {
                    gameOver(playerChoice, computerChoice)
                }
            })
        })
    }
    
    const winner = (player, computer) =>  {
        const score = document.querySelector(".score")

        if (player === computer) {
            console.log("Tie")
            winCheck = "tie"
        } else if (player == "rock") {
            if (computer == "paper") {
                console.log("Computer won")
                winCheck = "lost"
            } else {
                console.log("Player won")
                playerScore++
                winCheck = "win"
                score.textContent = playerScore
            }
        } else if (player == "paper") {
            if (computer == "scissors") {
                console.log("Computer won")
                winCheck = "lost"
            } else {
                console.log("Player won")
                playerScore++
                winCheck = "win"
                score.textContent = playerScore
            }
        } else if (player == "scissors") {
            
            if (computer == "rock") {
                console.log("Computer won")
                winCheck = "lost"
            } else {
                console.log("Player won")
                playerScore++
                winCheck = "win"
                score.textContent = playerScore
            }
        }
    }

    const gameOver = (playerChoice, computerChoice) => {
        const content = document.querySelector(".content")
        const statusContent = document.querySelector(".resultContent")
        const restartButton = document.querySelector(".restartButton")

        const resultButton = document.querySelector(".resultButton")
        const choiceIcon = document.querySelector(".choiceIcon")
        resultButton.classList.remove("resultRockButton", "resultPaperButton", "resultScissorsButton");
        resultButton.classList.remove("rock", "scisssors", "paper");

        if (playerChoice == "rock") {
            resultButton.classList.add("resultRockButton");
            choiceIcon.classList.add("rock")
            choiceIcon.src="images/icon-rock.svg"
        }

        if (playerChoice == "scissors") {
            resultButton.classList.add("resultScissorsButton");
            choiceIcon.classList.add("scissors")
            choiceIcon.src="images/icon-scissors.svg"
        }

        if (playerChoice == "paper") {
            resultButton.classList.add("resultPaperButton");
            choiceIcon.classList.add("paper")
            choiceIcon.src="images/icon-paper.svg"
        }

        const computerButton = document.querySelector(".computerButton")
        const computerIcon = document.querySelector(".computerIcon")
        computerButton.classList.remove("computerRockButton", "computerPaperButton", "computerScissorsButton");
        computerIcon.classList.remove("crock", "cscisssors", "cpaper");

        if (computerChoice == "rock") {
            computerButton.classList.add("computerRockButton");
            computerIcon.classList.add("crock")
            computerIcon.src="images/icon-rock.svg"
        }

        if (computerChoice == "scissors") {
            computerButton.classList.add("computerScissorsButton");
            computerIcon.classList.add("cscissors")
            computerIcon.src="images/icon-scissors.svg"
        }

        if (computerChoice == "paper") {
            computerButton.classList.add("computerPaperButton");
            computerIcon.classList.add("cpaper")
            computerIcon.src="images/icon-paper.svg"
        }


        statusContent.classList.remove("hide")
        content.classList.add("hide")

        const statusTitle = document.querySelector(".statusTitle")

        if (winCheck == "win") {
            statusTitle.textContent = " WIN"
        } 
        if (winCheck == "lost") {
            statusTitle.textContent = "LOST"
        } 
        if (winCheck == "tie") {
            statusTitle.textContent = "  TIE"
        }

        restartButton.addEventListener("click", () => {
            statusContent.classList.add("hide")
            content.classList.remove("hide")
            moves = 0
        })
    }

    playGame()
}

game()

const rulesBtn = document.querySelector(".rulesButton")
const rulesContainer = document.querySelector(".rulesContainer")
const closeBtn = document.querySelector(".closeBtn")

rulesBtn.addEventListener("click", () => {
    rulesContainer.classList.remove("hide")
    rulesBtn.classList.add("hide")
})

closeBtn.addEventListener("click", () => {
    rulesContainer.classList.add("hide")
    rulesBtn.classList.remove("hide")
})