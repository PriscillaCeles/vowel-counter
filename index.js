const $inputPhrase = document.querySelector('.input')
const $displayResult = document.querySelector('.display-result')
const $button= document.querySelector('.button')

const vowels = 'aáàâãAÀÁÂÃeéêEÉÊiíIÍoóôõOÓÔÕuúUÚ'


let vowelsCount = 0



function vowelCounter () {
  let phrase = $inputPhrase.value
  for(let i= 0; i < phrase.length; i++) {
    for(let z= 0; z < vowels.length; z++){
      if(phrase[i] === vowels[z]){
        vowelsCount++
      }
    }
  }
  return vowelsCount
}

$button.addEventListener('click', function(){
  vowelCounter()
  $displayResult.textContent = vowelsCount
  vowelsCount = 0
})


