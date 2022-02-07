const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort();

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);