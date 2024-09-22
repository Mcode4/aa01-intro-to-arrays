/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.
*/

// Your code here 
function threeIncreasing(arr){
    for(let i = 2; i< arr.length ; i++){
        let num1 = arr[i-2]
        let num2 = arr[i-1]
        let num3 = arr[i]

        if(num3 === (num2 + 1) && num2 === (num1 + 1)){
            console.log(`${num1}, ${num2}, ${num3}, are consecutive`)
            return true
        }
        // else{
        //     console.log(`Checking.. FirstNum: ${num1} - I[${i-2}] |  SecondNum: ${num2} - I[${i-1}] | ThirdNum: ${num3} - I[${i}]` )
        // }
    }
    return false
}



console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;