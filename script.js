//VARIABLES LIST

const words = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt"]


const guessWord = words[Math.floor(Math.random() * words.length)]/*generates the random word that user must guess*/
console.log(guessWord)


const userGuess = [] //users guess attempt which will be compared to the guessWord

let getLetters = document.querySelectorAll('.key')


let activeTile = document.querySelector('.firstTR1')


for (let i = 0; i < getLetters.length; i++) {
    getLetters[i].addEventListener('click', function () {
        let singleLetter = getLetters[i].textContent
        console.log('clicked' + singleLetter)

        activeTile.textContent = singleLetter
        activeTile = activeTile.nextElementSibling
        
        if(activeTile === null){
//if activeTile is showing error, check word attempt against guessWord, change tiles to correct colors in relation to the rules, if word is correct end game.
       
        }
    })
    console.log(getLetters[i])
}






