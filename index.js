const $inputPhrase = document.querySelector('.input')
const $displayResult = document.querySelector('.display-result')
const $button= document.querySelector('.button')
const $form= document.querySelector('.box')

const vowels = 'aáàâãAÀÁÂÃeéêEÉÊiíIÍoóôõOÓÔÕuúUÚ'

function vowelCounter () {
  let vowelsCount = 0
  const phrase = $inputPhrase.value

  for(let i= 0; i < phrase.length; i++) {
    const isVowel = vowels.includes(phrase[i])
    
    if(isVowel)  vowelsCount++
    }
  return vowelsCount
}

$form.addEventListener('submit', function(event){
  event.preventDefault()
  $displayResult.textContent = vowelCounter()
})


