// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

function sortString(str){
    // Split the string into an array of characters, sort the array, and join the characters back into a string
    return str.split('').sort().join('');
}

console.log(sortString('nehakumari'));
