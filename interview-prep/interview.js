//*******  SONG SEARCH */

//case insensitive
//Q: would i always receive a lower case query
//match title or/and artist key return obj
//output: array of songs, any part of the str

function searchSongs(query, songs) {
  const filterSong = songs.filter((song) => {
    // console.log(song.title)
    const songTitle = song.title.toLowerCase();
    const songArtist = song.artist.toLowerCase();
    if (songTitle.includes(query) || songArtist.includes(query)) {
      // console.log(song)
      return song;
    }
  });
  return filterSong;
}

const songs = [
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Havana", artist: "Camila Cabello" },
  { title: "Despacito", artist: "Luis Fonsi" },
  { title: "Blank Space", artist: "Taylor Swift" },
  { title: "Nobodys Perfect", artist: "Hannah Montana" },
];

const searchResults = searchSongs("ha", songs);

console.log(searchResults);

//************* HAS PAIR THAT SUMS TO X /

//if listArray = 2 integers that add to target (x)
//returning the boolean: true/false
// console.log(list[i], list[j])
// console.log("sum", list[i] + list[j])

const hasPairThatSumsToX = (list, x) => {
  let result = false;
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === x) {
        result = true;
      }
    }
  }
  return result;
};

const assert = (outcome, description) =>
  console.log(outcome ? "pass!" : "fail: " + description);

assert(hasPairThatSumsToX([1, 1, 1, 4, 5], 8) === false, "Should be false");

// assert(hasPairThatSumsToX([1, 2, 2, 3, 4, 5], 8) === true, 'Should be true: 3 + 5');

// assert(hasPairThatSumsToX([1, 1, 4, 4, 5], 8) === true, 'Should be true: 4 + 4');

// assert(hasPairThatSumsToX([1, 1, 4, 4, 5], 9) === true, 'Should be true: 4 + 5');

// assert(hasPairThatSumsToX([1, 1, 4, 4, 3], 9) === false, 'Should be false');

// assert(hasPairThatSumsToX([1, 1, 4, 5, 3], 6) === true, 'Should be true: 1 + 5');

///************ SUM OF EVEN SQ's/

// const even = numbers.filter(num => num % 2 === 0)
// console.log(even)
// const sq = even.map(even => even ** 2)
// console.log(sq)
// const sum = sq.reduce((acc, curr)=> acc + curr, 0)
// return sum

function sumOfEvenSquares(numbers) {
  // const sqArr = []
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const even = numbers[i] % 2 ? 0 : 1;
    if (even) {
      // console.log(numbers[i])
      const sq = numbers[i] ** 2;
      // sqArr.push(sq)
      sum += sq;
      // sum = sum + sq
    }
  }
  console.log(sum);
  // console.log(sqArr)

  // for (let j = 0; j < sqArr.length; j++){
  //   sum += sqArr[j]
  // }
  // console.log(sum)
}

//216
sumOfEvenSquares([3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(sumOfEvenSquares([3,4,5,6,7,8,9,10,11]));

//all even squared (2)

const puppies = ["charlie", "todd", "jim"];

const mapPuppies = puppies.map((pup) => `Puppy: ${pup}`);
console.log(mapPuppies);

//******** API REQUEST */

const weatherTimesSq = async () => {
  try {
    const response = await fetch(
      "https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=INhsFoQRoGEMqakexjwvxdVb2j2OL6b5"
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

//? the first await return a promise: HTTP Request 
//? by using await with fetch we pause the execution of the function and wait for the promise to be resolved. allowing us to accesss the "Response" object once the request is complete 
//? the second await is used with response.json()
//? the 'Response' object has a method called json() which also return a promise 
//?we wait for promise to be resolved which gives us access to the parsed JSON data 
console.log(weatherTimesSq());

///******* */
//P: input = array of num , the sum of the sqs of evenNum of the array
//input: [1,2,3,4,5] function:  4, 16,  output:  sum of sqs
//iterate thru, fiter out the even numbers , map them to have them be sq, add that sum

function sumOfSqs(arr) {
  const evenNums = arr.filter((num) => num % 2 === 0);
  // console.log(evenNums)
  const sqArray = evenNums.map((num) => num ** 2);
  const sum = sqArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  // console.log(sum)
  // return sum;
}

sumOfSqs([1, 2, 3, 4]); // Output: 20

function sumOfSqs1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      const evensqs = arr[i] ** 2;
      sum += evensqs;
    }
  }
  // console.log(sum)
  // return sum
}

sumOfSqs1([1, 2, 3, 4]); // Output: 20

function sumOfSqNum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const even = num[i] % 2 === 0;
    if (even) {
      const evenNum = num[i] ** 2;
      sum += evenNum;
    }
  }
  console.log(sum)
  return sum
}

sumOfSqNum([1, 2, 3, 4]);


//---
/*
list = array of nums
x = sum of two nums from listArray 
output: boolean (true or false) 
if exists = true , if doesnt exist = false
for loop = iterate over list, pointer 
*/

function hasPairThatSumsToX1(list, x){
    for(let i = 0; i < list.length; i++){
        for (let j = i + 1; j < list.length; j++){
            const num = list[i] + list[j]
            if (num === x){
                return true
            }
        }
    }
}

hasPairThatSumsToX1([1, 2, 3, 4, 5], 8)


///**** Practice */
for (let i = 0; i < 5; i++){
    console.log(`i is: ${i}`);
    for (let j = 0; j < 5; j++){
        // console.log(`j: ${j}`);
    }
    console.log("-------");
}

/*
the first loop is going to run whats between it,
so it will run j loop less than 5 times while j is also running less than 5
*/


for (let i = 0; i < 11; i++){
    for (let j = 0; j < 11; j++){
        // console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----");
}


const storeInventory = [["Item : Computer", "Price: $50", "Inventory: 25"],["Item : Monitors", "Price: $200", "Inventory: 56"],["Item : Headphones", "Price: $400", "Inventory: 7"],["Item : Printers", "Price: $100", "Inventory: 90"],["Item : USB Cable", "Price: $9", "Inventory: 500"],["Item : Router", "Price: $350", "Inventory: 23"],["Item : Speakers", "Price: $200", "Inventory: 27"],["Item : Wireless Keyboard", "Price: $45", "Inventory: 6"],["Item : Fans", "Price: $35", "Inventory: 6"]]; 

for (let i = 0; i < storeInventory.length; i++){
    // console.log(storeInventory[i]);
    if (i > 0){
        console.log("-----");
    }
    for (let j = 0; j < storeInventory[i].length; j++){
        //console.log(storeInventory[i]); //length is three
        console.log(storeInventory[i][j]); 
        //storeInventory[1][0] = item: computer
        //storeInventory[1][1] = price: $50
        //storeInventory[1][3] = inventory: 25
        //--- it will be less than the length of the inner array, in this case its 3 and then it will go through outloop again and once again give the value of the follow inner array until j is 3 etc
    }
}

//setting up for loop and the outerloop is setting up condition to run less than the array of storeInventory. 

if (i === 0){
    console.log("that is an equality");
}

// || OR
// && AND 


const numArray = [1,2,3,4]
let min = 0
