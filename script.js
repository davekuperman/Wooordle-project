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

const checkWord = function(){
    

}

//input clicked keyboard innertext into tile grid
for (let i = 0; i < getLetters.length; i++) { //loops through all the keys and adds a "click" event listener
    getLetters[i].addEventListener('click', function () {

        const letter = getLetters[i].textContent //grabs the individual letter in element

        if (letter === 'del') {
            tiles[selectedTile-1].textContent = ''
            console.log('deleted')
            
            selectedTile--
            if (selectedTile == 0) { return; }
        }
        else if (letter === 'enter') {
            console.log('enter')
        }
        else {
            console.log('clicked ' + letter)
            if (selectedTile == 5) { return; }
            tiles[selectedTile].textContent = letter
            selectedTile +=1
        }
    }
    )
}

