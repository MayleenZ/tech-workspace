function isValidIP(str) {
    const octets = str.split('.');
    //splits it inot an array of strings 
  
    if (octets.length !== 4) {
      return false;
    }
    //check if length of octets array is equal to 4 and if not, returns false
  
    for (let i = 0; i < octets.length; i++) {
        const octet = octets[i];
    
        if (octet.trim() === '') {
          return false;
        }
        //within the loop function check if current octet, after removing the whitespace using trim method, is an empty string
  
      const num = parseInt(octet, 10);
      //parseInt converst current octet string into a number
      //pareInt() takes two arguments, the string and the base used for conversion, in this case its 10 because it going to be parsed as a decimal number
  
      if (isNaN(num) || num < 0 || num > 255 || String(num) !== octet) {
        return false;
      }
      //isNaN() method checks if num is Not a Number and the rest of the conditions using || (OR)
      //last condition String() converts num back to string and checks if leading zeroes were removed during the trim method, and if they were then it would return false 
      //It ensures that the original octet and the converted num are not equal
    }
  
    return true;
  }
  
  console.log(isValidIP('123.456.78.90'))
