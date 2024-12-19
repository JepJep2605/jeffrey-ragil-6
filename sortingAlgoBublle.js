let numbers = [];

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Enter number ${i + 1}:`), 10);
  numbers.push(number);
}


function bubbleSort(array) {
  let n = array.length;
  console.log("Starting Bubble Sort...");

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing ${array[j]} and ${array[j + 1]}`);

      if (array[j] > array[j + 1]) {
        
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        console.log(`Swapped ${array[j + 1]} and ${array[j]} -> [${array.join(", ")}]`);
      }
    }
  }

  console.log("Bubble Sort Complete!");
  return array;
}

console.log("Initial Array:", numbers);

let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);