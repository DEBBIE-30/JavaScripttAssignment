let word = prompt("Eneter a word: ")
vowelCounter = 0
consonantCounter = 0
for (let character of word){
if ('aeiou'.includes(character)){
 vowelCounter++
}let userInput = prompt("Input a string: ")
let reversedString = ""
for (let character of userInput) {
reversedString = character + reversedString
}
 console.log(reversedString)

else{
 consonantCounter++
}
}
console.log(`There are ${vowelCounter} vowels in this word and ${consonantCounter} consonants`)

