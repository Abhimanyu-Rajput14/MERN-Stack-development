function intersect(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  }
  
  // Example usage
  const array1 = [1, 2, 2, 3, 4];
  const array2 = [2, 2, 3, 3, 5];
  
  console.log(intersect(array1, array2)); // Output: [2, 2, 3]
  