// Write a function named first_non_repeating_letter that takes a string input, and returns the first character 
// that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once 
// in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should 
// return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample 
// tests.

const firstNonRepeatingLetter = (str) => {
    let obj = {}
    let lowerCaseStr = str.toLowerCase()

    for(let char of lowerCaseStr){
        if(obj[char]){
            obj[char]++
        }else{
            obj[char] = 1
        }
    }

    for(let char of str){
        if(obj[char.toLowerCase()] === 1){
            return char
        } 
    }

    return ""
}

firstNonRepeatingLetter("sTreSS")

//Solution 2

const firstNonRepeatingLetter = (str) => {
    let lowerStr = str.toLowerCase()
    for(let i = 0; i < lowerStr.length; i++){
        if(lowerStr.indexOf(lowerStr[i]) === lowerStr.lastIndexOf(lowerStr[i])){
            return str[i]
        }
    }

    return ""
}

firstNonRepeatingLetter("sTreSS")