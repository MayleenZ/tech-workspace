/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 /*
 array of int = nums
 int = target 
 return indices of two numbers (in array format)that add up to target 

 input nums = [2,7,11,15] target = 9
 output [0,1]
 because 2 = index 0 and 7 = index 1 which = 9 

 D: for loop, array, 
 // iterate through nums index 
 //pointer we will see which values add to target 
 //nested for loop, that will drag a pointer and compare or can even do a variable that takes in a number and compares it to a sum of target 

 nums = [3,3]
 target = 6

 */
//* My solution - complexity O(N^2) Brute Force Solution - Linear Search 

//  var twoSum = function(nums, target) {
//     const sums = [];
//     for (let i = 0; i < nums.length; i ++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 sums.push(i, j)
//                 break;
//             }
//         }

//     }
//     return sums 
// };


// Input: nums = [3,2,4], target = 6

//* Neetcode Video Solution
/**
 * Hash Map - 1 Pass
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
    for (let i = 0; i < nums.length; i++) { /* Time O(N) */
    //iterating over each num in the array 
        const num = nums[i];
        //value of num within each index 
        const complement = (target - num);
        console.log(target,num);
        console.log(`complement: ${complement}`);
        //complement is the number needed to reach the target sum 
        const sumIndex = map.get(complement);
        // console.log(sumIndex);
        //retrieves the index of the complement from the 'map'. Initially the map is empty so this will return undefined 

        const isTarget = map.has(complement)
        console.log(isTarget); //returns boolean 
        //checks if complement exist in 'map' by using the 'has' method. return true if has or false if does not 

        if (isTarget) return [ `index: ${i}, sumIndex: ${sumIndex}`];
        //if complement exists in map, means we found two numbers that add up to the target. Function returns an array containing current index 'i' and index of the complement, sumIndex 

        map.set(num, i); /* Space O(N) */
        // if complement does not exist , we store the current number 'num' as the key and its index 'i' as value. Allowing us to check for complements through the interations
        console.log(map);
    }

    return [ -1, -1 ];
    //if no match is found it returns [-1,-1]
}

console.log(twoSum([2,1,5,3], 4))


/*
efficient of making a hash map to see if problem exists instead of brute force which ws my solution 
mapping to index of each value 
mapping the value to the index 
Val: index 
hash is empty difference between 4-2 and after done visiting it move to second element 1 and then add to hashmap 
2 : 0 
4-1 = 3 and check if 3 is in hashmap but it is in array, 
1: 1
4-5 = -1 , does not exist in hash 
5 : 2
4 - 3 = 1 , does exist in hash and index is 1 (now found two values that exist in target and have to return index)
can work in just one pass 
Time: O (n)
*/