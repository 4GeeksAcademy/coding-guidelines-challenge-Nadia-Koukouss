function sumPositiveNumbers(numbers) {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        totalSum += numbers[i];
      }
    }
    return totalSum;
  }
  
  const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
  console.log(sumPositiveNumbers(numbers));