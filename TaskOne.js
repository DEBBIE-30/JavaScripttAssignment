const prompt = require("prompt-sync")();
for(let i = 100; i <= 999; i++){
let digits = i%10
let digits2 = (Math.floor(counter/10)%10)
let digits3 = (Math.floor(counter/100))
if(digit2*digits + digits2*digits2 + digits3*digits3 == i){
console.log(i)
}
}
