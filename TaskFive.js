word = prompt("Input a word: ")
let counter = 0
let printed = ""
for (let character of word){
if (counter%2 == 0){
printed = printed + character
counter++
}
}
console.log(printed)
