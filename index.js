let score = 0
let currentWord = ""
let guessLeft = 10
let currentGuesses = []
let wrongLetters = []

function hiddenWord() {
    let tmpWord = []
    for(let i = 0; i < currentWord.length; i++)
        if(currentGuesses.indexOf(currentWord[i]) !== -1) {
            tmpWord.push(currentWord[i])
        } else {
            tmpWord.push("*")
        }
}

const allWords = ['sunnies','dad hat', 'messy bun', 'portrait mode', 'insta','jack johnson']

function ranWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
    console.log(arr)
}

function restartRound() {
    currentWord = ranWord(allWords)
    guessLeft = 10
    wrongLetters = []
}

function displayValues() {
    let scoreT = document.querySelector("#score")
    let hword = document.querySelector("#hiddenWord")
    let gleft = document.querySelector("#guessLeft")
    let wrLet = document.querySelector("#wrongLetters")

    scoreT.innerHTML = score
    hword.innerHTML = hiddenWord()
    gleft.innerHTML = guessLeft
    wrLet.innerHTML = wrongLetters.join()

}

document.addEventListener("keypress", function(event) {
    const letter = event.key.toLowerCase()
    currentGuesses.push(letter)

    if(guessLeft <= 0) {
        restartRound()
    }

    if(hiddenWord() === currentWord) {
        score++
        restartRound()
        return
    }

    if(currentWord.indexOf(letter) !== -1) {
        
    } else {
        guessLeft-- 
        wrongLetters.push(letter)
    }
    displayValues()
})

restartRound()