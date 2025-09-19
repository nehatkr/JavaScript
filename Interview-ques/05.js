function validatePalindrome(str) {
    // Your implementation
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if( cleaned === cleaned.split('').reverse().join('')){
        console.log('Its a valid palindrom')
    }else{
        console.log("not a valid Palindrom")
    }
}

//For the purpose of user debugging.
validatePalindrome("race a car");
validatePalindrome("A man, a plan, a canal: Panama"); // Output: It's a valid palindrome