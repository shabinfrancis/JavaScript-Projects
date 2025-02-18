let icons = document.querySelectorAll('.icon-container .icon');
let selectionContainer = document.querySelector('.selection-icon');
let arr = [['paper', 'fa-solid fa-hand'], ['rock', 'fa-solid fa-hand-back-fist'], ['scissors', 'fa-solid fa-hand-scissors']];
let result = document.querySelector('.result h2')

for(let i=0; i<icons.length; i++) {
    icons[i].addEventListener("click", () => {
        result.innerHTML = "";
        selectionContainer.innerHTML = "";
        setTimeout(gameLogic, 1000, i);
    })
}

function gameLogic(i) {
    let playerChoice = arr[i][0];
        let ran = Math.floor(Math.random() * 3);
        // console.log(ran)
        let compChoice = arr[ran][0];
        console.log(playerChoice, compChoice);
        selectionContainer.innerHTML = `
            <div class="you"><h2>You</h2><div class="icon"><i class="${arr[i][1]}"></i></div></div>
            <div class="comp"><h2>Comp</h2><div class="icon"><i class="${arr[ran][1]}"></i></div></div>
        `

        if(playerChoice == compChoice) {
            result.innerHTML = "IT'S A TIE!";
        } else if ((playerChoice == 'paper' && compChoice == 'rock') || 
                   (playerChoice == 'rock' && compChoice == 'scissors') ||
                   (playerChoice == 'scissors' && compChoice == 'paper')) {
                    result.innerHTML = "YOU WON!";
        } else {
            result.innerHTML = "YOU LOST!";
        }
}