
const strings = ["apple", "banana", "orange", "grape", "kiwi"];

// Define a regex pattern to match strings starting with "a"
const regex = /^a.*/;

// Iterate through the array and match each string against the regex pattern
const matches = strings.filter(str => regex.test(str));

console.log(matches); 
