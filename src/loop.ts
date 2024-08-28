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
  
    let tree = ""
    for (let i = 1; i <= num; i++) {
        let row = "" 
        // สร้างช่องว่าง
        for (let j = 0; j <num - i; j++) {
          row += " "
        }
        // สร้างใบไม้จากยอดสุด ลงล่างสุด
        for (let j = 0; j < i; j++) {
          row += "*"
        }
        tree += row + "\n"
      }
  
    return tree
  }
  
  console.log(tree(5))