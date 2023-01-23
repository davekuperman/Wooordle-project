//VARIABLES LIST

const words = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt"]
const guessWord = words[Math.floor(Math.random() * words.length)]/*generates the random word that user must guess*/
console.log(guessWord)

let wordGuesses = [[]]

let getLetters = document.querySelectorAll('.key') // selects html element for keyboard keys

let tiles = document.querySelectorAll('.tile') // select html element for grid tile
let tileRow = document.querySelectorAll('.row')// select html element for tile row
console.log(tileRow)

let selectedTile = 0

function deleteLetter() {
    selectedTile--
    const currentTile = document.querySelector('.tile')
    console.log(currentTile)
}

//input clicked keyboard innertext into tile grid
for (let i = 0; i < getLetters.length; i++) { //loops through all the keys and adds a "click" event listener
    getLetters[i].addEventListener('click', function () {

        const letter = getLetters[i].textContent //grabs the individual letter in element

        if (letter === 'del') {
            tiles[selectedTile - 1].textContent = ''
            console.log('deleted')
            if (selectedTile <= 1) { return; }
            selectedTile--
        }
        else if (letter === 'enter') {
            console.log('enter')
        }
        else {
            console.log('clicked ' + letter)
            tiles[selectedTile].textContent = letter
            if (selectedTile >= 4) { return; }
            selectedTile++
        }
    }
    )
}

