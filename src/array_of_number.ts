// Create array
var array_num:number[] = [2, 5, 7, 3, 8, 9, 0]

// Find top three array number
var top_three_array:string = "" // Set result top three number

for(let i:number = 0; i < 3; i++) {
    top_three_array += ` ${array_num[i]},`
} // Loop for find top three array number

console.log(`Top three array: ${top_three_array}`) // Ouput top three array number

// หา Array ตรงกลางด้วยการหารสองและปัดเศษลงเนื่องจาก Array เริ่มต้นที่ 0 ซึ่งจะตรงกับตำแหน่งตรงกลางของ Array พอดี
console.log(`Medium array: ${array_num[Math.floor(array_num.length/2)]}`) 

// Find min and max Array
array_num.sort() // Sort min to max
console.log(`Min array: ${array_num[0]}`) // เนื่องจากจำนวนที่น้อยที่สุดจะอยู่ตำแหน่งแรกซึ่งก็คือ 0
console.log(`Max array: ${array_num[array_num.length-1]}`) // เนื่องจากจำนวนที่มากที่สุดจะอยู่หลังสุดตามความยาว และเพราะ Array เริ่มต้นที่ 0 เลยต้อง -1 ไปด้วย