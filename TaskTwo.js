let userInput = prompt("Input a number(-1 to stop): ")
let counter  = 1
let total = 1
while (userInput != -1){
total+=userInput 
let average = total/counter
 counter++
 console.log(`The average is ${average}`)
let userInput = prompt("Input a number(-1 to stop): ")
}
