function createNumbersArray() {
const numbers = [];
  for (let i = 0; i <= 100; i++) {
    numbers.push(i);
  }
 return numbers;
}
function isNotDivisibleByThree(number) {
  return number % 3 !== 0;
}
function handleClickB1() {
  const numbers = createNumbersArray();
  const result = numbers.filter(isNotDivisibleByThree);
  console.log(result);
}

function handleClickB2() {
  const numbers = createNumbersArray();
   num = 100;
  for(i=100; i <= 150 ; i++){
    numbers.push(i);
  
 }
   console.log(numbers);
}
function addThree(number) {
  return number + 3;
}
function handleClickB3() {
  const numbers = createNumbersArray();
  const result = numbers.map(addThree);

   console.log(result);
}
function handleClickB4() {
  const numbers = createNumbersArray();
  const res=[];
  for (i=20 ; i <= 40 ;i++){
    res.push(numbers[i]);
  }

     console.log(res);

}
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
}

function compareDescending(a, b) {
  return a-b;
}
function handleClickB5() {
  const numbers = createNumbersArray();
   shuffleArray(numbers);
  console.log("Shuffled:", numbers);
  numbers.sort(compareDescending);
  console.log("Sorted descending:", numbers.reverse());

}