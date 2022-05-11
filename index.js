let phrase = 'estou adorando estudar frontend no hall to code'
let vowels = 0


function vowelCounter () {
  for(let i= 0; i < phrase.length; i++) {
    
    if(
      phrase[i] == 'a' ||
      phrase[i] == 'e' ||
      phrase[i] == 'i' ||
      phrase[i] == 'o' ||
      phrase[i] == 'u'
      ) {
        vowels++
      }
  }
}

vowelCounter()

console.log(vowels)