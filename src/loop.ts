// If you run this function the the output is "NaN", How?
// function arrayAVG(array_num:number[]) {
//     var sum:number = 0
//     for(let i = 0; i <= array_num.length; i++) {
//         sum += array_num[i]
//     }

//     return sum/array_num.length
// }


// Create funcion input array number
function arrayAVG(array_num:number[]) {
    var sum:number = 0
    for(let i = 0; i < array_num.length; i++) {
        sum += array_num[i]
    } // Loop find the sum of array number

    return sum/array_num.length // Find average by /length of array
}

console.log(`Array average ${arrayAVG([1, 3, 4, 7])}`) // Ouput average of array number

// Create function for create the tree
function tree(num: number): string {
    if (num < 3) {
      return "";
    } // Check number, The tree must more than 2
  
    let tree = "" // ต้นไม้ที่ยังไม่ถูกสร้าง
    for (let i = 1; i <= num; i++) {
        let row = "" 
        // Loops เพื่อสร้างช่องว่างตามค่า num ที่มีและ -1 เพื่อเหลือพื้นที่ไว้แสดงใบ
        for (let j = 0; j < num - i; j++) {
          row += " "
        } 
        // Loop เพื่อสร้างใบ(*)มีจำนวนตามรอบที่กำกลังทำอยู่(i) และเพิ่มขี้นไปเรื่อยจนหมด
        for (let j = 0; j < i; j++) {
          row += "* "
        }

        tree += row + "\n" // เป็นการรวมช่องว่าง(" ") กับใบใม้(*) ของแต่ละชั้น หรือแต่ละรอบของการ Loop
      }  

      // สร้างลำต้น
      let row = ""
      for (let i = 0; i < num-1; i++) {
        row += " "
      } tree += row
  
    return tree + "*"
  }
  
  console.log("The tree \n" + tree(4));