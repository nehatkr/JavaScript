// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function longestWord(str){
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
    for(var x=1; x<array1.length; x++){
        if (result.length < array1[x].length) {
            return array1[x];
        }
    }
    return result;
}

console.log(longestWord("longest tutorial ever"))