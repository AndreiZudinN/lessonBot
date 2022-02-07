// function filterArray(numbers, value) {
//    // Change code below this line
// for ( const number of numbers){
// if (number > value){
// numbers = number;}
// }
//   return numbers;


//   // Change code above this line
// }


let numbers = [1, 2, 3, 4, 5];
const value = 3;
let newArray = [];

for (let i = 1; i < numbers.length + 1; i += 1) {
    // console.log(i);
    if (numbers[i] > value) {
        newArray.push(numbers[i]);
        
    }
}
console.log(newArray);