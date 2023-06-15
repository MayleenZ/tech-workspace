// Create an array of all integers from 2 to n
// Set all elements of the array to true
// Starting with 2, iterate through the array. If the current element is true, it is still considered prime. Since we know that all multiples of that number are NOT prime, iterate through all multiples of that number up to n and set them equal to false
// Change the current element to the next non-false index.
// Return the corresponding number value for any element still marked as prime (value of true).


// function primeNums(arr){
// let multiples = 0
//     for (let i = 0; i < arr.length; i ++){
//         arr[i] = true;
//         console.log(arr[i]);
//     }
// }

// primeNums([2,3,4,5,6,7,8,9,10])


const sieveOfEratosthenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    //output is the new Array created with length of limit+1 and all elements are set to true using .fill(true)
    output[0] = false;
    output[1] = false;
    //since 0 and 1 are not primes, they are set to false
    for (let i = 2; i <= limit; i++) {
        //loop starting from 2 up to limit, representing the nums to be check for primality 
      if (output[i] === true) {
        //if value at index i in output array is true, meaning that i is still considered prime, the below block executes
        //nested loop iterates through the multiples of current prime number: i 
        //starting from i * 2, the loop updates all multiples of i in the output array to false, as they are not prime numbers bc they have multiples
        for (let j = i * 2; j <= limit; j += i) {
          output[j] = false;
        }
      }
    }
    //now we have the return 
    //empty array initialized result 
    let result = [];
    //this iterates through the output array 
    for (let i = 0; i <= limit; i++) {
      if (output[i]) {
        //if value of output[i] is true, then it will be push the index
        result.push(i);
      }
    }
    console.log(result);
    return result;
  };
  

console.log(sieveOfEratosthenes(13))

// Create a results array, iterate through the input array, and add the correct index if its value is true.
// Use a combination of .map() and .filter() to capture indices where the value is true and remove the rest.
// Use .reduce() and include the third optional index callback argument to construct a results array.