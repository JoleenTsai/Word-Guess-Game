

let score = 0
let currentWord = ""
let guessLeft = 10
let currentGuesses = []
let wrongLetters = []

function hiddenWord() {
    const tmpWord = [];
    for (let i = 0; i < currentWord.length; i++)
        if (currentGuesses.indexOf(currentWord[i]) !== -1) {
            tmpWord.push(currentWord[i]);
        } else {
            tmpWord.push("*")
        }
return tmpWord.join('');
}

const allWords = ['sunnies', 'dad hat', 'messy bun', 'portrait mode', 'insta', 'jack johnson']

function ranWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
    console.log(arr)
}

function restartRound() {
    currentWord = ranWord(allWords)
    guessLeft = 10
    wrongLetters = []
    currentGuesses = []


}

const scoreT = document.querySelector("#score")
const hword = document.querySelector("#hiddenWord")
const gleft = document.querySelector("#guessLeft")
const wrLet = document.querySelector("#wrongLetters")
function displayValues() {
    scoreT.innerHTML = score;
    hword.innerHTML = hiddenWord();
    gleft.innerHTML = guessLeft;
    wrLet.innerHTML = wrongLetters.join();
}

document.addEventListener("keypress", function (e) {
    const letter = e.key.toLocaleLowerCase()
    currentGuesses.push(letter)

    if (guessLeft <= 0) {
        document.querySelector('#message').innerHTML = `Beach please! ${currentWord} was correct!`
        restartRound();
        return
    }

    if (hiddenWord() === currentWord) {
        score++
        document.querySelector('#message').innerHTML= `You Smart Beach! ${currentWord} is correct!`
        restartRound()
        return
    }
    
    if (guessLeft === 9) {
        document.querySelector('#message').innerHTML=''
    }
    if ((currentWord.indexOf(letter) === -1) && wrongLetters.indexOf(letter) === -1) {
        guessLeft--;
        wrongLetters.push(letter);
    }
    displayValues()
})

restartRound()
displayValues()