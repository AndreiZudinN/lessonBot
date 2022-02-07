function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else { newArray.push(numbers[i]) }}
  return newArray;
  // Change code above this line
}
