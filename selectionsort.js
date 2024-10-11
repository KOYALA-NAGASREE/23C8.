function startSort() {
  let input = document.getElementById('arrayInput').value;
  let arr = input.split(',').map(Number); // Convert input to an array of numbers
  if (arr.some(isNaN)) {
      alert("Please enter valid numbers separated by commas.");
      return;
  }
  selectionSort(arr);
}

function selectionSort(arr) {
  let stepsElement = document.getElementById('steps');
  stepsElement.innerHTML = ''; // Clear previous steps
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
              minIdx = j;
          }
      }
      if (minIdx !== i) {
          // Swap the found minimum element with the first element
          let temp = arr[minIdx];
          arr[minIdx] = arr[i];
          arr[i] = temp;
      }

      // Display the current state of the array after each iteration
      let listItem = document.createElement('li');
      listItem.textContent = Step ${i + 1}: ${arr.join(', ')};
      stepsElement.appendChild(listItem);
  }
}