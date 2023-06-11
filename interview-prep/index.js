//Song Search Problem

//Design a system that allows users to search for songs based on criteria such as artists, album, genre or lyrics

const songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    album: "Album 1",
    genre: "Genre 1",
    lyrics: "Lyrics 1",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    album: "Album 2",
    genre: "Genre 1",
    lyrics: "Lyrics 2",
  },
  {
    title: "Song 3",
    artist: "Artist 1",
    album: "Album 1",
    genre: "Genre 1",
    lyrics: "Lyrics 3",
  },
];

//array methods using filter, map , reduce

// Function to search songs by criteria

function searchSongs(criteria, value) {
  if (songs.filter((song) => song[criteria] === value)) {
    return value;
  }
}

//Issue with the if condition: The filter method returns an array, not a boolean value.

// console.log(searchSongs('artist', 'Artist 1'))

function searchSongs2(criteria, value) {
  return songs.find((song) => song[criteria] === value);
}

const artist = searchSongs2("artist", "Artist 2");
// console.log(artist);

//created function searchSongs with two parameters, criteria and value
//the reason we did that is to
//we want the user to search for
//P : design system (reuseable code function) to have user search through the array get back their song , input would be the users specified criteria (key) that they want, if the key they want matches with the value of what they want then they will get back desired output
//input : 'Artist 2'
//output: song object of artist 2
//E :
//D
//A
//C

//Array map method
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//MAP
//result would be transformed array from other item
//get array of names of characters

const names = characters.map((char) => char.name);
// console.log(names);

const heights = characters.map((char) => char.height);
// console.log(heights);

const nameAndHeight = characters.map((char) => {
  char.name, char.height;
});
// console.log(nameAndHeight);

const firstName = characters.map((char) => char.name.split(" ")[0]);
// console.log(firstName);
//Reduce
//* executes a user made reduce call back function on each element in the array. passing in the return value from calculations on the preceding element return a single value
//acc = accumulator
//curr = current value
const totalMass = characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0);
// console.log(totalMass);

const totalHeight = characters.reduce(
  (acc, curr) => acc + parseInt(curr.height),
  0
);
// console.log(totalHeight);

const totalNameCharacters = characters.reduce(
  (acc, curr) => acc + curr.name.length,
  0
);
// console.log(totalNameCharacters);

//***/ reduce is primarily focused on aggregating values and not directly accessing specific values.
//get total number of characters by eye color
const totalEyeColor = characters.reduce((acc, curr) => {
  const color = curr.eye_color;
  if (acc[curr.eye_color]) {
    acc[color]++;
    //if color property exists as key in the accumulator, which is an object. if it exists, it increments the value by 1
  } else {
    acc[color] = 1;
    //if it doesnt exist it initializes the value of 1
  }
  return acc;
  //returns updated accumulator after processing all elements of the 'characters' array.
}, {});

// a = {}, c = blue => {blue: 1}
//a = {blue: 1}, c = yellow => {blue: 1, yellow : 1}
//a = {blue: 1, yellow : 1}, c = brown => {blue: 1, yellow : 1, brown: 1}
//a = {blue: 1, yellow : 1, brown: 1}, c = blue => {blue: 2, yellow : 1, brown: 1}

console.log(totalEyeColor);

//Filter
// const massGreatest = characters.filter(char => char.mass > 100)
// console.log(massGreatest);

// const heightLess = characters.filter(char => char.height < 200)
// console.log(heightLess);

// const male = characters.filter(char => char.gender === 'male')
// console.log(male);

// const female = characters.filter(char => char.gender === "female")
// console.log(female);
//Sort

//Every

//------------
//JS Reduce Practice

const numbers = [1, -1, 2, 3];

const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
//stores it in the accumulator
//reduce as two arguments: callback function and the second is initial value for the accumulator
//get result as single value
console.log(totalSum);

