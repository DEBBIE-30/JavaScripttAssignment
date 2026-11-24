let word = prompt("Eneter a word: ")
vowelCounter = 0
consonantCounter = 0
for (let character of word){
if ('aeiou'.includes(character)){
 vowelCounter++
}
else{
 consonantCounter++
}
}
console.log(`There are ${vowelCounter} vowels in this word and ${consonantCounter} consonants`)
