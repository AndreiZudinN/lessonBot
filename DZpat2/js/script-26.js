// function add(...args) {
//     // const newArgs = (...args);
//   let ar = 0;
//     for (const arg of args) {
//         console.log(arg);
//       ar += arg;
      
//     };
//     return ar;
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));

// Change code below this line
// function addOverNum(ferstNamber,...args) {
//   let total = 0;

//     for (const arg of args) {
//       if (ferstNamber < arg)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
// const arrayNumber = (...array);
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));



// function findMatches(array, ...args) {
//   const matches = []; // Don’t change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions(potions){
return potions},
  // Change code above this line
};
console.log(atTheOldToad.getPotions());