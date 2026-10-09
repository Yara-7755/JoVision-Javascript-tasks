function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2===0)
    sum += numbers[i];
  }
  return sum;
}

function handleClick() {
const numbers = [];
  for (let i = 0; i <= 100; i++) {
    numbers.push(i);
  }
  const sum = calculateSum(numbers);
  console.log("Sum:", sum);
}