function isPalindrome(word) {
  let startIndex = 0;
  let endIndex = word.length - 1;

  while (startIndex < endIndex) {
    if (word[startIndex] != word[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
