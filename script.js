//VARIABLES LIST

const words = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt"]
let guessWord = words[Math.floor(Math.random() * words.length)].toUpperCase()/*generates the random word that user must guess*/
console.log(guessWord)
let usersWord = []

let errorPrompt = document.querySelector('#gameMessage')
let getLetters = document.querySelectorAll('.key') // selects html element for keyboard keys
let tiles = document.querySelectorAll('.tile') // select html element for grid tile
let tileRow = document.querySelectorAll('.row')// select html element for tile row

let selectedTile = 0
let selectedRow = 0

/* write a function that checks the word in a row
 1.When each letter is passed into a tile, add those letters into an array. *done*
 2.join the array of letters to form a string (usersWords) *done*
 3.check/match the usersword string with the actual word *done*
 4. once the usersWord has been compared to the guessWord, if userWord is wrong progress to next row of tiles
 5.
*/
     if (input.length !== 5) {
        errorPrompt.textContent = 'You must guess a word with 5 letters'
        console.log("not enough characters")
    }
    if (input === guessWord) {
        errorPrompt.textContent = 'Well done!'
    } else {
        //input code to move to the next tile row
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
            let input = usersWord.join('')
            input = input.toUpperCase()
            console.log('clicked ' + letter)
            if (input.length == 5) { return; }
            tiles[selectedTile].textContent = letter
            usersWord.push(letter)
            console.log(usersWord)
            selectedTile += 1
        }
    }
    )
}