//-----
//Problem: Count the occurances of each word in a given sentence
//write function that takes sentence = input and return {} object containing count of each word in sentence . reduce method to perform the count
//case sensitive
// output in {} with key as sentence and value as number of times

//P:
//E "The cat is black and the dog is brown", output: {
//edge case: case sensitive
//}
//D
//A
//C

const sentence = [
  "The",
  "cat",
  "is",
  "black",
  "and",
  "the",
  "dog",
  "is",
  "brown",
];

const countWord = sentence.reduce((acc, curr) => {
  if (acc[curr]) {
    //check if current word is already a property in the accumulator 
    //acc is the object 
    acc[curr]++
    //if the property(key) exists it will be incremented by 1
  } else {
    acc[curr] = 1;
    //if the property(key) doesn't exist it will be initialized and added to the accumulator object with the value of 1
  }
  return acc;
}, {});

// console.log(countWord);



// ----------------
//filter
const mixArray = [1,2,3,4,5, "mayleen"]
const numArray = [1,2,3,4,5]
const songs4 = [
    {
      title: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      genre: "Genre 1",
      lyrics: "Lyrics 1",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      genre: "Genre 1",
      lyrics: "Lyrics 2",
    },
    {
      title: "Song 3",
      artist: "Artist 1",
      album: "Album 1",
      genre: "Genre 1",
      lyrics: "Lyrics 3",
    },
  ];

  function searchSong(key, value){
    const filteredSong = songs4.filter(song => {
        return song[key] === value 
        //song[key] is accessing the value 
    })
    return filteredSong
  }
  console.log(searchSong('artist', 'Artist 1'));
//filter selective elements, we need to use placeholder, no hard coded data 
//an array with three objects, key value pairs 
//



const evenOnly = mixArray.filter(num => num % 2 === 0)
console.log(evenOnly);

//take out only the string within the array

const stringOnly = mixArray.filter(element => typeof element === "number")
console.log(stringOnly);

console.log(typeof 2);

const sumOfAll = mixArray.reduce((acc, curr) => acc + curr, 0)
console.log(sumOfAll);

const multiplyAll = numArray.reduce((acc, curr) => acc * curr, 1)
console.log(multiplyAll);

//-------

//Create a function that takes in a multi-dimmensional array of the participants in a weight lifting contest, along with the total amount lifted. 

//The function should print the name of the person, the amounts they lifted, and their place in the contest. The order should go backwards and give a trophy to the first place person. 

//Modify the array to have more people and show that it still works. Let's use a max of 10 participants. 

//*
//P: return the name, weight, place in contest depending on score
//winner: highest score 
//[name: weight]

const malelifters = [["Jamie", 1050], ["Mark", 1020], ["Steven", 990], ["Max", 980], ["Gerald", 970], ["Brad", 955], ["Alex", 920]];

const femalelifters = [["Jenny", 400], ["Megan", 385], ["Alice", 365], ["Beth", 350], ["Becky", 320], ["Amanda", 300], ["Candice", 290], ["Jessica", 250], ["Mary", 220], ["Linda", 200]];


const contestWinner = (arr) => {
    let myMessage = "";
    for (let i = arr.length - 1; i > -1; i--){
        console.log(arr[i][1]);
        let myPlace; 
        if (i === 0){
            myPlace = "st"
        } else if (i === 1){
            myPlace = "nd"
        } else if (i === 2){
            myPlace = "rd"
        } else {
            myPlace = "th"
        }
        // console.log(`${arr[i][0]} is in ${i + 1}${myPlace}place ${i === 0? " trophy " : ""}with a total weight of ${arr[i][1]}`);
        myMessage += `${arr[i][0]} is in ${i + 1}${myPlace} place ${i === 0? " trophy " : ""}with a total weight of ${arr[i][1]}`
        if (i > 0){
            myMessage += `\n`
        }
        
    }
    return myMessage
}


console.log(contestWinner(femalelifters))

