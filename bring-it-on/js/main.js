// *Variables*
// Create a variable and console log the value
let num = 10
console.log(num)
// Create a variable, add 10 to it, and alert the value
let num2 = 20
num2 += 20
//alert(num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums (a,b,c,d){
    return (a-b-c-d)
}
console.log(sub4Nums(19,2,5,7))
// Create a function that divides one number by another and returns the remainder
function divid (q,w){
    return q % w
}
console.log(divid(50,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addJumanji(u,i){
    let answer = u + i
    if (answer > 50){
        alert('Jumanji')
    }
}
addJumanji (25,31)
    // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divByThree (t,y,u){
    let product = t*y*u
    if ( product % 3 === 0 ){
        alert('Zebra')
    }
}
divByThree(3,33,15)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function printNum (word, num){
    for (let i = 0; i <= num; i++){
        console.log(word)
    }
}

printNum('Hello', 10)