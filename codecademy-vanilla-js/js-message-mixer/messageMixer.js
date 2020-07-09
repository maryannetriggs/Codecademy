function countCharacter(inputString, inputCharacter) {
  let count = 0
  const string = inputString.toLowerCase()
  const character = inputCharacter.toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++
    }
  }
  return count
}

function capitaliseFirstCharacterOfWords(string) {
  const arr = string.split(' ')
  for (let i = 0; i < arr.length; i++) {  
    const word = arr[i]
    arr[i] = word[0].toUpperCase() + word.substring(1)
  }
  return arr.join(' ')
}


function reverseWord(word) {
  return word.split('').reverse().join('')
}


function reverseAllWords(sentence) {
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i])
  }
  return words.join(' ')
}


function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith)
}


function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith)
}


function encode(string) {
  const replacementObject = { 
    'a': '@', 
    's': '$', 
    'i': '!', 
    'o': '0' 
  }
  for (const key in replacementObject) {
    string = replaceAllOccurrences(string, key, replacementObject[key])
  }	
  return string
}


function palindrome(str) {
  return `${str} ${reverseWord(str)}`
}


function pigLatin(sentence, character) {
  return sentence.split(' ').join(character + ' ')
}




export { countCharacter, capitaliseFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin }
