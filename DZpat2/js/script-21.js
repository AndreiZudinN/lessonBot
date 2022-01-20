let string = "The quick brown fox jumped over the lazy dog";
let arrayString = string.split(" ");
console.log(arrayString);
let maxString = "";
for (const arrayID of arrayString) {
    console.log(arrayID);
    if (arrayID.length > maxString.length) {
        maxString = arrayID
    }
}
console.log(maxString);

