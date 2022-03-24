// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame(){
    userScore = 0
    for(let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
            if(userAnswer === question.correctAnswer){
            userScore = userScore + 10
            }
    }
    window.alert('Your score was: '+userScore)
}
while (playAgain === true) {
    playGame()
    let userChoice = window.prompt('Would you like to play again? Y or N')
    if(userChoice === 'Y') {
        playAgain = true
    } else {
        playAgain = false
        window.alert('Thanks for playing my trivia game ' + userName + '.' )
    }
}