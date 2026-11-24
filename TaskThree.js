let userInput = prompt("Input a string: ")
let reversedString = ""

for (let character of userInput) {
reversedString = character + reversedString
}

if (reversedString === userInput) {
console.log("This word is a palindrome")
} else {
console.log("This word is not a palindrome")
}
