function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  //for (let i = 0; i < firstArray.length; i += 1) {
    //if (secondArray.includes(firstArray[i])) {
      //commonElements.push(firstArray[i]);
    //}
  //}
firstArray.forEach(function (number, index) {
  if ( secondArray.includes(number)){
    commonElements.push(number)
  }
 
});
  return commonElements;
  // Change code above this line
}