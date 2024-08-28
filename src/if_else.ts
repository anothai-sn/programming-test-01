// Create funcion input number and mod with 2 if = 0 return "Even number" else return "Odd number"
function evenOdd(num:number) {
    return num % 2 == 0 ? "Even number" : "Odd number"
}

console.log(`The 4 is a ${evenOdd(4)}`) // Output 4 is a Even number
console.log(`The 7 number is a ${evenOdd(7)}`) // Output 7 is a Odd number

// Create function input minute
function parkingBill(minute:number) {
    if(minute/60 > 6) {
        return 100 // if > 6 hour bill is 100 bath only
    } else if(minute/60 >= 3) {
        return Math.floor(minute/60) * 20 // if > 3 hour but < 6 hour calulate minute/60 and * 20 

    } else if(minute/60 >= 2) {
        return Math.floor(minute/60) * 10 // if > 2 hour but < 3 hourccalulate minute/60 and * 10

    } else {
        return "Free" // if < 2 hour
    }
}

console.log(`Praking 50 minute: ${parkingBill(50)} bath`)
console.log(`Praking 170 mintue: ${parkingBill(170)} bath`)
console.log(`Praking 250 mintue: ${parkingBill(250)} bath`)
console.log(`Praking 370 mintue: ${parkingBill(370)} bath`)