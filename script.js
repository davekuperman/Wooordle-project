//VARIABLES LIST

const words = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt"]
let guessWord = words[Math.floor(Math.random() * words.length)]/*generates the random word that user must guess*/
guessWord = guessWord.toUpperCase()
console.log(guessWord)

let errorPrompt = document.querySelector('#gameMessage')
console.log(errorPrompt)

let getLetters = document.querySelectorAll('.key') // selects html element for keyboard keys

let tiles = document.querySelectorAll('.tile') // select html element for grid tile
let tileRow = document.querySelectorAll('.row')// select html element for tile row
console.log(tileRow)

let selectedTile = 0

/* write a function that checks the word in a row
 1.When each letter is passed into a tile, add those letters into an array. *done*
 2.join the array of letters to form a string (usersWords) *done*
 3.check/match the usersword string with the actual word
*/

let usersWord = []

const checkInput = function () {
    let input = usersWord.join('')
    input = input.toUpperCase()
    console.log(input)

    /*if (selectedTile){
     }else */if (selectedTile > 4) {
        console.log('the user guessed ' + input + '. The actual word is ' + guessWord)
    }
    if (input === guessWord) {
        errorPrompt.textContent = 'Well done!'
    } else if (selectedTile < 4) {
        errorPrompt.textContent = 'You must guess a word with 5 letters'
        console.log("not enough characters")
    } 

    
}


//input clicked keyboard innertext into tile grid
for (let i = 0; i < getLetters.length; i++) { //loops through all the keys and adds a "click" event listener
    getLetters[i].addEventListener('click', function () {

        const letter = getLetters[i].textContent //grabs the individual letter in element

        if (letter === 'del') {
            tiles[selectedTile - 1].textContent = ''
            console.log('deleted')
            usersWord.pop()

            selectedTile--
            if (selectedTile == 0) { return; }
        }
        else if (letter === 'enter') {
            console.log('enter')

            checkInput()

        }
        else {
            console.log('clicked ' + letter)
            if (selectedTile == 5) { return; }
            tiles[selectedTile].textContent = letter

            usersWord.push(letter)

            console.log(usersWord)
            selectedTile += 1
        }
    }
    )
}

